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
            title="Publications"
            description="ASLPC's research programme will produce reports, policy briefs, journal articles and working papers on African sports law, governance and policy."
          />
          <Button href="/publications" variant="secondary" className="shrink-0">
            Visit Publications
          </Button>
        </div>

        {publications.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {publications.map((publication) => (
              <PublicationCard key={publication.slug} publication={publication} />
            ))}
          </div>
        ) : (
          <p className="mt-10 max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
            The Centre is in its establishment phase. Publications   including the Annual African Sports Law and
            Policy Report and a State of Sports Governance report   will appear here as they are released.
          </p>
        )}
      </Container>
    </section>
  );
}
