import type { MetadataRoute } from "next";
import { SITE, PILLARS } from "@/lib/constants";
import { publications } from "@/lib/content/publications";
import { events } from "@/lib/content/events";
import { getInsights } from "@/lib/content/insights";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const insights = await getInsights();

  const staticRoutes = [
    "",
    "/about",
    "/about/vision-and-mission",
    "/about/leadership",
    "/about/structure",
    "/about/partnerships",
    "/publications",
    "/events",
    "/insights",
    "/contact",
    ...PILLARS.map((p) => `/${p.slug}`),
  ];

  const dynamicRoutes = [
    ...publications.map((p) => `/publications/${p.slug}`),
    ...events.map((e) => `/events/${e.slug}`),
  ];

  return [
    ...[...staticRoutes, ...dynamicRoutes].map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
    })),
    ...insights.map((i) => ({
      url: `${SITE.url}/insights/${i.slug}`,
      lastModified: new Date(i.publishedAt),
    })),
  ];
}
