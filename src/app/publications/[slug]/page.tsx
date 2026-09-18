import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { getPublicationBySlug, publications } from "@/lib/content/publications";

export function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/publications/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const publication = getPublicationBySlug(slug);
  if (!publication) return {};
  return { title: publication.title, description: publication.abstract };
}

export default async function PublicationDetailPage(props: PageProps<"/publications/[slug]">) {
  const { slug } = await props.params;
  const publication = getPublicationBySlug(slug);
  if (!publication) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${publication.year} · ${publication.authors.join(", ")}`}
        title={publication.title}
        description={publication.abstract}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            {publication.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            Full publication text and downloadable file will be added here.
          </p>
        </Container>
      </section>
    </>
  );
}
