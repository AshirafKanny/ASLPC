// One-off: copies the launch articles (previously hard-coded in the site) into Sanity.
// Safe to re-run: each article keeps a fixed document ID, so it is replaced, not duplicated.
//
// Needs a Sanity API token with Editor rights in .env.local:
//   SANITY_API_WRITE_TOKEN=...
// Run with: node --env-file=.env.local scripts/migrate-insights-to-sanity.mjs
import { createReadStream, readFileSync } from "node:fs";
import { basename } from "node:path";
import { randomUUID } from "node:crypto";
import { createClient } from "next-sanity";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN (see the comment at the top of this file).");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cxpuy3cc",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-10-01",
  token,
  useCdn: false,
});

const ALT_TEXT = {
  "public/Research b3.jpg": "Colleagues in business suits reviewing a printed document together",
  "public/football b1.jpg": "A football, boots and kit arranged beside an empty wooden frame",
  "public/law b2.jpg": "Bronze scales of justice, a gavel and a Lady Justice statue",
};

const key = () => randomUUID().replace(/-/g, "").slice(0, 12);

const paragraphToBlock = (text) => ({
  _type: "block",
  _key: key(),
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
});

const articles = JSON.parse(readFileSync(new URL("./data/legacy-insights.json", import.meta.url), "utf8"));

for (const article of articles) {
  const asset = await client.assets.upload("image", createReadStream(article.image), {
    filename: basename(article.image),
  });

  const doc = {
    _id: `post-${article.slug}`,
    _type: "post",
    title: article.title,
    accentPhrase: article.accentPhrase,
    slug: { _type: "slug", current: article.slug },
    summary: article.summary,
    coverImage: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt: ALT_TEXT[article.image] ?? article.title,
    },
    body: article.body.map(paragraphToBlock),
    author: article.author,
    publishedAt: new Date(`${article.publishedAt}T09:00:00Z`).toISOString(),
    pillar: article.pillar,
    tags: article.tags,
  };

  await client.createOrReplace(doc);
  console.log(`✓ ${article.title}`);
}

console.log(`\nDone: ${articles.length} articles are in Sanity.`);
