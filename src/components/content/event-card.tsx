import Link from "next/link";
import type { Event } from "@/lib/content/types";
import { Tag } from "@/components/ui/tag";
import { formatDateRange } from "@/lib/utils";

const TYPE_LABEL: Record<Event["type"], string> = {
  conference: "Conference",
  workshop: "Workshop",
  dialogue: "Policy Dialogue",
  training: "Training",
};

export function EventCard({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col border border-line bg-surface p-6 transition-colors hover:border-ink/40"
    >
      <Tag>{TYPE_LABEL[event.type]}</Tag>
      <h3 className="mt-4 font-serif text-xl leading-snug text-ink transition-colors group-hover:text-accent-dark">
        {event.title}
      </h3>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">{event.description}</p>
      <div className="mt-5 flex flex-col gap-1 text-xs tracking-wide text-muted uppercase">
        <span>{formatDateRange(event.startDate, event.endDate)}</span>
        <span>{event.isVirtual ? "Virtual" : event.location}</span>
      </div>
    </Link>
  );
}
