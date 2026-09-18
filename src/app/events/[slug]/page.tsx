import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getEventBySlug, events } from "@/lib/content/events";
import { formatDateRange } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(props: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return { title: event.title, description: event.description };
}

export default async function EventDetailPage(props: PageProps<"/events/[slug]">) {
  const { slug } = await props.params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${formatDateRange(event.startDate, event.endDate)} · ${event.isVirtual ? "Virtual" : event.location}`}
        title={event.title}
        description={event.description}
      />
      <section className="py-16 lg:py-20">
        <Container>
          {event.registrationUrl ? (
            <Button href={event.registrationUrl}>Register</Button>
          ) : (
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Registration details will be published closer to the event.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
