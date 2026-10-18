import type { PortableTextBlock } from "next-sanity";

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

export interface InsightImage {
  src: string;
  alt: string;
  /** Tiny base64 preview from Sanity, shown while the full image loads. */
  blurDataURL?: string;
  /** CSS object-position derived from the focal point picked in the Studio. */
  objectPosition?: string;
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
  /** Rich text from the Studio (Portable Text). Only loaded on the article page. */
  body: PortableTextBlock[];
  image: InsightImage | null;
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
