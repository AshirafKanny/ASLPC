import Image from "next/image";
import Link from "next/link";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { PUBLICATION_FORMATS } from "@/lib/content/publication-formats";

/**
 * Publication formats as photo cards: the image fills a rounded tile and a white
 * panel sits inset on top of it, leaving a frame of photo visible around the edges.
 */
export function PublicationFormatCards() {
  return (
    <StaggerGroup variant="scale" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PUBLICATION_FORMATS.map((format) => (
        <Link
          key={format.slug}
          href={`/publications?category=${format.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-xl px-6 pt-6 pb-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <Image
            src={format.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="relative flex flex-1 flex-col rounded-md bg-surface p-6 shadow-[0_12px_30px_-18px_rgba(23,37,50,0.5)] transition-transform duration-300 ease-out group-hover:-translate-y-1">
            <div className="flex flex-col gap-2 text-[11px] font-medium tracking-[0.14em] text-ink uppercase">
              <span className="flex items-center gap-2">
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="currentColor">
                  <circle cx="8" cy="4.5" r="3" />
                  <path d="M2 15c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5z" />
                </svg>
                ASLPC
              </span>
              <span className="flex items-center gap-2">
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="currentColor">
                  <path d="M3 1h7l3 3v11H3z" opacity=".9" />
                  <path d="M5 7h6M5 9.5h6M5 12h4" stroke="var(--color-surface)" strokeWidth="1.1" />
                </svg>
                {format.meta}
              </span>
            </div>

            <h3 className="mt-4 font-serif text-2xl leading-tight font-semibold text-ink">{format.label}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/75">{format.description}</p>

            <span className="mt-auto pt-5 text-sm font-medium text-ink underline decoration-ink/40 underline-offset-4 transition-colors group-hover:text-accent-dark group-hover:decoration-accent">
              Read More
            </span>
          </div>
        </Link>
      ))}
    </StaggerGroup>
  );
}
