import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PillarBody } from "@/components/sections/pillar-body";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PILLARS } from "@/lib/constants";
import cityImg from "../../../public/city2.jpg";

const pillar = PILLARS.find((p) => p.slug === "governance")!;

export const metadata: Metadata = {
  title: pillar.label,
  description: pillar.summary,
};

export default function GovernancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work   Division B"
        title="Sports Governance"
        description="Advisory work strengthening the governance, integrity and accountability of federations, ministries and sporting bodies."
        image={cityImg}
        imageAlt="Double-exposure image of a city skyline and business figures in conversation"
        imagePosition="50% 65%"
        overlay="light"
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              Division B conducts governance audits and maintains a published governance standard and
              self-assessment toolkit for federations and clubs, supports institutional design   including the
              functional separation of regulatory administration from independent dispute resolution   and
              convenes a standing multi-stakeholder advisory forum with defined athlete representation.
            </p>
            <p>
              This includes integrity and safeguarding policy support delivered alongside   not in place of  
              mandated anti-doping and law-enforcement bodies, and a standing research, awareness and
              capacity-building function on athlete protection delivered jointly with Division A.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="How This Work Is Carried" title="Governance and integrity in practice" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">African Sports Governance Observatory</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A standing monitoring platform, built on Division B&apos;s governance standard, tracking governance,
                regulation, accountability and institutional performance across African sport over time   in the
                tradition of comparable tools such as the Sports Governance Observer developed internationally by
                Play the Game and KU Leuven.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Sports Governance Forum</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The Centre&apos;s principal governance convening, presenting Observatory findings.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">Athlete Rights and Safeguarding Programme</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A standing research, awareness and capacity-building function on athlete protection, drawing jointly
                on Divisions A and B, anchored by an annual Athlete Rights Week.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">State of Sports Governance Report</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A regular publication from Division B documenting the state of governance across African sport.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <PillarBody pillar="governance" />
    </>
  );
}
