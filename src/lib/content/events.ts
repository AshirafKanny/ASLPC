import type { Event } from "./types";

// ASLPC is in its institutional establishment phase and has not yet confirmed
// dated events. The Centre's indicative annual calendar (conference, governance
// forum, lecture series, training programme and more) is described on the
// Events page; specific dated entries will be added here once confirmed.
export const events: Event[] = [];

export function getUpcomingEvents(limit = 3): Event[] {
  const now = Date.now();
  return events
    .filter((e) => new Date(e.startDate).getTime() >= now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, limit);
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}
