import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/content/event-card";
import { getUpcomingEvents } from "@/lib/content/events";

export function EventsAndInsights() {
  const events = getUpcomingEvents(3);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Engagement" title="Upcoming Events" />
          <Button href="/events" variant="secondary" className="shrink-0">
            View Full Calendar
          </Button>
        </div>

        {events.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-10 max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
            ASLPC&apos;s public programme — including its founding conference, policy dialogues and Academy training
            courses — will be announced here following the Centre&apos;s institutional launch.
          </p>
        )}
      </Container>
    </section>
  );
}
