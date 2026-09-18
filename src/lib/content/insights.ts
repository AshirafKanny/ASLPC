import type { InsightArticle } from "./types";

export const insights: InsightArticle[] = [
  {
    slug: "why-african-federations-need-independent-tribunals",
    title: "Why African Federations Need Independent Dispute Tribunals",
    author: "ASLPC Research Team",
    publishedAt: "2026-06-18",
    pillar: "governance",
    summary:
      "A look at the case for independent dispute resolution mechanisms within national sports federations.",
    readingTimeMinutes: 6,
    tags: ["governance", "dispute resolution"],
  },
  {
    slug: "sport-for-development-measuring-what-matters",
    title: "Sport for Development: Measuring What Matters",
    author: "ASLPC Programmes Team",
    publishedAt: "2026-05-02",
    pillar: "sport-for-development",
    summary:
      "Why outcome measurement in sport-for-development programming remains inconsistent across the continent, and how to fix it.",
    readingTimeMinutes: 5,
    tags: ["monitoring & evaluation", "development"],
  },
];

export function getRecentInsights(limit = 3): InsightArticle[] {
  return [...insights]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((i) => i.slug === slug);
}
