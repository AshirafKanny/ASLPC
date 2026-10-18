import type { Metadata } from "next";
import { NextStudio, metadata as studioMetadata } from "next-sanity/studio";
import config from "../../../../sanity.config";

// The Studio is a client-side app; its HTML shell never changes.
export const dynamic = "force-static";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "ASLPC Studio",
};

export { viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
