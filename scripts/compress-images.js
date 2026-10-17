// Shrinks oversized images in public/ in place: same filename, same format.
// Run with: node scripts/compress-images.js
//
// Only files that are larger than MAX_BYTES or MAX_DIM are re-encoded, so
// running it again does not keep re-compressing (and degrading) images that
// are already web-sized. A result is only kept if it is smaller than the original.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const MAX_DIM = 2400;
const MAX_BYTES = 600 * 1024;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function walk(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(p));
    else out.push(p);
  }
  return out;
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const before = fs.statSync(file).size;
  const inputBuffer = fs.readFileSync(file);
  const meta = await sharp(inputBuffer, { failOn: "none" }).metadata();
  const tooLarge = (meta.width || 0) > MAX_DIM || (meta.height || 0) > MAX_DIM;

  if (!tooLarge && before <= MAX_BYTES) return { file, before, after: before, skipped: true };

  // .rotate() bakes in the EXIF orientation, since metadata is stripped on output.
  let pipeline = sharp(inputBuffer, { failOn: "none" }).rotate();
  if (tooLarge) {
    pipeline = pipeline.resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY, effort: 6 });
  } else {
    pipeline = pipeline.png({ compressionLevel: 9, effort: 10 });
  }

  const outputBuffer = await pipeline.toBuffer();
  if (outputBuffer.length >= before) return { file, before, after: before, skipped: true };

  const tmpPath = `${file}.tmp${process.pid}`;
  fs.writeFileSync(tmpPath, outputBuffer);
  fs.renameSync(tmpPath, file);
  return { file, before, after: outputBuffer.length, skipped: false };
}

(async () => {
  const files = walk(PUBLIC_DIR).filter((f) => EXTENSIONS.includes(path.extname(f).toLowerCase()));
  const results = [];
  for (const f of files) {
    try {
      results.push(await processFile(f));
    } catch (err) {
      console.error("FAILED", path.relative(PUBLIC_DIR, f), err.message);
    }
  }

  const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);
  let totalBefore = 0;
  let totalAfter = 0;
  for (const r of results.sort((a, b) => b.before - a.before)) {
    totalBefore += r.before;
    totalAfter += r.after;
    if (r.skipped) continue;
    const pct = (100 * (1 - r.after / r.before)).toFixed(1);
    console.log(`${path.relative(PUBLIC_DIR, r.file)}\t${mb(r.before)}MB -> ${mb(r.after)}MB\t(-${pct}%)`);
  }
  console.log("---");
  console.log(`${results.filter((r) => !r.skipped).length} of ${results.length} images compressed`);
  console.log(`TOTAL: ${mb(totalBefore)}MB -> ${mb(totalAfter)}MB`);
})();
