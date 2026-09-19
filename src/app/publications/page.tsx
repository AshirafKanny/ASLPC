import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { PublicationCard } from "@/components/content/publication-card";
import { publications } from "@/lib/content/publications";
import type { PublicationCategory } from "@/lib/content/types";

export const metadata: Metadata = {
  title: "Publications",
  description: "Reports, policy briefs, journal articles and working papers from ASLPC.",
};

export default async function PublicationsPage(props: PageProps<"/publications">) {
  const searchParams = await props.searchParams;
  const category = typeof searchParams.category === "string" ? (searchParams.category as PublicationCategory) : undefined;
  const filtered = category ? publications.filter((p) => p.category === category) : publications;

  return (
    <>
      <PageHeader
        eyebrow="Knowledge"
        title="Publications"
        description="Structured research output from ASLPC's programme   reports, policy briefs, journal articles and working papers."
      />
      <section className="py-16 lg:py-20">
        <Container>
          {filtered.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {filtered.map((publication) => (
                <PublicationCard key={publication.slug} publication={publication} />
              ))}
            </div>
          ) : category ? (
            <p className="text-sm text-muted">No publications found in this category yet.</p>
          ) : (
            <p className="max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
              ASLPC is in its institutional establishment phase. Its publications   reports, policy briefs, journal
              articles and working papers, including the Annual African Sports Law and Policy Report and a State of
              Sports Governance report   will appear here as the Centre&apos;s research programme releases them.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
