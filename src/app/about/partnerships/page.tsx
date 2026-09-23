import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import handshakeImg from "../../../../public/handshake.jpg";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "The institutional categories ASLPC builds structured, differentiated relationships across.",
};

const CATEGORIES = [
  {
    title: "Government",
    description:
      "Ministry of Education and Sports, Ministry of Gender, Labour and Social Development, National Council of Sports, and comparable regulators elsewhere in East Africa and Africa.",
    value: "Independent, evidence-based analysis government and regulators cannot easily produce internally.",
  },
  {
    title: "Sports bodies",
    description:
      "National and international federations, the Uganda Olympic Committee, the National Anti-Doping Organisation, and the African Union Sports Council.",
    value: "Governance tools and integrity support.",
  },
  {
    title: "Legal and dispute-resolution institutions",
    description: "The Judiciary, the Uganda Law Society, the Uganda Law Reform Commission, and the Court of Arbitration for Sport.",
    value: "A specialised research and professional community of practice in sports law and dispute resolution.",
  },
  {
    title: "Universities and research institutions",
    description: "Universities, regional law faculties and international sports-law research networks.",
    value: "A research and training partner without absorbing operational risk.",
  },
  {
    title: "Development and international partners",
    description:
      "Bodies such as the Commonwealth Secretariat, UNESCO, relevant UN agencies, and comparable institutions internationally, such as the Sports Law and Policy Centre, Bengaluru.",
    value: "A credible, Africa-rooted delivery institution.",
  },
  {
    title: "Private sector and media",
    description: "Law firms and professional-services firms, corporate sponsors and investors, technology companies, and media and broadcasting organisations.",
    value: "Reliable commercial and intellectual-property research supporting sports investment.",
  },
  {
    title: "Civil society and communities",
    description: "Athletes and athlete associations, youth and community organisations, and civil-society sports bodies.",
    value: "A platform connecting community voice to research, policy and governance processes.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institute"
        title="Partnerships"
        description="ASLPC's credibility depends on convening a genuinely broad coalition rather than becoming the instrument of any single actor. The Centre builds structured, differentiated relationships across seven categories of institution."
        image={handshakeImg}
        imageAlt="Close-up of a handshake between two people in suits"
        imagePosition="65% 70%"
        overlay="light"
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 divide-y divide-line border-t border-line lg:grid-cols-2 lg:gap-x-16 lg:divide-y-0">
            {CATEGORIES.map((category) => (
              <div key={category.title} className="pt-8 first:pt-8 lg:border-t lg:pt-8">
                <h3 className="font-serif text-lg text-ink">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>
                <p className="mt-3 text-xs font-medium tracking-wide text-accent-dark uppercase">{category.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
            <p>
              This structured, differentiated approach to partnership is itself modelled on institutions such as the
              Danish Institute for Sports Studies and its Play the Game initiative, which pairs government-backed
              hosting with a wide, self-governing international network of academic and civil-society partners.
            </p>
            <p className="mt-4">
              ASLPC&apos;s first partnerships are with Uganda Pentecostal University&apos;s Faculty of Law and
              government; further partnerships across the categories above will be announced as they are confirmed.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
