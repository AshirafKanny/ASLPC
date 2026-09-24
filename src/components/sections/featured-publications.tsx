import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { PublicationFormatCards } from "@/components/content/publication-format-cards";

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

        <div className="mt-12">
          <PublicationFormatCards />
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
          Publications in each of these formats will appear here as ASLPC&apos;s research programme releases them.
        </p>
      </Container>
    </section>
  );
}
