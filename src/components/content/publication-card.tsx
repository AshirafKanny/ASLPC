import Link from "next/link";
import type { Publication } from "@/lib/content/types";
import { Tag } from "@/components/ui/tag";

const CATEGORY_LABEL: Record<Publication["category"], string> = {
  report: "Report",
  "policy-brief": "Policy Brief",
  "journal-article": "Journal Article",
  "working-paper": "Working Paper",
};

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Link
      href={`/publications/${publication.slug}`}
      className="group flex flex-col border border-line bg-surface p-6 transition-colors hover:border-ink/40"
    >
      <div className="flex items-center justify-between gap-3">
        <Tag>{CATEGORY_LABEL[publication.category]}</Tag>
        <span className="text-xs text-muted">{publication.year}</span>
      </div>
      <h3 className="mt-4 font-serif text-xl leading-snug text-ink transition-colors group-hover:text-accent-dark">
        {publication.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{publication.abstract}</p>
      <p className="mt-5 text-xs tracking-wide text-muted uppercase">{publication.authors.join(", ")}</p>
    </Link>
  );
}
