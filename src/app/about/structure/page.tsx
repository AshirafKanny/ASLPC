import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberedList } from "@/components/ui/numbered-list";

export const metadata: Metadata = {
  title: "Institutional Structure",
  description:
    "ASLPC's governance structure, four technical divisions, shared functions and institutional growth strategy.",
};

const DIVISIONS = [
  {
    title: "Division A   Sports Law Research and Legal Development",
    description:
      "The Centre's principal knowledge-generation and scholarly research arm, producing rigorous, publishable and policy-relevant legal research on Uganda's and Africa's sport sector   spanning comparative sports law, commercial and broadcasting rights, sporting intellectual property, athlete rights and match-fixing, arbitration, anti-doping regulation, and sports taxation and digital sport.",
  },
  {
    title: "Division B   Sports Policy and Governance",
    description:
      "Translates the Centre's research into practical governance and policy solutions, supporting the implementation of the National Sports Act, 2023 and comparable regional frameworks through legislative analysis and drafting support, governance audits and standards, institutional-design advisory work, and integrity and safeguarding policy support delivered alongside   not in place of   mandated anti-doping and law-enforcement bodies.",
  },
  {
    title: "Division C   Sport for Development and Social Impact",
    description:
      "Promotes and evaluates the use of sport as a tool for youth development, education, employment, gender equality, social inclusion, peace building, disability inclusion and health, in line with the Sustainable Development Goals and African Union development priorities, including a Uganda Sport-for-Development policy and impact framework adapting established international indicator methodologies to a Ugandan context.",
  },
  {
    title: "Division D   Education, Training and Professional Development",
    description:
      "Branded publicly as the ASLPC Academy, this division delivers practical professional education in sports law, governance, integrity, safeguarding and sport-for-development practice   complementing, rather than duplicating, the coaching and technical training already run by national federations   through short courses, executive workshops, and a phased pathway toward accredited programmes delivered with university partners.",
  },
];

const SHARED_FUNCTIONS = [
  {
    title: "Finance and Administration",
    description: "Manages the Centre's financial operations and institutional administration across all four divisions.",
  },
  {
    title: "Partnerships and Resource Mobilisation",
    description: "Builds and manages ASLPC's institutional relationships and secures the funding that sustains its work.",
  },
  {
    title: "Communications and Knowledge Management",
    description: "Manages ASLPC's publications, digital repository and public communications on behalf of all four divisions.",
  },
];

const GROWTH_PHASES = [
  {
    title: "Phase I   Establishment and Foundation",
    description:
      "Legal establishment and governance structures; core staffing; agreement and setting of the first research agenda; a website and digital identity; initial partnerships with Uganda Pentecostal University's Faculty of Law and government; a public launch; and the first sensitisation and research programmes.",
  },
  {
    title: "Phase II   Expansion and Institutional Consolidation",
    description:
      "Launch of the ASLPC Academy's professional training; delivery of major research projects and the first annual conference; establishment of the African Sports Governance Observatory; launch of the Athlete Rights and Safeguarding Programme and the first Sport for Development pilot partnerships; and expanded partnerships across East Africa.",
  },
  {
    title: "Phase III   Continental and International Expansion",
    description:
      "Development of African research networks and continental programming; completion and public launch of the African Sports Law Database; new international partnerships; accredited professional programmes where institutionally appropriate; regional programme hubs where justified by demand; and publication of major African sports-law indices and reports.",
  },
];

export default function StructurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Institute"
        title="Institutional Structure"
        description="ASLPC's structure follows a simple three-tier logic: a Board of Directors provides strategic oversight and safeguards independence; an Executive Director leads implementation; and four technical divisions, supported by three shared functions, carry out the Centre's work."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              A Board of Directors provides strategic oversight and safeguards independence; an Executive Director
              leads implementation; the four divisions carry out the Centre&apos;s technical work; and three shared
              functions   Finance and Administration, Partnerships and Resource Mobilisation, and Communications and
              Knowledge Management   service all four divisions rather than being duplicated within them.
            </p>
            <p>
              An Advisory Council or Fellows Network of respected academics, judges, lawyers, sports administrators,
              athletes, policymakers and international experts complements this structure in a purely advisory
              capacity.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Divisions"
            title="Four technical divisions"
            description="Each division is deliberately scoped to avoid functional overlap with the others. Cross-cutting themes   athlete rights, integrity and match-fixing, and intellectual property   are anchored in a lead division but drawn on by the others rather than duplicated across all four."
          />
          <NumberedList items={DIVISIONS} columns={1} />
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Shared Functions" title="Servicing all four divisions" />
          <NumberedList items={SHARED_FUNCTIONS} />
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Institutional Growth Strategy" title="Three phases" />
          <NumberedList items={GROWTH_PHASES} columns={1} />
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Financial Sustainability"
                title="A diversified funding model"
                description="ASLPC pursues a diversified sustainability model from the outset, distinguishing public-interest activities that typically require grant funding from income-generating activities that contribute directly to institutional sustainability. No single donor, sponsor or government relationship is permitted to constitute more than a defined share of the Centre's income   a discipline that preserves editorial independence."
              />
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-ink uppercase">Public-interest sources</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Research grants from universities and international funders; international development and
                    technical-assistance grants; government-supported programmes linked to the National Sports Act,
                    2023; and foundation funding for governance, integrity and sport-for-development work.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-ink uppercase">Income-generating sources</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Consultancy and advisory services; professional training through the ASLPC Academy; conferences
                    and event sponsorship; federation subscriptions to the governance-support service; commissioned
                    research fees; publication and knowledge products; corporate sponsorship; and, over time, an
                    endowment or long-term funding mechanism.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Monitoring, Evaluation and Impact"
                title="Outputs, outcomes and long-term impact"
                description="ASLPC tracks its performance at three distinct levels rather than measuring activity alone."
              />
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted">
                <p>
                  <span className="font-medium text-ink">Outputs</span> such as publications, training delivered and
                  knowledge resources published.
                </p>
                <p>
                  <span className="font-medium text-ink">Outcomes</span> such as policies influenced, governance
                  audits completed, athletes and communities reached, and partnerships and grants secured.
                </p>
                <p>
                  <span className="font-medium text-ink">Long-term impact</span> such as demonstrable improvement in
                  federation governance standards, sustained policy uptake evidenced by citation in legislative
                  processes, measurable social outcomes from sport-for-development pilots, and recognition as a
                  credible reference institution by African and international peers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
