import Image from "next/image";
import Link from "next/link";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { EVENT_FORMATS } from "@/lib/content/event-formats";

export function EventFormatCards() {
  return (
    <StaggerGroup variant="scale" className="grid gap-6 sm:grid-cols-2">
      {EVENT_FORMATS.map((format) => (
        <Link key={format.label} href="/events" className="group relative block h-96 overflow-hidden lg:h-110">
          <Image
            src={format.image}
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 transition-colors duration-300 group-hover:from-ink/95" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <h3 className="font-serif text-xl leading-snug text-paper sm:text-2xl">{format.label}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/75">{format.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-accent uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              View Calendar
              <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      ))}
    </StaggerGroup>
  );
}
