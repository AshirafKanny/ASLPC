import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";

export const metadata: Metadata = {
  title: "About ASLPC",
  description:
    "Learn about the African Sports Law and Policy Centre, an independent research and policy institution based in Uganda.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institute"
        title="Who We Are"
        description="ASLPC is an independent African research, policy and knowledge institution working at the intersection of sports law, governance, policy and sport for development."
      />
      <PlaceholderNotice>
        Full institutional profile — history, mandate and approach — will be added here.
      </PlaceholderNotice>
    </>
  );
}
