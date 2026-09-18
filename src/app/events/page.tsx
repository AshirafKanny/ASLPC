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
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
