import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import chessImg from "../../../../public/chess.jpg";

export const metadata: Metadata = {
  title: "Leadership & Board",
  description: "How the African Sports Law and Policy Centre is led and governed.",
};

const ROLES = [
  {
    title: "Board of Directors",
    description:
      "Provides strategic oversight of the Centre and safeguards its intellectual, editorial and institutional independence. The Board sets institutional direction without directing the day-to-day findings or public positions of ASLPC's research and policy work.",
  },
  {
    title: "Executive Director",
    description:
      "Leads implementation of the Centre's strategy   its research agenda, divisional work, partnerships and operations   reporting to the Board of Directors.",
  },
  {
    title: "Advisory Council / Fellows Network",
    description:
      "A complementary, purely advisory body drawing on respected academics, judges, lawyers, sports administrators, athletes, policymakers and international experts, providing external perspective on the Centre's work without directive authority.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institute"
        title="Leadership & Board"
        description="ASLPC's leadership model follows a simple three-tier logic, designed to combine strategic oversight, operational leadership and independent external perspective."
        image={chessImg}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Governance Roles" title="How the Centre is led" />
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {ROLES.map((role) => (
              <div key={role.title} className="border-t border-line pt-5">
                <h3 className="font-serif text-lg text-ink">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{role.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
            Named Board members, Executive Director and Advisory Council / Fellows Network appointments will be
            announced here as they are confirmed.
          </div>
        </Container>
      </section>
    </>
  );
}
