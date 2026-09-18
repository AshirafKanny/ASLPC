import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "The vision and mission guiding the African Sports Law and Policy Centre.",
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader eyebrow="Institute" title="Vision & Mission" />
      <PlaceholderNotice>Vision and mission statements will be added here.</PlaceholderNotice>
    </>
  );
}
