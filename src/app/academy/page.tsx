import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PillarBody } from "@/components/sections/pillar-body";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PILLARS } from "@/lib/constants";

const pillar = PILLARS.find((p) => p.slug === "academy")!;

export const metadata: Metadata = {
  title: "ASLPC Academy",
  description: pillar.summary,
};

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work   Division D"
        title="ASLPC Academy"
        description="The Centre's professional-education platform, delivering practical training in sports law, governance, integrity, safeguarding and sport-for-development practice."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              The ASLPC Academy delivers short courses, seminars and executive workshops in sports law, governance,
              athlete rights, contracts, intellectual property, integrity and dispute resolution to federation
              officials, club administrators, coaches, athletes, lawyers, government officials and students  
              complementing, rather than duplicating, the coaching and technical training already run by national
              federations.
            </p>
            <p>
              Training content is deliberately linked to the Centre&apos;s own research through a shared curriculum
              and quality-assurance framework. The Academy pursues a phased accreditation and certification
              strategy, moving from non-credit professional courses toward accredited programmes delivered through
              university partnership, and benchmarks itself against comparable continental training institutions
              such as the CAF Football Management Executive Programme.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="How This Work Is Carried" title="Training and the research-to-practice pipeline" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Professional Sports Law Training Programme</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The ASLPC Academy&apos;s annual course and workshop calendar.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Sports Law Clinic</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A supervised platform for legal education and selected public-interest sports-law assistance,
                feeding Division D&apos;s research-training-practice pipeline.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Research-Training Pipeline</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A pipeline links research fellows and student researchers into the Academy&apos;s teaching faculty,
                keeping training grounded in the Centre&apos;s own research.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">University Competitions</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                University research competitions and student moot and essay competitions, feeding the
                research-training-practice pipeline.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <PillarBody pillar="academy" />
    </>
  );
}
