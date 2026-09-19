import type { Publication } from "./types";

// ASLPC is in its institutional establishment phase and has not yet released
// publications. This dataset is structured to be populated with real reports,
// policy briefs, journal articles and working papers as the Centre's research
// programme produces them   no placeholder entries are shown until then.
export const publications: Publication[] = [];

export function getFeaturedPublications(limit = 3): Publication[] {
  return publications.filter((p) => p.featured).slice(0, limit);
}

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

export function getPublicationsByPillar(pillar: string): Publication[] {
  return publications.filter((p) => p.pillar === pillar);
}
