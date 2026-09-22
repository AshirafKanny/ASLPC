"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsap } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

type RevealVariant = "rise" | "clip" | "scale" | "fade";

const VARIANT_FROM: Record<RevealVariant, gsap.TweenVars> = {
  rise: { opacity: 0, y: 28 },
  clip: { clipPath: "inset(0 0 100% 0)" },
  scale: { opacity: 0, scale: 1.06 },
  fade: { opacity: 0 },
};

const VARIANT_TO: Record<RevealVariant, gsap.TweenVars> = {
  rise: { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
  clip: { clipPath: "inset(0% 0 0% 0)", duration: 1.1, ease: "power4.inOut" },
  scale: { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" },
  fade: { opacity: 1, duration: 0.8, ease: "power2.out" },
};

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
  start = "top 85%",
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reducedMotion) return;
      const gsapInstance = ensureGsap();
      gsapInstance.set(el, VARIANT_FROM[variant]);
      gsapInstance.to(el, {
        ...VARIANT_TO[variant],
        delay,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref, dependencies: [variant, delay, start, reducedMotion] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
