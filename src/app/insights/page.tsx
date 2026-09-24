import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/content/blog-card";
import { insights, getRecentInsights } from "@/lib/content/insights";
import { formatDate, cn } from "@/lib/utils";
import closeupImg from "../../../public/closeup1.jpg";

export const metadata: Metadata = {
  title: "Insights & Articles",
  description: "Commentary and analysis from ASLPC's research and programme teams.",
};

const PAGE_SIZE = 6;

export default async function InsightsPage(props: PageProps<"/insights">) {
  const searchParams = await props.searchParams;
  const query = typeof searchParams.q === "string" ? searchParams.q.trim().toLowerCase() : "";
  const activeTag = typeof searchParams.tag === "string" ? searchParams.tag : "";
  const page = Math.max(1, Number(searchParams.page) || 1);

  const filtered = insights.filter((insight) => {
    const matchesQuery =
      !query ||
      insight.title.toLowerCase().includes(query) ||
      insight.summary.toLowerCase().includes(query);
    const matchesTag = !activeTag || insight.tags.includes(activeTag);
    return matchesQuery && matchesTag;
  });

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const recentPosts = getRecentInsights(3);
  const allTags = Array.from(new Set(insights.flatMap((i) => i.tags))).sort();

  function pageHref(targetPage: number) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (activeTag) params.set("tag", activeTag);
    if (targetPage > 1) params.set("page", String(targetPage));
    const qs = params.toString();
    return qs ? `/insights?${qs}` : "/insights";
  }

  function tagHref(tag: string) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (tag !== activeTag) params.set("tag", tag);
    const qs = params.toString();
    return qs ? `/insights?${qs}` : "/insights";
  }

  return (
    <>
      <PageHeader
        eyebrow="Knowledge"
        title="Insights & Articles"
        description="Commentary and analysis from ASLPC's research and programme teams."
        image={closeupImg}
        imageAlt="Glasses and a notebook on a table, with someone reading a report in the background"
        imagePosition="55% 70%"
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
            <aside className="flex flex-col gap-10">
              <form action="/insights" method="get">
                <label className="relative flex items-center border-b border-line pb-3">
                  <input
                    type="search"
                    name="q"
                    defaultValue={query}
                    placeholder="Enter Keyword"
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
                  />
                  <button type="submit" aria-label="Search" className="text-ink/60 transition-colors hover:text-ink">
                    <svg aria-hidden viewBox="0 0 20 20" className="h-4.5 w-4.5">
                      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                      <path d="M14 14l4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                </label>
                {activeTag ? <input type="hidden" name="tag" value={activeTag} /> : null}
              </form>

              <div>
                <h2 className="font-serif text-xl text-ink">Recent Post</h2>
                <div className="mt-5 flex flex-col divide-y divide-line border-t border-line">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/insights/${post.slug}`}
                      className="group flex items-start gap-4 py-4"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden">
                        <Image src={post.image} alt="" fill sizes="64px" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-xs text-muted">{formatDate(post.publishedAt)}</p>
                        <p className="mt-1 font-serif text-sm leading-snug text-ink transition-colors group-hover:text-accent-dark">
                          {post.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-xl text-ink">Tags</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Link
                      key={tag}
                      href={tagHref(tag)}
                      className={cn(
                        "border px-4 py-2 text-sm font-medium capitalize transition-colors",
                        tag === activeTag
                          ? "border-ink bg-ink text-paper"
                          : "border-line text-ink hover:border-ink",
                      )}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-ink p-8 text-paper">
                <h2 className="font-serif text-xl leading-snug">
                  Need institutional <em className="text-accent italic">support</em>?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  Reach out to discuss research collaboration, policy engagement, training or partnership with
                  ASLPC.
                </p>
                <Button href="/contact" variant="on-ink" className="mt-6">
                  Contact ASLPC →
                </Button>
              </div>
            </aside>

            <div>
              {(query || activeTag) && (
                <p className="mb-8 text-sm text-muted">
                  {sorted.length} result{sorted.length === 1 ? "" : "s"}
                  {query ? ` for "${query}"` : ""}
                  {activeTag ? ` tagged "${activeTag}"` : ""} —{" "}
                  <Link href="/insights" className="text-accent-dark underline underline-offset-2">
                    clear
                  </Link>
                </p>
              )}

              {pageItems.length > 0 ? (
                <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
                  {pageItems.map((insight) => (
                    <BlogCard key={insight.slug} insight={insight} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted">No articles match your search yet.</p>
              )}

              {totalPages > 1 ? (
                <nav aria-label="Pagination" className="mt-16 flex items-center gap-3">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <Link
                      key={num}
                      href={pageHref(num)}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center text-sm",
                        num === currentPage ? "bg-ink text-paper" : "text-ink hover:text-accent-dark",
                      )}
                    >
                      {String(num).padStart(2, "0")}
                    </Link>
                  ))}
                </nav>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
