import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PillarBody } from "@/components/sections/pillar-body";
import { PILLARS } from "@/lib/constants";

const pillar = PILLARS.find((p) => p.slug === "policy")!;

export const metadata: Metadata = {
  title: pillar.label,
  description: pillar.summary,
};

export default function PolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Our Work" title={pillar.shortLabel} description={pillar.summary} />
      <PillarBody pillar="policy" />
    </>
  );
}
