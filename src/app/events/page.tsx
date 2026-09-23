import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { EventCard } from "@/components/content/event-card";
import { events } from "@/lib/content/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Conferences, workshops, policy dialogues and training programmes hosted by ASLPC.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engagement"
        title="Events"
        description="Conferences, workshops, policy dialogues and training programmes across the ASLPC calendar."
      />
      <section className="py-16 lg:py-20">
        <Container>
          {events.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <p className="max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
              This calendar carries the Centre&apos;s indicative annual programme   the African Sports Law and
              Policy Conference, the Sports Governance Forum, the African Sports Law Lecture Series, Athlete Rights
              Week, policy roundtables, and the ASLPC Academy&apos;s training courses. Dates will be published here
              as they are confirmed.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
