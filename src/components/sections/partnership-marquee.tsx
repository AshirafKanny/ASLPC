import { Fragment } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import governmentImg from "../../../public/ptn4government.jpg";
import sportsImg from "../../../public/ptn5sports.jpg";
import legalImg from "../../../public/ptn7Legal Research.jpg";
import universityImg from "../../../public/ptn6Research.jpg";
import internationalImg from "../../../public/ptn1international.jpg";
import mediaImg from "../../../public/ptn2media.jpg";
import communityImg from "../../../public/ptn3community.jpg";

type PartnerCategory = {
  label: string;
  image: StaticImageData;
};

const CATEGORIES: PartnerCategory[] = [
  { label: "Government", image: governmentImg },
  { label: "Sports Bodies", image: sportsImg },
  { label: "Legal & Dispute-Resolution Institutions", image: legalImg },
  { label: "Universities & Research Institutions", image: universityImg },
  { label: "Development & International Partners", image: internationalImg },
  { label: "Private Sector & Media", image: mediaImg },
  { label: "Civil Society & Communities", image: communityImg },
];

export function PartnershipMarquee() {
  return (
    <section className="border-b border-line bg-surface py-12">
      <Container>
        <SectionHeading align="center" eyebrow="Who We Work With" title="Partnership Categories" />
      </Container>

      <div className="mt-10 flex w-max animate-marquee items-stretch gap-5 mask-[linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {CATEGORIES.map((category) => (
              <Link
                key={`${copy}-${category.label}`}
                href="/about/partnerships"
                className="group relative block h-44 w-64 shrink-0 overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="256px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 transition-colors duration-300 group-hover:from-ink/90" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-lg leading-snug font-bold text-paper">
                  {category.label}
                </span>
              </Link>
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
