import Link from "next/link";
import type { InsightArticle } from "@/lib/content/types";
import { formatDate } from "@/lib/utils";
import { PILLARS } from "@/lib/constants";

export function InsightCard({ insight }: { insight: InsightArticle }) {
  const pillar = PILLARS.find((p) => p.slug === insight.pillar);

  return (
    <Link href={`/insights/${insight.slug}`} className="group flex flex-col border-t border-line py-6 first:border-t-0">
      <span className="text-xs font-semibold tracking-[0.14em] text-accent-dark uppercase">
        {pillar?.shortLabel}
      </span>
      <h3 className="mt-2 font-serif text-lg leading-snug text-ink transition-colors group-hover:text-accent-dark">
        {insight.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{insight.summary}</p>
      <p className="mt-3 text-xs text-muted">
        {formatDate(insight.publishedAt)} · {insight.readingTimeMinutes} min read
      </p>
    </Link>
  );
}
