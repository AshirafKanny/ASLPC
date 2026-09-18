import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";

export const metadata: Metadata = {
  title: "Institutional Structure",
  description: "The institutional structure of the African Sports Law and Policy Centre.",
};

export default function StructurePage() {
  return (
    <>
      <PageHeader eyebrow="Institute" title="Institutional Structure" />
      <PlaceholderNotice>An overview of ASLPC&apos;s institutional structure will be added here.</PlaceholderNotice>
    </>
  );
}
