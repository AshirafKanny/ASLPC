"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsap } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

/**
 * Scrub-linked vertical parallax. `speed` is the fraction of scroll distance the child
 * travels relative to the page: 0.15-0.3 reads as a subtle depth layer, higher values
 * (0.5+) feel more dramatic. Negative values move opposite to scroll direction.
 */
export function Parallax({
  children,
  speed = 0.2,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const target = targetRef.current;
      if (!wrapper || !target || reducedMotion) return;
      const gsapInstance = ensureGsap();
      gsapInstance.to(target, {
        y: () => wrapper.offsetHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: wrapperRef, dependencies: [speed, reducedMotion] },
  );

  return (
    <div ref={wrapperRef} className={className}>
      <div ref={targetRef} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
