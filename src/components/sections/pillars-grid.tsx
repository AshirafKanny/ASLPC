"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LogoMark } from "@/components/ui/logo";
import { Reveal } from "@/components/motion/reveal";
import { ensureGsap, gsap, ScrollTrigger } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/use-reduced-motion";
import { cn } from "@/lib/utils";
import researchImg from "../../../public/small hero img.jpg";
import policyImg from "../../../public/aslpc hero1.webp";
import governanceImg from "../../../public/business-lawyers.webp";
import academyImg from "../../../public/academy.webp";
import sportForDevImg from "../../../public/football image 2.jpg";

type FrameworkItem = {
  slug: string;
  number: string;
  lines: [string, string];
  heading: string;
  paragraph: string;
  image: typeof researchImg;
  href: string;
};

const FRAMEWORK_ITEMS: FrameworkItem[] = [
  {
    slug: "research",
    number: "01",
    lines: ["Legal", "Research"],
    heading: "Independent Research",
    paragraph:
      "Rigorous, Africa-grounded research on sports law and the governance of sport, producing evidence that informs policy and practice across the continent.",
    image: researchImg,
    href: "/research",
  },
  {
    slug: "policy",
    number: "02",
    lines: ["Policy", "Analysis"],
    heading: "Actionable Policy",
    paragraph:
      "Policy analysis and briefs that translate research into practical guidance for federations, ministries and regional bodies shaping African sport.",
    image: policyImg,
    href: "/policy",
  },
  {
    slug: "governance",
    number: "03",
    lines: ["Sport", "Governance"],
    heading: "Institutional Integrity",
    paragraph:
      "Advisory work strengthening the governance of federations, ministries and sporting bodies, building transparent and accountable institutions.",
    image: governanceImg,
    href: "/governance",
  },
  {
    slug: "academy",
    number: "04",
    lines: ["Capacity", "Building"],
    heading: "Practitioner Development",
    paragraph:
      "Training programmes building a new generation of African sports law and policy practitioners, equipped with practical, continent-specific expertise.",
    image: academyImg,
    href: "/academy",
  },
  {
    slug: "sport-for-development",
    number: "05",
    lines: ["Sport for", "Development"],
    heading: "Measurable Impact",
    paragraph:
      "Evidence-based approaches connecting sport to development outcomes, from health and education to social cohesion, across the continent.",
    image: sportForDevImg,
    href: "/sport-for-development",
  },
];

const ROW_H = "h-[440px] lg:h-[480px] xl:h-[520px]";

function DiagonalArrow({ active }: { active: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={cn(
        "h-5 w-5 text-paper/50 transition-transform duration-500 ease-out",
        active && "rotate-180 text-paper",
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PillarsGrid() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Desktop-only: pin the section while scrolling and let scroll progress drive which
  // pillar is expanded, in place of (not instead of) the existing click interaction.
  // The trigger is the numbers row itself (not the section top), so the pin/scroll
  // effect only kicks in once that row - with the 01-05 numbers - is fully in view.
  useGSAP(
    () => {
      const section = sectionRef.current;
      const row = rowRef.current;
      if (!section || !row || reducedMotion) return;

      ensureGsap();
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: row,
          start: "top top",
          end: () => `+=${window.innerHeight * 0.55 * FRAMEWORK_ITEMS.length}`,
          pin: section,
          scrub: 0.4,
          onUpdate: (self) => {
            const idx = Math.min(FRAMEWORK_ITEMS.length - 1, Math.floor(self.progress * FRAMEWORK_ITEMS.length));
            if (idx !== activeRef.current) setActive(idx);
          },
        });
        return () => trigger.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  function renderColumn(item: FrameworkItem, i: number, isActive: boolean) {
    return (
      <button
        key={item.slug}
        type="button"
        onClick={() => setActive(i)}
        aria-current={isActive}
        aria-label={`View ${item.heading}`}
        className={cn(
          "flex min-w-24 flex-1 flex-col justify-between border-r border-paper/15 px-3 py-8 text-left transition-colors duration-500 lg:px-4 xl:px-5 xl:py-10",
          ROW_H,
          !isActive && "hover:bg-paper/[0.03]",
        )}
      >
        <DiagonalArrow active={isActive} />
        <div className="flex flex-1 items-center justify-center gap-2 py-6">
          {item.lines.map((line) => (
            <span
              key={line}
              className={cn(
                "[writing-mode:vertical-rl] rotate-180 font-serif text-2xl leading-none font-bold italic transition-colors duration-500 xl:text-4xl 2xl:text-5xl",
                isActive ? "text-paper" : "text-paper/40",
              )}
            >
              {line}
            </span>
          ))}
        </div>
        <span
          className={cn(
            "font-sans text-5xl leading-none font-bold transition-colors duration-500 lg:text-5xl xl:text-6xl 2xl:text-7xl",
            isActive ? "text-paper" : "text-paper/15",
          )}
        >
          {item.number}
        </span>
      </button>
    );
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink py-20 text-paper lg:py-28">
      <div className="pointer-events-none absolute top-1/2 -left-24 hidden -translate-y-1/2 opacity-[0.05] lg:block">
        <LogoMark size={560} />
      </div>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            tone="on-ink"
            eyebrow="Our Framework"
            title="Five pillars, one institution"
            description="ASLPC's work is organised around five interconnected areas that together form a complete approach to sport governance in Africa."
          />
        </Reveal>
      </Container>

      {/* Desktop: sliding accordion strip */}
      <div ref={rowRef} className="relative mt-14 hidden w-full border-t border-paper/15 lg:mt-20 lg:flex">
        {/* Preload every pillar image up front so switching panels is instant, not a network wait. */}
        <div className="hidden" aria-hidden>
          {FRAMEWORK_ITEMS.map((item) => (
            <Image key={`preload-${item.slug}`} src={item.image} alt="" priority sizes="320px" />
          ))}
        </div>
        {FRAMEWORK_ITEMS.map((item, i) => {
          if (i !== active) return renderColumn(item, i, false);
          return (
            <Fragment key={item.slug}>
              <div
                className={cn(
                  "animate-hero-reveal flex w-64 shrink-0 flex-col justify-center gap-4 border-r border-paper/15 px-5 py-8 lg:w-64 lg:px-6 xl:w-80 xl:px-8 xl:gap-5 2xl:w-96",
                  ROW_H,
                )}
              >
                <h3 className="font-serif text-xl text-paper xl:text-2xl 2xl:text-3xl">{item.heading}</h3>
                <p className="text-sm leading-relaxed text-paper/65 xl:text-base">{item.paragraph}</p>
                <Link
                  href={item.href}
                  className="group/cta inline-flex w-fit items-center gap-2 border border-accent px-5 py-3 text-sm font-medium text-paper shadow-[6px_6px_0_0_rgba(184,144,60,0.4)] transition-all duration-300 hover:bg-accent hover:text-ink hover:shadow-none"
                >
                  Know More
                  <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                </Link>
              </div>
              <div
                className={cn(
                  "flex w-56 shrink-0 items-center justify-center border-r border-paper/15 px-2 lg:w-64 xl:w-72 2xl:w-80",
                  ROW_H,
                )}
              >
                <div className="animate-clip-reveal relative aspect-4/5 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.heading}
                    fill
                    sizes="320px"
                    priority={i === 0}
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </div>
              {renderColumn(item, i, true)}
            </Fragment>
          );
        })}
      </div>

      {/* Mobile / tablet: vertical accordion */}
      <Container className="relative mt-10 lg:hidden">
        <div className="flex flex-col divide-y divide-paper/15 border-t border-b border-paper/15">
          {FRAMEWORK_ITEMS.map((item, i) => {
            const isActive = i === active;
            return (
              <div key={item.slug}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={cn(
                        "font-sans text-3xl font-bold",
                        isActive ? "text-paper" : "text-paper/25",
                      )}
                    >
                      {item.number}
                    </span>
                    <span
                      className={cn(
                        "font-serif text-base italic",
                        isActive ? "text-paper" : "text-paper/50",
                      )}
                    >
                      {item.lines.join(" ")}
                    </span>
                  </span>
                  <DiagonalArrow active={isActive} />
                </button>
                {isActive ? (
                  <div className="animate-hero-reveal pb-8">
                    <div className="relative mb-6 h-48 w-full overflow-hidden sm:h-64">
                      <Image
                        src={item.image}
                        alt={item.heading}
                        fill
                        sizes="100vw"
                        placeholder="blur"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-xl text-paper">{item.heading}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper/65">{item.paragraph}</p>
                    <Link
                      href={item.href}
                      className="group/cta mt-6 inline-flex w-fit items-center gap-2 border border-accent px-5 py-3 text-sm font-medium text-paper shadow-[6px_6px_0_0_rgba(184,144,60,0.4)] transition-all duration-300 hover:bg-accent hover:text-ink hover:shadow-none"
                    >
                      Know More
                      <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
