import type { StaticImageData } from "next/image";
import type { PublicationCategory } from "./types";
import pb1 from "../../../public/pb1.jpg";
import pb2 from "../../../public/pb2.jpg";
import pb3 from "../../../public/pb3.jpg";
import pb4 from "../../../public/pb4.jpg";

export type PublicationFormat = {
  slug: PublicationCategory;
  label: string;
  /** Short descriptor shown in the card's meta line. */
  meta: string;
  description: string;
  image: StaticImageData;
};

export const PUBLICATION_FORMATS: PublicationFormat[] = [
  {
    slug: "report",
    label: "Reports",
    meta: "Annual & thematic",
    description: "In-depth analysis of reform priorities across African sport, including our annual report.",
    image: pb2,
  },
  {
    slug: "policy-brief",
    label: "Policy Briefs",
    meta: "Short read",
    description: "Concise briefs on live legal and regulatory questions facing African sport.",
    image: pb4,
  },
  {
    slug: "journal-article",
    label: "Journal Articles",
    meta: "Peer-reviewed",
    description: "Scholarship contributing to the growing field of African sports law.",
    image: pb1,
  },
  {
    slug: "working-paper",
    label: "Working Papers",
    meta: "Work in progress",
    description: "Early-stage research from ASLPC's agenda, shared as the work develops.",
    image: pb3,
  },
];
