"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

/** Initialises AOS once, and refreshes it on client-side route changes so newly
 *  mounted page content gets correct trigger offsets. */
export function AosInit() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: () => reducedMotion,
    });
  }, [reducedMotion]);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return null;
}
