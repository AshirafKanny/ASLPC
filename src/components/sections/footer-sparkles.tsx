"use client";

import dynamic from "next/dynamic";
import { useInView } from "@/lib/animation/use-in-view";

// The tsParticles engine is a meaningful chunk of JS — defer fetching it until the
// footer is actually about to scroll into view, instead of shipping it on every page load.
const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then((m) => m.SparklesCore), {
  ssr: false,
});

export function FooterSparkles() {
  const { ref, inView } = useInView<HTMLDivElement>("300px");

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      {inView ? (
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={70}
          particleColor="#ffffff"
          className="h-full w-full"
        />
      ) : null}
      <div className="absolute inset-0 bg-ink mask-[radial-gradient(1200px_320px_at_center,transparent_10%,white_80%)]" />
    </div>
  );
}
