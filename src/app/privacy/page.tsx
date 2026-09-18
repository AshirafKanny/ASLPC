import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <PlaceholderNotice>The full privacy policy will be added here.</PlaceholderNotice>
    </>
  );
}
