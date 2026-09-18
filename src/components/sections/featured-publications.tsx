import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { PublicationCard } from "@/components/content/publication-card";
import { getFeaturedPublications } from "@/lib/content/publications";

export function FeaturedPublications() {
  const publications = getFeaturedPublications();

  return (
    <section className="border-t border-line bg-surface py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Knowledge"
            title="Featured Publications"
            description="Reports, policy briefs and working papers from ASLPC's research programme."
          />
          <Button href="/publications" variant="secondary" className="shrink-0">
            View All Publications
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {publications.map((publication) => (
            <PublicationCard key={publication.slug} publication={publication} />
          ))}
        </div>
      </Container>
    </section>
  );
}
