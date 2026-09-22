import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/content/event-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { getUpcomingEvents } from "@/lib/content/events";
import congressHallImg from "../../../public/chairs-row-congress-hall-with-no-people.jpg";
import decoratedHallImg from "../../../public/decorated-hall-wedding-is-ready-celebration.jpg";

const PROGRAMME_FORMATS = [
  {
    label: "Conferences & Policy Roundtables",
    description:
      "The African Sports Law and Policy Conference, the Sports Governance Forum and periodic policy roundtables convening government, federations and academia.",
    image: congressHallImg,
  },
  {
    label: "Flagship Convenings & Lecture Series",
    description:
      "The African Sports Law Lecture Series, Athlete Rights Week and other flagship convenings marking milestones in the Centre's institutional calendar.",
    image: decoratedHallImg,
  },
];

export function EventsAndInsights() {
  const events = getUpcomingEvents(3);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Engagement" title="Upcoming Events" />
          <Button href="/events" variant="secondary" className="shrink-0">
            View Full Calendar
          </Button>
        </Reveal>

        {events.length > 0 ? (
          <StaggerGroup variant="scale" className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </StaggerGroup>
        ) : (
          <>
            <StaggerGroup variant="scale" className="mt-12 grid gap-6 sm:grid-cols-2">
              {PROGRAMME_FORMATS.map((format) => (
                <Link
                  key={format.label}
                  href="/events"
                  className="group relative block h-96 overflow-hidden lg:h-110"
                >
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

            <p className="mt-8 max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
              ASLPC&apos;s public programme — including its founding conference, policy dialogues and Academy training
              courses — will be announced here following the Centre&apos;s institutional launch.
            </p>
          </>
        )}
      </Container>
    </section>
  );
}
