import { sanityFetch } from "@/sanity/client";
import type { InsightArticle, InsightImage } from "./types";

// Articles are written and published by ASLPC staff in the Sanity Studio at /studio.
// Only articles whose publish date has arrived are shown.

const WORDS_PER_MINUTE = 200;

const CARD_FIELDS = /* groq */ `
  "slug": slug.current,
  title,
  accentPhrase,
  author,
  publishedAt,
  pillar,
  summary,
  "tags": coalesce(tags, []),
  "coverImage": coverImage{ alt, hotspot, "src": asset->url, "lqip": asset->metadata.lqip },
  "wordCount": length(string::split(pt::text(body), " "))
`;

const PUBLISHED = /* groq */ `_type == "post" && defined(slug.current) && publishedAt <= now()`;

type RawImage = { src?: string; alt?: string; lqip?: string; hotspot?: { x: number; y: number } } | null;
type RawInsight = Omit<InsightArticle, "image" | "readingTimeMinutes" | "body"> & {
  coverImage: RawImage;
  wordCount: number | null;
  body?: InsightArticle["body"];
};

function toImage(raw: RawImage, fallbackAlt: string): InsightImage | null {
  if (!raw?.src) return null;
  return {
    src: raw.src,
    alt: raw.alt || fallbackAlt,
    blurDataURL: raw.lqip,
    // Honour the focal point chosen in the Studio when the image is cropped by object-cover.
    objectPosition: raw.hotspot ? `${Math.round(raw.hotspot.x * 100)}% ${Math.round(raw.hotspot.y * 100)}%` : undefined,
  };
}

function toInsight(raw: RawInsight): InsightArticle {
  const { coverImage, wordCount, ...rest } = raw;
  return {
    ...rest,
    body: raw.body ?? [],
    image: toImage(coverImage, raw.title),
    readingTimeMinutes: Math.max(1, Math.round((wordCount ?? 0) / WORDS_PER_MINUTE)),
  };
}

export async function getInsights(): Promise<InsightArticle[]> {
  const rows = await sanityFetch<RawInsight[]>(`*[${PUBLISHED}] | order(publishedAt desc) { ${CARD_FIELDS} }`);
  return rows.map(toInsight);
}

export async function getRecentInsights(count: number): Promise<InsightArticle[]> {
  const rows = await sanityFetch<RawInsight[]>(
    `*[${PUBLISHED}] | order(publishedAt desc) [0...$count] { ${CARD_FIELDS} }`,
    { count },
  );
  return rows.map(toInsight);
}

export async function getInsightBySlug(slug: string): Promise<InsightArticle | undefined> {
  const row = await sanityFetch<RawInsight | null>(
    `*[${PUBLISHED} && slug.current == $slug][0] {
      ${CARD_FIELDS},
      body[]{ ..., _type == "image" => { ..., "src": asset->url, "lqip": asset->metadata.lqip, "dimensions": asset->metadata.dimensions } }
    }`,
    { slug },
  );
  return row ? toInsight(row) : undefined;
}

export async function getInsightSlugs(): Promise<string[]> {
  return sanityFetch<string[]>(`*[${PUBLISHED}].slug.current`);
}
