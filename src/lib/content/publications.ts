import type { Publication } from "./types";

// Placeholder dataset. Structured to be swapped for a CMS/database query
// later without changing any component that consumes it.
export const publications: Publication[] = [
  {
    slug: "regulating-athlete-transfers-in-african-football",
    title: "Regulating Athlete Transfers in African Football",
    authors: ["ASLPC Research Team"],
    year: 2025,
    category: "report",
    pillar: "research",
    abstract:
      "An examination of transfer regulation gaps across African football federations and their implications for athlete welfare.",
    tags: ["football", "athlete rights", "transfers"],
    featured: true,
  },
  {
    slug: "national-sports-policy-frameworks-a-continental-review",
    title: "National Sports Policy Frameworks: A Continental Review",
    authors: ["ASLPC Policy Unit"],
    year: 2025,
    category: "policy-brief",
    pillar: "policy",
    abstract:
      "A comparative review of national sports policy frameworks across ten African states, identifying structural gaps and good practice.",
    tags: ["policy", "comparative law"],
    featured: true,
  },
  {
    slug: "good-governance-standards-for-national-federations",
    title: "Good Governance Standards for National Federations",
    authors: ["ASLPC Governance Programme"],
    year: 2024,
    category: "working-paper",
    pillar: "governance",
    abstract:
      "Proposed governance benchmarks for national sports federations, drawing on international standards adapted to the African context.",
    tags: ["governance", "federations"],
    featured: true,
  },
];

export function getFeaturedPublications(limit = 3): Publication[] {
  return publications.filter((p) => p.featured).slice(0, limit);
}

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

export function getPublicationsByPillar(pillar: string): Publication[] {
  return publications.filter((p) => p.pillar === pillar);
}
