import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PillarBody } from "@/components/sections/pillar-body";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PILLARS } from "@/lib/constants";
import footballImg from "../../../public/football1.jpg";

const pillar = PILLARS.find((p) => p.slug === "policy")!;

export const metadata: Metadata = {
  title: pillar.label,
  description: pillar.summary,
};

export default function PolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work   Division B"
        title="Sports Policy"
        description="Translating the Centre's research into practical policy solutions, supporting the implementation of Uganda's National Sports Act, 2023 and comparable regional frameworks."
        image={footballImg}
        imageAlt="A footballer holding a football against a blue wall"
        imagePosition="75% 50%"
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              ASLPC engages policy processes as an independent, evidence-based contributor rather than as an
              advocacy organisation for any single interest. Division B provides policy and legislative analysis,
              and drafting or review support, to regulators and legislatures, supporting the functional separation
              of regulatory administration from independent dispute resolution.
            </p>
            <p>
              This engagement is deliberately structured to preserve the Centre&apos;s independence: professional
              and programme partnerships with federations, government agencies and development partners may
              co-design or co-fund specific work without acquiring editorial control over ASLPC&apos;s broader
              findings or public positions.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="How This Work Is Carried" title="Policy engagement in practice" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Legislative and Regulatory Analysis</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Policy and legislative analysis, and drafting or review support, to regulators and legislatures
                working through the National Sports Act, 2023 and comparable regional frameworks.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Policy Roundtables</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Periodic, issue-specific convenings feeding directly into Division B&apos;s legislative and
                regulatory work.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Annual African Sports Law and Policy Report</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The Centre&apos;s authoritative annual publication on major developments, challenges and reform
                priorities across the continent.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Policy Briefs</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Regular briefs on live legislative and regulatory questions, translating research into
                policy-relevant guidance for institutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <PillarBody pillar="policy" />
    </>
  );
}
