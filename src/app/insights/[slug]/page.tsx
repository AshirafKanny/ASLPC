import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getInsightBySlug, insights } from "@/lib/content/insights";
import { PILLARS } from "@/lib/constants";
import { formatDate, splitTitleAccent } from "@/lib/utils";

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

  const pillar = PILLARS.find((p) => p.slug === insight.pillar);
  const [before, accent, after] = splitTitleAccent(insight.title, insight.accentPhrase);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <Image src={insight.image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        </div>

        <Container className="relative py-24 lg:py-32">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-paper/60 uppercase">
            <Link href="/" className="transition-colors hover:text-paper">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/insights" className="transition-colors hover:text-paper">
              Insights
            </Link>
            <span aria-hidden>/</span>
            <span className="normal-case text-paper/80">{insight.title}</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight font-bold sm:text-5xl">
            {before}
            {accent ? <em className="text-accent italic">{accent}</em> : null}
            {after}
          </h1>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="relative h-72 overflow-hidden sm:h-96">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
              <span className="text-sm text-muted">{formatDate(insight.publishedAt)}</span>
              <span className="text-sm text-muted">
                By <span className="font-medium text-ink">{insight.author}</span>
              </span>
            </div>

            {pillar ? (
              <p className="mt-8 text-xs font-semibold tracking-[0.14em] text-accent-dark uppercase">
                {pillar.shortLabel}
              </p>
            ) : null}

            <div className="mt-4 space-y-5 text-base leading-relaxed text-muted">
              {insight.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
