import { Hero } from "@/components/sections/hero";
import { ScrollShowcase } from "@/components/sections/scroll-showcase";
import { PartnershipMarquee } from "@/components/sections/partnership-marquee";
import { PillarsGrid } from "@/components/sections/pillars-grid";
import { InstitutionalHighlights } from "@/components/sections/institutional-highlights";
import { InstitutionalStatement } from "@/components/sections/institutional-statement";
import { Faq } from "@/components/sections/faq";
import { ConsultationAndTestimonials } from "@/components/sections/consultation-and-testimonials";
import { LatestNews } from "@/components/sections/latest-news";
import { EngagementProcess } from "@/components/sections/engagement-process";
import { FeaturedPublications } from "@/components/sections/featured-publications";
import { EventsAndInsights } from "@/components/sections/events-and-insights";
import { JusticeStatement } from "@/components/sections/justice-statement";
import { CtaBanner } from "@/components/sections/cta-banner";
import { InstagramFeed } from "@/components/sections/instagram-feed";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollShowcase />
      <PartnershipMarquee />
      <PillarsGrid />
      <InstitutionalHighlights />
      <InstitutionalStatement />
      <Faq />
      <ConsultationAndTestimonials />
      <LatestNews />
      <EngagementProcess />
      <FeaturedPublications />
      <EventsAndInsights />
      <JusticeStatement />
      <CtaBanner />
      <InstagramFeed />
    </>
  );
}
