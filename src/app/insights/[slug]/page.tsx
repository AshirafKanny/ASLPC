import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { getInsightBySlug, insights } from "@/lib/content/insights";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.summary };
}

export default async function InsightDetailPage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${formatDate(insight.publishedAt)} · ${insight.author}`}
        title={insight.title}
        description={insight.summary}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <p className="max-w-2xl text-sm leading-relaxed text-muted">Full article body will be added here.</p>
        </Container>
      </section>
    </>
  );
}
