import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { publications } from "@/lib/content/publications";
import { insights } from "@/lib/content/insights";
import { events } from "@/lib/content/events";

export const metadata: Metadata = {
  title: "Search",
};

type SearchResult = { title: string; href: string; type: string; excerpt: string };

function search(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const p of publications) {
    if (p.title.toLowerCase().includes(q) || p.abstract.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q))) {
      results.push({ title: p.title, href: `/publications/${p.slug}`, type: "Publication", excerpt: p.abstract });
    }
  }
  for (const i of insights) {
    if (i.title.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q)) {
      results.push({ title: i.title, href: `/insights/${i.slug}`, type: "Insight", excerpt: i.summary });
    }
  }
  for (const e of events) {
    if (e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)) {
      results.push({ title: e.title, href: `/events/${e.slug}`, type: "Event", excerpt: e.description });
    }
  }

  return results;
}

export default async function SearchPage(props: PageProps<"/search">) {
  const searchParams = await props.searchParams;
  const query = typeof searchParams.q === "string" ? searchParams.q : "";
  const results = search(query);

  return (
    <>
      <PageHeader eyebrow="Search" title="Search ASLPC" />
      <section className="py-12 lg:py-16">
        <Container>
          <form action="/search" method="get" className="max-w-xl">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search publications, insights and events…"
              className="w-full border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-ink"
              autoFocus
            />
          </form>

          <div className="mt-10 max-w-2xl">
            {query && results.length === 0 ? (
              <p className="text-sm text-muted">No results for “{query}”.</p>
            ) : null}
            {results.map((result) => (
              <Link
                key={result.href}
                href={result.href}
                className="group flex flex-col gap-2 border-t border-line py-6 first:border-t-0"
              >
                <Tag>{result.type}</Tag>
                <span className="font-serif text-lg text-ink transition-colors group-hover:text-accent-dark">
                  {result.title}
                </span>
                <span className="line-clamp-2 text-sm text-muted">{result.excerpt}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
