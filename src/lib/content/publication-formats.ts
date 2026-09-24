import type { StaticImageData } from "next/image";
import type { PublicationCategory } from "./types";
import pb1 from "../../../public/pb1.jpg";
import pb2 from "../../../public/pb2.jpg";
import pb3 from "../../../public/pb3.jpg";
import pb4 from "../../../public/pb4.jpg";

export type PublicationFormat = {
  slug: PublicationCategory;
  label: string;
  description: string;
  image: StaticImageData;
};

export const PUBLICATION_FORMATS: PublicationFormat[] = [
  {
    slug: "report",
    label: "Reports",
    description:
      "In-depth reports on major developments, challenges and reform priorities across African sport — including the Centre's Annual African Sports Law and Policy Report.",
    image: pb2,
  },
  {
    slug: "policy-brief",
    label: "Policy Briefs",
    description: "Concise, policy-relevant briefs on live legislative and regulatory questions facing African sports institutions.",
    image: pb4,
  },
  {
    slug: "journal-article",
    label: "Journal Articles",
    description: "Peer-reviewed scholarship contributing to the growing field of African sports law.",
    image: pb1,
  },
  {
    slug: "working-paper",
    label: "Working Papers",
    description: "Early-stage research and analysis from ASLPC's ongoing research agenda, shared as the work develops.",
    image: pb3,
  },
];
