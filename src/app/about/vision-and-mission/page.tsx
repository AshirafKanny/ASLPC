import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberedList } from "@/components/ui/numbered-list";
import missionImg from "../../../../public/mission1.jpg";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "The vision, mission, purpose and values guiding the African Sports Law and Policy Centre.",
};

const VALUES = [
  {
    title: "Integrity & Accountability",
    description:
      "We uphold honesty, ethical conduct, transparency and accountability in our research, advice, partnerships and institutional operations. Our work is rigorous, defensible and open to scrutiny.",
  },
  {
    title: "Independence & African Ownership",
    description:
      "We protect our intellectual, editorial and institutional independence while advancing African expertise, leadership and ownership of sports law and policy knowledge. Our work remains free from undue influence by funders, governments, federations or other interests.",
  },
  {
    title: "Excellence & Evidence",
    description:
      "We pursue the highest standards of research, professional practice and knowledge production, grounding our analysis and recommendations in evidence, law, data and comparative experience while embracing innovation and new approaches.",
  },
  {
    title: "Inclusion, Equality & Human Dignity",
    description:
      "We promote equality, diversity, inclusion and respect for human rights, ensuring that athletes, women, youth, persons with disabilities and marginalised communities are recognised, heard and able to benefit from sport and sports-sector development.",
  },
  {
    title: "Impact & Transformation",
    description:
      "We are committed to translating knowledge into practical institutional, professional and social change. We measure our success not only by research and activities, but by their contribution to better governance, stronger institutions, improved sporting systems and meaningful community outcomes.",
  },
];

const OBJECTIVES = [
  {
    title: "Advance Sports Law, Research and Policy Development",
    description:
      "Generate high-quality, publishable and policy-relevant research on sports law, regulation and policy, and provide evidence-based technical support to governments, regulators and sports organisations in the development, review and reform of sports laws and policies.",
  },
  {
    title: "Strengthen Sports Governance, Integrity and Athlete Protection",
    description:
      "Promote good governance, institutional accountability, ethical conduct, integrity, safeguarding and athlete rights across the sports sector, including athlete welfare, fair contracting, image rights and complementary support to existing anti-doping and anti-corruption frameworks.",
  },
  {
    title: "Build Capacity and Professionalise Africa's Sports Sector",
    description:
      "Strengthen the legal, managerial and professional capacity of sports stakeholders through structured education, training and knowledge development, while supporting the professionalisation and commercialisation of sport, including intellectual property, broadcasting rights and other emerging areas of the sports business ecosystem.",
  },
  {
    title: "Leverage Sport for Inclusive Social and Economic Development",
    description:
      "Advance the use of sport as a vehicle for social inclusion, youth empowerment, community development and economic transformation, aligned with Uganda's national development priorities and broader African development frameworks.",
  },
  {
    title: "Foster Strategic Partnerships, Dialogue and African Sports Knowledge",
    description:
      "Establish platforms and strategic partnerships that connect governments, regulators, federations, athletes, lawyers, academia, business, civil society and international institutions, while developing and disseminating African sports-law and policy knowledge through research repositories, publications, policy dialogues and collaborative initiatives.",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader eyebrow="Institute" title="Vision & Mission" image={missionImg} />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Vision" title="The sector we are working toward" />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
                A legally sound, well-governed, inclusive, commercially sustainable and socially transformative
                African sports sector, where law, policy and evidence   not improvisation   shape how sport is
                governed, protected, developed and harnessed for sustainable development.
              </p>
            </div>
            <div>
              <SectionHeading eyebrow="Mission" title="How ASLPC advances that vision" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                ASLPC advances its vision through rigorous research, evidence-based policy development, legal and
                institutional reform, professional capacity building, stakeholder engagement and
                sport-for-development initiatives. The Centre works with governments, sports federations, athletes,
                academia, the private sector, civil society and development partners to generate and translate
                knowledge into practical reforms that strengthen the governance, integrity, inclusiveness,
                professionalism and sustainable development of Africa&apos;s sports sector.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-20 text-paper lg:py-28">
        <video
          src="/purpose.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/20 to-ink/45" />

        <Container>
          <SectionHeading
            tone="on-ink"
            eyebrow="Institutional Purpose"
            title="Why the Centre exists"
            description="ASLPC exists to generate African sports law and sports policy knowledge grounded in Ugandan and continental realities, and to convert that knowledge into usable outcomes: legislative and regulatory improvement, stronger sports governance, better-protected athletes, more investable sports businesses, more capable sports professionals, and measurable social outcomes from sport-for-development practice."
          />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-paper/70">
            Its purpose is not to produce research for its own sake, but to be the institution that makes Africa&apos;s
            evolving sports-law frameworks   including Uganda&apos;s National Sports Act, 2023   work in practice.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Core Values" title="What guides our work" />
          <NumberedList items={VALUES} />
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Strategic Objectives"
            title="Five objectives, each anchored in a specific institutional function"
          />
          <NumberedList items={OBJECTIVES} />
        </Container>
      </section>
    </>
  );
}
