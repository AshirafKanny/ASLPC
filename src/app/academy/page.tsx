import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PillarBody } from "@/components/sections/pillar-body";
import { PILLARS } from "@/lib/constants";

const pillar = PILLARS.find((p) => p.slug === "academy")!;

export const metadata: Metadata = {
  title: "ASLPC Academy",
  description: pillar.summary,
};

export default function AcademyPage() {
  return (
    <>
      <PageHeader eyebrow="Our Work — Capacity Building" title="ASLPC Academy" description={pillar.summary} />
      <PillarBody pillar="academy" />
    </>
  );
}
