import Image from "next/image";
import Link from "next/link";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { PUBLICATION_FORMATS } from "@/lib/content/publication-formats";

export function PublicationFormatCards() {
  return (
    <StaggerGroup variant="scale" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PUBLICATION_FORMATS.map((format) => (
        <Link
          key={format.slug}
          href={`/publications?category=${format.slug}`}
          className="group relative block h-80 overflow-hidden"
        >
          <Image
            src={format.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 transition-colors duration-300 group-hover:from-ink/95" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="font-serif text-xl text-paper">{format.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/75">{format.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-accent uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Browse
              <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      ))}
    </StaggerGroup>
  );
}
