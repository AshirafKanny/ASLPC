import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/content/event-card";
import { InsightCard } from "@/components/content/insight-card";
import { getUpcomingEvents } from "@/lib/content/events";
import { getRecentInsights } from "@/lib/content/insights";

export function EventsAndInsights() {
  const events = getUpcomingEvents(2);
  const insights = getRecentInsights(3);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading eyebrow="Engagement" title="Upcoming Events" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {events.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
            <Button href="/events" variant="ghost" className="mt-6 justify-start px-0">
              View Full Calendar →
            </Button>
          </div>

          <div>
            <SectionHeading eyebrow="Insights" title="From the Centre" />
            <div className="mt-8">
              {insights.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
            <Button href="/insights" variant="ghost" className="mt-6 justify-start px-0">
              Read More Insights →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
