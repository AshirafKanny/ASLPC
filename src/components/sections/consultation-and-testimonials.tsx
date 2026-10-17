"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { PILLARS } from "@/lib/constants";
import aslpcMark from "../../../public/aslpc-mark.png";

const ENQUIRY_TYPES = ["Training Enquiry", "Policy Advisory", "Partnership Discussion", "Media Enquiry"];

type Testimonial = {
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
};

// Statements taken from the ASLPC Institutional Profile (September 2026).
// When genuine stakeholder testimonials have been collected, with each person's
// consent to be quoted, add them here with their name, role and photo.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Our Vision",
    role: "ASLPC Institutional Profile",
    image: aslpcMark,
    quote:
      "A legally sound, well-governed, inclusive, commercially sustainable and socially transformative African sports sector, where law, policy and evidence, not improvisation, shape how sport is governed, protected, developed and harnessed for sustainable development.",
  },
  {
    name: "Integrity & Accountability",
    role: "ASLPC Core Value",
    image: aslpcMark,
    quote:
      "We uphold honesty, ethical conduct, transparency and accountability in our research, advice, partnerships and institutional operations. Our work is rigorous, defensible and open to scrutiny.",
  },
  {
    name: "Independence & African Ownership",
    role: "ASLPC Core Value",
    image: aslpcMark,
    quote:
      "We protect our intellectual, editorial and institutional independence while advancing African expertise, leadership and ownership of sports law and policy knowledge.",
  },
];

export function ConsultationAndTestimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  function goRelative(delta: number) {
    setIndex((i) => (i + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-ink px-6 py-20 text-paper sm:px-10 lg:px-16 lg:py-28">
        <Reveal className="mx-auto max-w-xl">
          <p className="text-xs font-bold tracking-[0.2em] text-paper/70 uppercase">For Institutional Enquiries</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight font-semibold sm:text-4xl">
            Request A <span className="text-accent">Consultation</span>
          </h2>

          <form action="/contact" method="get" className="mt-10 flex flex-col gap-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-wide text-paper/60 uppercase">Area of Interest</span>
                <select
                  name="area"
                  defaultValue={PILLARS[0].slug}
                  className="border-b border-paper/30 bg-transparent pb-3 text-sm text-paper outline-none focus:border-paper"
                >
                  {PILLARS.map((p) => (
                    <option key={p.slug} value={p.slug} className="text-ink">
                      {p.shortLabel}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-wide text-paper/60 uppercase">Enquiry Type</span>
                <select
                  name="type"
                  defaultValue={ENQUIRY_TYPES[0]}
                  className="border-b border-paper/30 bg-transparent pb-3 text-sm text-paper outline-none focus:border-paper"
                >
                  {ENQUIRY_TYPES.map((t) => (
                    <option key={t} value={t} className="text-ink">
                      {t}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-wide text-paper/60 uppercase">Preferred Date</span>
                <div className="flex items-center gap-3 border-b border-paper/30 pb-3">
                  <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-accent">
                    <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    <path d="M1.5 6h13M4.5 1v3M11.5 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <input
                    type="date"
                    name="date"
                    className="w-full bg-transparent text-sm text-paper outline-none [color-scheme:dark]"
                  />
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-wide text-paper/60 uppercase">Preferred Time</span>
                <div className="flex items-center gap-3 border-b border-paper/30 pb-3">
                  <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-accent">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    <path d="M8 4.5V8l3 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="time"
                    name="time"
                    className="w-full bg-transparent text-sm text-paper outline-none [color-scheme:dark]"
                  />
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center border border-accent px-6 py-3 text-sm font-medium text-paper shadow-[6px_6px_0_0_rgba(184,144,60,0.4)] transition-all duration-300 hover:bg-accent hover:text-ink hover:shadow-none"
            >
              Request a Consultation
            </button>
          </form>
        </Reveal>
      </div>

      <div className="relative overflow-hidden bg-paper px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <Reveal delay={0.15} className="relative mx-auto max-w-xl">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 right-0 font-serif text-[140px] leading-none text-line select-none lg:right-8"
          >
            &rdquo;
          </span>

          <p className="relative text-xs font-bold tracking-[0.2em] text-accent-dark uppercase">In Our Words</p>
          <h2 className="relative mt-3 font-serif text-3xl leading-tight font-semibold text-ink sm:text-4xl">
            What We <span className="text-accent-dark">Stand For</span>
          </h2>

          <p className="relative mt-8 min-h-32 max-w-lg text-base leading-relaxed text-muted">{testimonial.quote}</p>

          <div className="relative mt-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line bg-surface">
                <Image src={testimonial.image} alt="" fill sizes="80px" className="object-contain p-3" />
              </div>
              <div>
                <p className="font-serif text-lg text-ink">{testimonial.name}</p>
                <p className="text-xs font-medium tracking-wide text-muted uppercase">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => goRelative(-1)}
                aria-label="Previous statement"
                className="flex h-10 w-10 items-center justify-center text-ink/60 transition-colors hover:text-ink"
              >
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
                  <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goRelative(1)}
                aria-label="Next statement"
                className="flex h-10 w-10 items-center justify-center text-ink/60 transition-colors hover:text-ink"
              >
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
                  <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
