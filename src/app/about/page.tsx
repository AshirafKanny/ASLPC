import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import whoWeAreImg from "../../../public/who we a.jpg";

export const metadata: Metadata = {
  title: "About ASLPC",
  description:
    "ASLPC is an independent African research, policy and knowledge institution working at the intersection of sports law, governance, policy and sport for development.",
};

const GAP_POINTS = [
  {
    title: "Universities",
    description: "Teach sports law as a subject but rarely operate as standing research-to-policy institutions.",
  },
  {
    title: "Law firms",
    description: "Handle sports disputes and transactions but do not generate public research or convene the sector.",
  },
  {
    title: "Federations and government agencies",
    description:
      "Regulate sport but are rarely positioned to produce independent, evidence-based analysis of their own governance.",
  },
  {
    title: "Conventional think tanks",
    description:
      "Address public policy broadly but seldom develop the sport-specific expertise that regulatory reform, athlete protection and sports commercialisation now require.",
  },
];

const BENEFICIARIES = [
  { group: "Athletes", value: "Legal protection, image-rights guidance, safeguarding and a voice in governance and policy processes." },
  { group: "Coaches and administrators", value: "Practical training and governance tools through the ASLPC Academy." },
  { group: "Federations and clubs", value: "Governance standards, self-assessment tools and integrity support." },
  { group: "Government agencies and policymakers", value: "Independent, evidence-based policy and legislative analysis." },
  {
    group: "Lawyers, judges and dispute-resolution professionals",
    value: "Specialised research, training and a professional community of practice.",
  },
  { group: "Academics and students", value: "A research repository, publication platform and structured research-training pipeline." },
  { group: "Sports businesses and sponsors", value: "Commercial and intellectual-property research supporting sports commercialisation." },
  { group: "Media organisations", value: "Credible, independent analysis and data on the sports sector." },
  {
    group: "Young people, women and girls, and persons with disabilities",
    value: "Targeted sport-for-development programming and inclusion research.",
  },
  { group: "Communities", value: "Evidence-based sport-for-development interventions addressing local social and economic priorities." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institute"
        title="Who We Are"
        description="ASLPC is an independent African research, policy and knowledge institution working at the intersection of sports law, governance, policy and sport for development."
        image={whoWeAreImg}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="max-w-2xl">
              <SectionHeading eyebrow="Institutional Overview" title="An independent African institution, built for a specific moment" />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                <p>
                  The African Sports Law and Policy Centre (ASLPC) is an independent, Uganda-based African
                  institution dedicated to research, policy development and professional practice in sports law,
                  governance, integrity, institutional reform, professionalisation and sport for development. The
                  Centre generates knowledge, promotes stakeholder awareness and supports evidence-based reforms
                  aimed at strengthening Africa&apos;s sports sector.
                </p>
                <p>
                  ASLPC is not a university department, law firm, sports federation or government agency. It
                  maintains its own institutional identity, governance, research agenda, publications and
                  intellectual independence. While based in Uganda, the Centre is designed to work across Africa and
                  to respond flexibly to emerging developments and challenges within the sports industry.
                </p>
                <p>
                  Uganda&apos;s National Sports Act, 2023 established, for the first time, a comprehensive statutory
                  framework for sports administration, discipline and regulation in the country. That framework
                  created the legal architecture; it did not create the institutions, professionals and evidence
                  base required to make it work in practice   a gap that recurs across the continent in governance
                  capacity, athlete protection, sports commercialisation, integrity systems and the use of sport for
                  development. ASLPC exists to close it.
                </p>
                <p>
                  The Centre combines six functions that are typically dispersed across separate institutions
                  elsewhere: a research institution, a policy think tank, a sports governance resource centre, a
                  professional training academy, an athlete rights platform and a sport for development institution.
                  It begins with a firm base in Uganda and East Africa and will build progressively toward a
                  continental and international footprint.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 border-t border-line pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-ink uppercase">Core disciplines</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Sports law, sports governance, sports policy, sport for development.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-ink uppercase">Founding instrument</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Uganda&apos;s National Sports Act, 2023, and comparable regional regulatory frameworks.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-ink uppercase">Geographical scope</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  ASLPC begins with a firm base in Uganda and East Africa, where its founding research, partnerships
                  and programming are concentrated, before progressively developing an African and international
                  footprint through research networks, comparative publications, continental convenings and
                  selective regional partnerships.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-ink uppercase">Structure</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Four technical divisions, a standing set of cross-cutting programmes, and the ASLPC Academy. See{" "}
                  <Link href="/about/structure" className="text-accent-dark underline underline-offset-2">
                    Institutional Structure
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why the Centre Matters"
            title="The gap ASLPC addresses"
            description="Africa's sports industry has been valued at roughly US$12–15 billion and is projected to grow at close to 8 percent annually, yet it contributes only a fraction of the share of GDP recorded in more mature sporting economies   held back in significant part by governance weaknesses, thin regulatory capacity and limited investment-ready institutions. No single institution currently combines rigorous legal research, policy translation, governance support, professional training and sport-for-development practice under one roof."
          />
          <div className="mt-4 grid gap-8 sm:grid-cols-2">
            {GAP_POINTS.map((point) => (
              <div key={point.title} className="border-t border-line pt-5">
                <h3 className="font-serif text-lg text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
            ASLPC is designed to sit deliberately in the space between these institutions, connecting academic
            research with practical policy, legal practice, sports administration and community development in a
            single, coordinated institution.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Who We Serve" title="Stakeholders and beneficiaries" />
          <div className="mt-10 divide-y divide-line border-t border-b border-line">
            {BENEFICIARIES.map((row) => (
              <div key={row.group} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-8">
                <p className="font-serif text-base text-ink">{row.group}</p>
                <p className="text-sm leading-relaxed text-muted">{row.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
