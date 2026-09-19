import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PillarBody } from "@/components/sections/pillar-body";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PILLARS } from "@/lib/constants";

const pillar = PILLARS.find((p) => p.slug === "research")!;

export const metadata: Metadata = {
  title: pillar.label,
  description: pillar.summary,
};

const RESEARCH_PILLARS = [
  {
    title: "Sports Governance and Regulatory Design",
    description:
      "How should Uganda and comparable African jurisdictions structure the relationship between government regulators, federations and independent dispute-resolution bodies under new sports legislation?",
  },
  {
    title: "Athlete Rights, Integrity and Safeguarding",
    description:
      "What legal and institutional protections do African athletes have against match-fixing, exploitation and abuse, and how do these compare with international standards?",
  },
  {
    title: "Sports Commercialisation and Intellectual Property",
    description:
      "How adequately do Ugandan and African law protect image rights, sponsorship arrangements and broadcasting rights in a rapidly commercialising sports economy?",
  },
  {
    title: "Sports Dispute Resolution and Arbitration",
    description:
      "What access do African athletes and federations have to efficient, affordable and impartial sports arbitration, and what role could a regional mechanism play?",
  },
  {
    title: "Sports Taxation and Financial Regulation",
    description:
      "How does the current tax and financial-regulatory treatment of athletes, clubs and federations in Uganda compare with regional practice, and what reforms would support sector growth?",
  },
  {
    title: "Sports Technology and Digital Transformation",
    description:
      "What legal and regulatory issues arise from the growth of esports, sports data and digital broadcasting in African markets?",
  },
  {
    title: "Gender, Disability and Inclusion in Sport",
    description:
      "What legal and policy barriers limit women's, girls' and persons-with-disabilities' full participation in African sport, and how are comparable jurisdictions addressing them?",
  },
  {
    title: "Sport for Development and Social Impact",
    description:
      "What evidence exists that sport-for-development programming in Uganda and the region produces measurable social outcomes, and how can that evidence base be strengthened?",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work   Division A"
        title="Sports Law Research and Legal Development"
        description="ASLPC's principal knowledge-generation and scholarly research arm, producing rigorous, publishable and policy-relevant legal research on Uganda's and Africa's sport sector."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              Research is one of ASLPC&apos;s principal functions and the evidentiary foundation for everything else
              the Centre does. Division A spans comparative sports law, commercial and broadcasting rights, sporting
              intellectual property, athlete rights and match-fixing, arbitration, anti-doping regulation, and
              sports taxation and digital sport.
            </p>
            <p>
              The Centre&apos;s research agenda is organised around pillars that are simultaneously relevant to
              Africa, responsive to Uganda&apos;s sports environment, internationally competitive, capable of
              generating academic publications, capable of informing public policy, attractive to development
              partners and funders, and capable of producing practical solutions for sports organisations. It is
              reviewed and prioritised annually through the standing African Sports Law Research Programme,
              coordinated across all four divisions.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Research Agenda"
            title="Research pillars and representative questions"
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {RESEARCH_PILLARS.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <h3 className="font-serif text-lg leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Standing Platforms" title="How this work is carried" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">African Sports Law Research Programme</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The Centre&apos;s standing annual research agenda, coordinated across all four divisions.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-serif text-lg text-ink">African Sports Law Database</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A digital repository of African sports legislation, policy instruments, regulations, cases and
                governance materials, maintained by Division A and used across the Centre.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <PillarBody pillar="research" />
    </>
  );
}
