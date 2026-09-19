import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PillarBody } from "@/components/sections/pillar-body";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PILLARS } from "@/lib/constants";

const pillar = PILLARS.find((p) => p.slug === "sport-for-development")!;

export const metadata: Metadata = {
  title: pillar.shortLabel,
  description: pillar.summary,
};

const IMPACT_AREAS = [
  "Youth development",
  "Education",
  "Employment",
  "Gender equality",
  "Social inclusion",
  "Peace building",
  "Disability inclusion",
  "Health",
];

export default function SportForDevelopmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work   Division C"
        title="Sport for Development and Social Impact"
        description="Promoting and evaluating the use of sport as a tool for inclusive social and economic development across Uganda and the region."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              ASLPC treats sport for development as an evidence discipline, not only an advocacy cause. Division C
              develops a Uganda Sport-for-Development policy and impact framework, adapting established
              international indicator methodologies   in the tradition of UNESCO&apos;s Kazan Action Plan
              follow-up work and the African Union Sports Council&apos;s continental pillars   to a Ugandan
              indicator set capable of tracking real outcomes.
            </p>
            <p>
              The division&apos;s work is delivered through cross-sectoral pilot partnerships combining sport with
              education, health, gender and youth programming; rights, safeguarding and inclusion support for
              participants in sport-for-development programming; and an annual Sport for Development Community
              Programme delivered with local and international partners, with impact measured and published rather
              than merely asserted.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Outcome Areas"
            title="Aligned with the Sustainable Development Goals and African Union development priorities"
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {IMPACT_AREAS.map((area) => (
              <li key={area} className="border-t border-line pt-4 text-sm font-medium text-ink">
                {area}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <PillarBody pillar="sport-for-development" />
    </>
  );
}
