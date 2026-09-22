"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsap } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

type StaggerVariant = "rise" | "scale";

const VARIANT_FROM: Record<StaggerVariant, gsap.TweenVars> = {
  rise: { opacity: 0, y: 32 },
  scale: { opacity: 0, scale: 0.94 },
};

/**
 * Wraps a group of cards (its direct children) and staggers their entrance as the group
 * scrolls into view. One ScrollTrigger per group, not per card.
 */
export function StaggerGroup({
  children,
  variant = "rise",
  className,
  stagger = 0.12,
  start = "top 85%",
}: {
  children: ReactNode;
  variant?: StaggerVariant;
  className?: string;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reducedMotion) return;
      const gsapInstance = ensureGsap();
      const items = Array.from(el.children);
      if (items.length === 0) return;

      gsapInstance.set(items, VARIANT_FROM[variant]);
      gsapInstance.to(items, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref, dependencies: [variant, stagger, start, reducedMotion] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
