import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PublicationCard } from "@/components/content/publication-card";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import { getPublicationsByPillar } from "@/lib/content/publications";
import type { PillarSlug } from "@/lib/content/types";

export function PillarBody({ pillar }: { pillar: PillarSlug }) {
  const publications = getPublicationsByPillar(pillar);

  if (publications.length === 0) {
    return (
      <PlaceholderNotice>
        Publications from this area of work will be listed here as ASLPC&apos;s research programme releases them.
      </PlaceholderNotice>
    );
  }

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Related Work" title="Publications in this area" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {publications.map((publication) => (
            <PublicationCard key={publication.slug} publication={publication} />
          ))}
        </div>
      </Container>
    </section>
  );
}
