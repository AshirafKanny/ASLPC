"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { PILLARS } from "@/lib/constants";
import manImg2 from "../../../public/man pp2.jpg";
import manImg3 from "../../../public/man pp3.jpg";
import womanImg1 from "../../../public/woman pp1.jpg";

const ENQUIRY_TYPES = ["Training Enquiry", "Policy Advisory", "Partnership Discussion", "Media Enquiry"];

type Testimonial = {
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
};

// Illustrative testimonials for design purposes — ASLPC is pre-launch and has not yet
// collected real stakeholder feedback. Replace with genuine testimonials before launch.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ronald Ssemwogerere",
    role: "Federation Administrator",
    image: manImg2,
    quote:
      "The ASLPC Academy's governance workshop gave our federation practical tools we had never had access to before — not just theory, but a self-assessment framework we could apply immediately.",
  },
  {
    name: "Patricia Nabirye",
    role: "Sport for Development Officer",
    image: womanImg1,
    quote:
      "ASLPC's approach to sport for development is refreshingly rigorous. Their impact framework helped us measure outcomes in a way we could finally take to our donors and partners.",
  },
  {
    name: "Ivan Tumusiime",
    role: "Sports Law Practitioner",
    image: manImg3,
    quote:
      "As a practitioner, I've long felt African sports law lacked a dedicated research base. ASLPC's work on athlete rights and dispute resolution is exactly the Africa-grounded scholarship the field has needed.",
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

          <form className="mt-10 flex flex-col gap-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-wide text-paper/60 uppercase">Area of Interest</span>
                <select
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
                    className="w-full bg-transparent text-sm text-paper outline-none [color-scheme:dark]"
                  />
                </div>
              </label>
            </div>

            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit items-center border border-accent px-6 py-3 text-sm font-medium text-paper shadow-[6px_6px_0_0_rgba(184,144,60,0.4)] transition-all duration-300 hover:bg-accent hover:text-ink hover:shadow-none"
            >
              Request a Consultation
            </Link>
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

          <p className="relative text-xs font-bold tracking-[0.2em] text-accent-dark uppercase">Testimonial</p>
          <h2 className="relative mt-3 font-serif text-3xl leading-tight font-semibold text-ink sm:text-4xl">
            Stakeholder <span className="text-accent-dark">Voices</span>
          </h2>

          <p className="relative mt-8 min-h-32 max-w-lg text-base leading-relaxed text-muted">{testimonial.quote}</p>

          <div className="relative mt-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image src={testimonial.image} alt={testimonial.name} fill sizes="80px" className="object-cover" />
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
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center text-ink/60 transition-colors hover:text-ink"
              >
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
                  <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goRelative(1)}
                aria-label="Next testimonial"
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
