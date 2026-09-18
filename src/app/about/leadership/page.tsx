import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";

export const metadata: Metadata = {
  title: "Leadership & Board",
  description: "Meet the leadership and board of the African Sports Law and Policy Centre.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader eyebrow="Institute" title="Leadership & Board" />
      <PlaceholderNotice>Leadership and board profiles will be added here.</PlaceholderNotice>
    </>
  );
}
