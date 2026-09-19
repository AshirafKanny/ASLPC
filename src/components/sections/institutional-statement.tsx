"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import bgImg from "../../../public/law-refers.webp";

const BADGE_TEXT = "AFRICAN SPORTS LAW AND POLICY CENTRE  ·  EST. 2026  ·  ";
const VIDEO_SRC = "/video/aslpc-overview.mp4";

const STATS = [
  { value: "4", label: "Technical Divisions" },
  { value: "8", label: "Research Pillars" },
  { value: "18", label: "Areas of Expertise" },
  { value: "7", label: "Partnership Categories" },
  { value: "6", label: "Standing Programmes" },
];

function CountUpStat({ value, label }: { value: string; label: string }) {
  const target = parseInt(value, 10);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const raf = requestAnimationFrame(() => setDisplay(target));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;
        observer.disconnect();

        const duration = 1200;
        const start = performance.now();

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="px-4 py-8 text-center">
      <p ref={ref} className="font-serif text-3xl text-paper tabular-nums sm:text-4xl">
        {Number.isNaN(target) ? value : display}
      </p>
      <p className="mt-2 text-xs tracking-wide text-paper/60 uppercase">{label}</p>
    </div>
  );
}

export function InstitutionalStatement() {
  const [videoOpen, setVideoOpen] = useState(false);

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
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <Image src={bgImg} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/45" />
      </div>

      <Container className="relative py-24 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="group relative flex h-32 w-32 shrink-0 items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="badge-rotate h-full w-full text-paper/70 transition-colors duration-300 group-hover:text-accent group-hover:[animation-play-state:paused]"
            >
              <defs>
                <path id="statement-badge-circle" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" fill="none" />
              </defs>
              <text fontSize="13" fontWeight="700" letterSpacing="2" fill="currentColor">
                <textPath href="#statement-badge-circle">{BADGE_TEXT}</textPath>
              </text>
            </svg>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play ASLPC overview video"
              className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 bg-ink/60 text-accent backdrop-blur-sm transition-colors duration-300 group-hover:border-accent group-hover:text-accent"
            >
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 translate-x-px">
                <path d="M4 2.5v11l10-5.5-10-5.5z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <h2 className="mt-8 font-serif text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
            The Independent Institution Advancing
            <br />
            <em className="text-accent italic">African Sports Law</em>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70">
            ASLPC is an independent African research, policy and knowledge institution working at the intersection
            of sports law, governance, policy and sport for development — closing the gap between legal
            scholarship, public policy and practical institutional reform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 divide-x divide-y divide-paper/15 border-t border-paper/15 sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
          {STATS.map((stat) => (
            <CountUpStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
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
