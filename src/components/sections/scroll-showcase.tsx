"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { useGSAP } from "@gsap/react";
import { ensureGsap, gsap, ScrollTrigger } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

const VIDEO_SRC = "/judge2.mp4";

export function ScrollShowcase() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card || reducedMotion) return;

      ensureGsap();
      gsap.set(card, { transformPerspective: 1200 });
      const tween = gsap.fromTo(
        card,
        { rotateX: 22, scale: 0.9, y: 60 },
        {
          rotateX: 0,
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 35%",
            scrub: 0.4,
          },
        },
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
    <section ref={sectionRef} className="overflow-hidden py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Overview</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl leading-tight font-semibold text-ink sm:text-4xl">
            A Closer Look at <span className="text-accent-dark">Our Work</span>
          </h2>
        </Reveal>

        <div className="mt-14" style={{ perspective: "1200px" }}>
          <div
            ref={cardRef}
            className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-lg border border-line shadow-2xl will-change-transform"
          >
            <video
              src={VIDEO_SRC}
              muted
              loop
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
