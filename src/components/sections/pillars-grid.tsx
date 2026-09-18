import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PILLARS } from "@/lib/constants";

export function PillarsGrid() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Framework"
          title="Five pillars, one institution"
          description="ASLPC's work is organised around five interconnected areas that together form a complete approach to sport governance in Africa."
        />

        <div className="mt-14 grid divide-y divide-line border-t border-line lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {PILLARS.map((pillar, index) => (
            <Link
              key={pillar.slug}
              href={`/${pillar.slug}`}
              className="group flex flex-col justify-between gap-8 px-2 py-8 transition-colors hover:bg-surface lg:px-6"
            >
              <span className="font-serif text-sm text-accent-dark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-lg leading-snug text-ink transition-colors group-hover:text-accent-dark">
                  {pillar.shortLabel}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.summary}</p>
              </div>
              <span className="text-xs font-medium tracking-wide text-ink/60 uppercase group-hover:text-accent-dark">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
