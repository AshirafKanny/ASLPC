"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ensureGsap, gsap } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";

type Slide = {
  eyebrow: string;
  headline: { lead: string; line2: string; line3: string };
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  imageKind: "photo" | "cutout";
  imagePosition?: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Research & Policy",
    headline: { lead: "Advancing", line2: "Sports Law", line3: "Across Africa" },
    description:
      "Independent research and policy analysis shaping how sport is governed across the continent.",
    ctaLabel: "Explore Our Research",
    ctaHref: "/research",
    image: "/hero/research-justice-cutout.webp",
    imageAlt: "A statuette of Lady Justice with scales, a gavel and an open law book",
    imageKind: "cutout",
  },
  {
    eyebrow: "Governance & Reform",
    headline: { lead: "Strengthening", line2: "Sport Governance", line3: "Standards" },
    description:
      "Advisory work helping federations and ministries build transparent, accountable institutions.",
    ctaLabel: "Our Governance Work",
    ctaHref: "/governance",
    image: "/hero/governance-lawyers.webp",
    imageAlt: "Lawyers reviewing a legal book beside a gavel at a desk",
    imageKind: "photo",
  },
  {
    eyebrow: "Capacity Building",
    headline: { lead: "Training", line2: "Africa's Next", line3: "Generation of Experts" },
    description:
      "The ASLPC Academy equips lawyers, officials and administrators with practical sports law expertise.",
    ctaLabel: "Visit the Academy",
    ctaHref: "/academy",
    image: "/hero/academy-football.jpg",
    imageAlt: "A goalkeeper holding a football, gloved hand resting on the ball",
    imageKind: "photo",
    imagePosition: "50% 75%",
  },
];

const AUTOPLAY_MS = 6500;
const BADGE_TEXT = "AFRICAN SPORTS LAW AND POLICY CENTRE  ·  EST. 2026  ·  ";
const VIDEO_SRC = "/judge2.mp4";
const DOT_RADIUS = 16;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const bgScaleRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const content = contentRef.current;
      const bgScale = bgScaleRef.current;
      if (!section || reducedMotion) return;

      ensureGsap();
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      if (content) {
        tl.to(content, { y: -70, opacity: 0.25, ease: "none" }, 0);
      }
      if (bgScale) {
        tl.to(bgScale, { scale: 1.12, ease: "none" }, 0);
      }
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;
    function onMouseMove(e: MouseEvent) {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (bgLayerRef.current) {
        bgLayerRef.current.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0)`;
      }
      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${x * 18}px, ${y * 14}px, 0)`;
      }
    }
    function onMouseLeave() {
      if (bgLayerRef.current) bgLayerRef.current.style.transform = "translate3d(0, 0, 0)";
      if (badgeRef.current) badgeRef.current.style.transform = "translate3d(0, 0, 0)";
    }
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [reducedMotion]);

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

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    if (reducedMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
  }, [stopTimer, reducedMotion]);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  function goTo(i: number) {
    setIndex(i);
    startTimer();
  }

  function goRelative(delta: number) {
    goTo((index + delta + SLIDES.length) % SLIDES.length);
  }

  const slide = SLIDES[index];

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[640px] overflow-hidden bg-ink text-paper lg:min-h-[86vh]"
    >
      {/* Background layers: full-bleed photo slides crossfade with a slow Ken Burns zoom; cutout slides sit as a right-aligned object on the solid ink background */}
      <div ref={bgScaleRef} className="absolute inset-0 will-change-transform">
      <div ref={bgLayerRef} className="absolute -inset-4 transition-transform duration-300 ease-out will-change-transform">
        {SLIDES.map((s, i) => (
          <div
            key={s.eyebrow}
            aria-hidden={i !== index}
            className={`absolute inset-4 transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              key={i === index ? `active-${index}` : "inactive"}
              className={`absolute inset-0 ${i === index && !reducedMotion ? "animate-clip-reveal" : ""}`}
            >
              {s.imageKind === "photo" ? (
                <>
                  <div
                    className={`absolute inset-0 transition-transform ease-linear ${
                      i === index ? "scale-110" : "scale-100"
                    }`}
                    style={{ transitionDuration: `${AUTOPLAY_MS + 800}ms` }}
                  >
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      priority={i === 0}
                      sizes="100vw"
                      className="object-cover"
                      style={s.imagePosition ? { objectPosition: s.imagePosition } : undefined}
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-ink) 0%, var(--color-ink) 46%, color-mix(in srgb, var(--color-ink) 35%, transparent) 62%, color-mix(in srgb, var(--color-ink) 8%, transparent) 100%)",
                    }}
                  />
                </>
              ) : (
                <>
                  {/* Mobile: faded full-bleed background so the statue reads as atmosphere behind the text, not a competing inline element */}
                  <div className="absolute inset-0 flex items-center justify-end opacity-25 md:hidden">
                    <div className="relative -mr-6 h-[80%] w-[95%]">
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        priority={i === 0}
                        sizes="95vw"
                        className="object-contain object-right"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 md:hidden"
                    style={{
                      background:
                        "linear-gradient(to bottom, var(--color-ink) 0%, color-mix(in srgb, var(--color-ink) 60%, transparent) 35%, color-mix(in srgb, var(--color-ink) 70%, transparent) 75%, var(--color-ink) 100%)",
                    }}
                  />

                  <div className="absolute inset-y-0 right-0 hidden w-full items-center justify-end md:flex">
                    <div className="relative mr-[8%] h-[70%] w-[40%] lg:mr-[4%] lg:h-[82%] lg:w-[43%] xl:mr-[7%] xl:h-full xl:w-[58%]">
                      <div
                        className={`relative h-full w-full transition-transform ease-linear ${
                          i === index ? "scale-[1.08]" : "scale-100"
                        }`}
                        style={{ transitionDuration: `${AUTOPLAY_MS + 800}ms` }}
                      >
                        <Image
                          src={s.image}
                          alt={s.imageAlt}
                          fill
                          priority={i === 0}
                          sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 43vw, 40vw"
                          className="object-contain object-right drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        <div className="absolute inset-4 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />
      </div>
      </div>

      {/* Vertical rail: scroll cue + follow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 items-center justify-center lg:flex">
        <div className="flex flex-col items-center gap-8">
          <span className="[writing-mode:vertical-rl] text-[11px] tracking-[0.3em] text-paper/50 uppercase">
            Scroll
          </span>
          <span aria-hidden className="h-14 w-px bg-paper/25" />
          <span className="[writing-mode:vertical-rl] text-[11px] tracking-[0.3em] text-paper/50 uppercase">
            Follow   Li · Ig · Fb
          </span>
        </div>
      </div>

      <Container className="relative z-10">
        <div
          ref={contentRef}
          className="flex min-h-[640px] flex-col justify-center py-24 lg:min-h-[86vh] lg:py-16 lg:pl-8 xl:pl-28"
        >
          <div key={index} className="max-w-2xl">
            <span
              className="animate-hero-reveal inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-white uppercase"
              style={{ animationDelay: "0ms" }}
            >
              {slide.eyebrow}
            </span>

            <div className="relative">
              <h1 className="mt-6 font-serif text-[clamp(2.75rem,1.85rem+3.8vw,5.25rem)] leading-[1.05] font-semibold tracking-[-0.01em] text-paper">
                <span className="animate-hero-reveal block" style={{ animationDelay: "100ms" }}>
                  {slide.headline.lead}
                </span>
                <span className="animate-hero-reveal block" style={{ animationDelay: "200ms" }}>
                  {slide.headline.line2}
                </span>
                <span className="animate-hero-reveal block" style={{ animationDelay: "300ms" }}>
                  {slide.headline.line3}
                </span>
              </h1>
            </div>

            <p
              className="animate-hero-reveal mt-6 max-w-lg text-lg leading-relaxed text-paper/70 sm:text-xl"
              style={{ animationDelay: "420ms" }}
            >
              {slide.description}
            </p>

            <div
              className="animate-hero-reveal mt-10"
              style={{ animationDelay: "520ms" }}
            >
              <Button
                href={slide.ctaHref}
                variant="on-ink"
                className="group/cta border-accent bg-transparent text-paper shadow-[6px_6px_0_0_rgba(184,144,60,0.4)] transition-all duration-300 hover:border-accent hover:bg-accent hover:text-ink hover:-translate-y-0.5 hover:shadow-[6px_10px_0_0_rgba(184,144,60,0.4)]"
              >
                {slide.ctaLabel}{" "}
                <span className="inline-block transition-transform duration-300 group-hover/cta:translate-x-1.5">
                  →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Rotating brand seal */}
      <div
        ref={badgeRef}
        className="animate-badge-in group absolute top-1/2 right-[22%] z-10 hidden h-40 w-40 -translate-y-1/2 items-center justify-center transition-transform duration-300 ease-out will-change-transform xl:flex"
        style={{ animationDelay: "600ms" }}
      >
        <svg
          viewBox="0 0 200 200"
          className="badge-rotate h-full w-full text-white transition-colors duration-300 group-hover:text-orange-400 group-hover:[animation-play-state:paused]"
        >
          <defs>
            <path id="hero-badge-circle" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" fill="none" />
          </defs>
          <text fontSize="13.5" fontWeight="700" letterSpacing="2" fill="currentColor">
            <textPath href="#hero-badge-circle">{BADGE_TEXT}</textPath>
          </text>
        </svg>
        {!reducedMotion ? (
          <span className="animate-ping-soft pointer-events-none absolute h-12 w-12 rounded-full bg-accent/40" />
        ) : null}
        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          aria-label="Play related video"
          className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-ink/60 text-accent backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-orange-400 group-hover:text-orange-400"
        >
          <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 translate-x-px">
            <path d="M4 2.5v11l10-5.5-10-5.5z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Slide navigation */}
      <div className="absolute right-6 bottom-8 z-10 flex items-center gap-4 sm:right-10 lg:right-16">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goRelative(-1)}
          className="flex h-9 w-9 items-center justify-center text-paper/70 transition-all duration-200 hover:-translate-x-0.5 hover:text-paper"
        >
          <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
            <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.eyebrow}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`relative h-9 w-9 overflow-hidden rounded-full transition-all duration-200 hover:scale-110 ${
                i === index ? "bg-ink text-sm font-medium text-paper" : "border border-paper/30 hover:border-paper/60"
              }`}
            >
              {i === index ? (
                <>
                  <svg aria-hidden viewBox="0 0 36 36" className="pointer-events-none absolute inset-0 h-full w-full -rotate-90">
                    <circle cx="18" cy="18" r={DOT_RADIUS} fill="none" stroke="var(--color-paper)" strokeOpacity="0.25" strokeWidth="2" />
                    {!reducedMotion ? (
                      <circle
                        key={index}
                        cx="18"
                        cy="18"
                        r={DOT_RADIUS}
                        pathLength={1}
                        fill="none"
                        stroke="var(--color-paper)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={1}
                        className="dot-progress"
                        style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                      />
                    ) : (
                      <circle cx="18" cy="18" r={DOT_RADIUS} fill="none" stroke="var(--color-paper)" strokeWidth="2" />
                    )}
                  </svg>
                  <span className="relative z-10">{i + 1}</span>
                </>
              ) : (
                <Image src={s.image} alt="" fill sizes="36px" className="object-cover" />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goRelative(1)}
          className="flex h-9 w-9 items-center justify-center text-paper/70 transition-all duration-200 hover:translate-x-0.5 hover:text-paper"
        >
          <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
            <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

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
