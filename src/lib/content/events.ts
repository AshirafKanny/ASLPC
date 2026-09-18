import type { Event } from "./types";

// Placeholder dataset — structured for a future registration-ready events system.
export const events: Event[] = [
  {
    slug: "continental-policy-dialogue-on-sports-governance",
    title: "Continental Policy Dialogue on Sports Governance",
    type: "dialogue",
    startDate: "2026-11-12",
    location: "Kampala, Uganda",
    isVirtual: false,
    description:
      "A convening of policymakers, federations and researchers to discuss governance reform priorities for African sport.",
    speakers: [],
    pillar: "governance",
  },
  {
    slug: "aslpc-academy-sports-law-fundamentals",
    title: "ASLPC Academy: Sports Law Fundamentals",
    type: "training",
    startDate: "2026-10-05",
    endDate: "2026-10-09",
    location: "Virtual",
    isVirtual: true,
    description:
      "A five-day foundational training programme in sports law for early-career lawyers and federation officials.",
    speakers: [],
    pillar: "academy",
  },
];

export function getUpcomingEvents(limit = 3): Event[] {
  const now = Date.now();
  return events
    .filter((e) => new Date(e.startDate).getTime() >= now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, limit);
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}
