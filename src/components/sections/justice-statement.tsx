"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const BG_VIDEO_SRC = "/justice.mp4";

export function JusticeStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clip = clipRef.current;
    if (!clip) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clip.style.position = "absolute";
      clip.style.clipPath = "none";
      return;
    }

    let ticking = false;

    function update() {
      ticking = false;
      const section = sectionRef.current;
      if (!section || !clip) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const top = Math.max(0, rect.top);
      const bottom = Math.min(vh, rect.bottom);
      clip.style.clipPath = bottom <= top ? "inset(0px 0px 100% 0px)" : `inset(${top}px 0px ${vh - bottom}px 0px)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center text-paper">
      <div ref={clipRef} aria-hidden className="fixed inset-0 -z-10">
        <video
          src={BG_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
      </div>

      <Container className="relative py-28 lg:py-36">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Core Value</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Integrity <em className="text-accent italic">&amp; Accountability</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-paper/75 sm:text-lg">
            We uphold honesty, ethical conduct, transparency and accountability in our research, advice,
            partnerships and institutional operations. Our work is rigorous, defensible and open to scrutiny.
          </p>
          <Button href="/about/vision-and-mission" variant="on-ink" className="mt-8">
            Our Core Values →
          </Button>
        </div>
      </Container>
    </section>
  );
}
