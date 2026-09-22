"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsap, ScrollTrigger } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

/** A 2px gold line under the header that fills left-to-right with page scroll progress. */
export function ScrollProgress() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const bar = barRef.current;
      if (!bar || reducedMotion) return;
      ensureGsap();
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          bar.style.transform = `scaleX(${self.progress})`;
        },
      });
    },
    { scope: wrapRef, dependencies: [reducedMotion] },
  );

  if (reducedMotion) return null;

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full overflow-hidden" aria-hidden>
      <div ref={barRef} className="h-full w-full origin-left bg-accent" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}
