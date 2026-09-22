"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ensureGsap, gsap, ScrollTrigger } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

/**
 * Smooth-scroll layer: Lenis drives native scroll with subtle inertia, kept in lockstep
 * with GSAP's ticker so ScrollTrigger-driven animations never drift out of sync.
 * Skipped entirely under prefers-reduced-motion — the page falls back to native scroll.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    ensureGsap();
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
