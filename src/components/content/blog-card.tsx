import Image from "next/image";
import Link from "next/link";
import type { InsightArticle } from "@/lib/content/types";
import { formatDate, splitTitleAccent } from "@/lib/utils";

export function BlogCard({ insight }: { insight: InsightArticle }) {
  const [before, accent, after] = splitTitleAccent(insight.title, insight.accentPhrase);

  return (
    <article className="flex flex-col">
      <Link href={`/insights/${insight.slug}`} className="relative block h-64 overflow-hidden">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      <div className="mt-5 flex items-center gap-3 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
            <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M1.5 6h13M4.5 1v3M11.5 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {formatDate(insight.publishedAt)}
        </span>
        <span aria-hidden>\</span>
        <span className="flex items-center gap-1.5">
          <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
            <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M2.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </svg>
          {insight.author}
        </span>
      </div>

      <h3 className="mt-3 font-serif text-2xl leading-snug font-bold text-ink">
        {before}
        {accent ? (
          <>
            <br />
            <em className="text-accent-dark italic">{accent}</em>
          </>
        ) : null}
        {after}
      </h3>

      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">{insight.summary}</p>

      <Link
        href={`/insights/${insight.slug}`}
        className="relative mt-6 inline-flex w-fit items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-ink shadow-[6px_6px_0_0_var(--color-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--color-ink)]"
      >
        Read More
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
