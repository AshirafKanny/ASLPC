"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { useGSAP } from "@gsap/react";
import { ensureGsap, gsap, ScrollTrigger } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

const VIDEO_SRC = "/judge2.mp4";

export function ScrollShowcase() {
  const [videoOpen, setVideoOpen] = useState(false);
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

  useEffect(() => {
    if (!videoOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [videoOpen]);

  return (
    <section ref={sectionRef} className="overflow-hidden py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Overview</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            A Closer Look at <em className="text-accent-dark italic">Our Work</em>
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
            <div className="absolute inset-0 bg-ink/25" />
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play ASLPC overview video"
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/60 bg-ink/50 text-paper backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
                <svg aria-hidden viewBox="0 0 16 16" className="h-5 w-5 translate-x-0.5">
                  <path d="M4 2.5v11l10-5.5-10-5.5z" fill="currentColor" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </Container>

      {videoOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
              onClick={() => setVideoOpen(false)}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center text-paper/80 transition-colors hover:text-paper"
              >
                <svg aria-hidden viewBox="0 0 20 20" className="h-5 w-5">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
              <video
                src={VIDEO_SRC}
                controls
                autoPlay
                className="max-h-[80vh] w-full max-w-4xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
