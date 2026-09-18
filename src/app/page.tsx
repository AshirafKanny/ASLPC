import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/sections/stats-band";
import { PillarsGrid } from "@/components/sections/pillars-grid";
import { FeaturedPublications } from "@/components/sections/featured-publications";
import { EventsAndInsights } from "@/components/sections/events-and-insights";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <PillarsGrid />
      <FeaturedPublications />
      <EventsAndInsights />
      <CtaBanner />
    </>
  );
}
