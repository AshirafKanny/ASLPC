import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/content/blog-card";
import { getRecentInsights } from "@/lib/content/insights";

export function LatestNews() {
  const insights = getRecentInsights(3);

  if (insights.length === 0) return null;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-ink uppercase">News &amp; Blog Updates</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Our <em className="text-accent-dark italic">Latest</em> News
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {insights.map((insight) => (
            <BlogCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </Container>
    </section>
  );
}
