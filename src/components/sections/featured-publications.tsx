import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup } from "@/components/motion/stagger-group";
import pb1 from "../../../public/pb1.jpg";
import pb2 from "../../../public/pb2.jpg";
import pb3 from "../../../public/pb3.jpg";
import pb4 from "../../../public/pb4.jpg";

const CATEGORIES = [
  {
    slug: "report",
    label: "Reports",
    description:
      "In-depth reports on major developments, challenges and reform priorities across African sport — including the Centre's Annual African Sports Law and Policy Report.",
    image: pb2,
  },
  {
    slug: "policy-brief",
    label: "Policy Briefs",
    description: "Concise, policy-relevant briefs on live legislative and regulatory questions facing African sports institutions.",
    image: pb4,
  },
  {
    slug: "journal-article",
    label: "Journal Articles",
    description: "Peer-reviewed scholarship contributing to the growing field of African sports law.",
    image: pb1,
  },
  {
    slug: "working-paper",
    label: "Working Papers",
    description: "Early-stage research and analysis from ASLPC's ongoing research agenda, shared as the work develops.",
    image: pb3,
  },
];

export function FeaturedPublications() {
  return (
    <section className="border-t border-line bg-surface py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Knowledge"
            title="What We Publish"
            description="ASLPC's research programme is organised around four publication formats, each building the evidence base for African sports law, governance and policy."
          />
          <Button href="/publications" variant="secondary" className="shrink-0">
            Visit Publications
          </Button>
        </Reveal>

        <StaggerGroup variant="scale" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/publications?category=${category.slug}`}
              className="group relative block h-80 overflow-hidden"
            >
              <Image
                src={category.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 transition-colors duration-300 group-hover:from-ink/95" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-xl text-paper">{category.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/75">{category.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-accent uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Browse
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </StaggerGroup>

        <p className="mt-8 max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
          The Centre is in its establishment phase — publications in each of these formats will appear as ASLPC&apos;s
          research programme releases them.
        </p>
      </Container>
    </section>
  );
}
