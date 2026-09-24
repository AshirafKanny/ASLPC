import type { StaticImageData } from "next/image";

export type PillarSlug =
  | "research"
  | "policy"
  | "governance"
  | "academy"
  | "sport-for-development";

export type PublicationCategory =
  | "report"
  | "policy-brief"
  | "journal-article"
  | "working-paper";

export interface Publication {
  slug: string;
  title: string;
  authors: string[];
  year: number;
  category: PublicationCategory;
  pillar: PillarSlug;
  abstract: string;
  fileUrl?: string;
  tags: string[];
  featured?: boolean;
}

export type EventType = "conference" | "workshop" | "dialogue" | "training";

export interface EventSpeaker {
  name: string;
  affiliation: string;
}

export interface Event {
  slug: string;
  title: string;
  type: EventType;
  startDate: string;
  endDate?: string;
  location: string;
  isVirtual: boolean;
  description: string;
  speakers: EventSpeaker[];
  registrationUrl?: string;
  pillar?: PillarSlug;
}

export interface InsightArticle {
  slug: string;
  title: string;
  /** A verbatim substring of `title` to render as the accent-colored phrase. */
  accentPhrase?: string;
  author: string;
  publishedAt: string;
  pillar: PillarSlug;
  summary: string;
  body: string[];
  image: StaticImageData;
  readingTimeMinutes: number;
  tags: string[];
}

export interface ResearchArea {
  slug: string;
  title: string;
  pillar: PillarSlug;
  summary: string;
  relatedPublicationSlugs: string[];
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  isBoardMember?: boolean;
}
