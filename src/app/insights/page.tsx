import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { InsightCard } from "@/components/content/insight-card";
import { insights } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles and commentary from the African Sports Law and Policy Centre.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge"
        title="Insights & Articles"
        description="Commentary and analysis from ASLPC researchers and programme teams."
      />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
