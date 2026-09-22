const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const MAX_DIM = 2400;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 82;

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
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return null;

  const before = fs.statSync(file).size;
  const inputBuffer = fs.readFileSync(file);
  const meta = await sharp(inputBuffer, { failOn: "none" }).metadata();

  let pipeline = sharp(inputBuffer, { failOn: "none" }).rotate();
  if ((meta.width || 0) > MAX_DIM || (meta.height || 0) > MAX_DIM) {
    pipeline = pipeline.resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else if (ext === ".png") {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
  }

  const outputBuffer = await pipeline.toBuffer();
  const tmpPath = `${file}.tmp${process.pid}`;
  fs.writeFileSync(tmpPath, outputBuffer);
  fs.renameSync(tmpPath, file);
  const after = fs.statSync(file).size;
  return { file: path.relative(PUBLIC_DIR, file), before, after };
}

(async () => {
  const files = walk(PUBLIC_DIR).filter((f) => [".jpg", ".jpeg", ".png", ".webp"].includes(path.extname(f).toLowerCase()));
  const results = [];
  for (const f of files) {
    try {
      const r = await processFile(f);
      if (r) results.push(r);
    } catch (err) {
      console.error("FAILED", f, err.message);
    }
  }

  let totalBefore = 0;
  let totalAfter = 0;
  for (const r of results) {
    totalBefore += r.before;
    totalAfter += r.after;
    const pct = (100 * (1 - r.after / r.before)).toFixed(1);
    console.log(`${r.file}\t${(r.before / 1024 / 1024).toFixed(2)}MB -> ${(r.after / 1024 / 1024).toFixed(2)}MB\t(-${pct}%)`);
  }
  console.log("---");
  console.log(`TOTAL: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB (-${(100 * (1 - totalAfter / totalBefore)).toFixed(1)}%)`);
})();
