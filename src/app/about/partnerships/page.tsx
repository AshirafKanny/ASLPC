import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "ASLPC's institutional partnerships across Africa and internationally.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader eyebrow="Institute" title="Partnerships" />
      <PlaceholderNotice>Partner institutions will be listed here.</PlaceholderNotice>
    </>
  );
}
