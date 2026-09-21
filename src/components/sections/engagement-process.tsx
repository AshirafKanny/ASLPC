"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/constants";
import p1Img from "../../../public/p1.jpg";
import p2Img from "../../../public/p2.jpg";
import p3Img from "../../../public/p3.jpg";
import lawBImg from "../../../public/law b.jpg";

const STEPS = [
  {
    number: "01",
    title: "Share Your Enquiry",
    description:
      "Tell us about your area of interest and what you're looking to discuss, using our consultation form or by contacting us directly.",
    image: p1Img,
    offset: true,
  },
  {
    number: "02",
    title: "We Connect You With the Right Team",
    description:
      "Your enquiry is reviewed and routed to the relevant ASLPC division — research, policy, governance, the Academy or sport for development.",
    image: p2Img,
    offset: false,
  },
  {
    number: "03",
    title: "Begin Working Together",
    description:
      "From there, we schedule a conversation and work out the right next step — whether that's a partnership, training or advisory engagement.",
    image: p3Img,
    offset: true,
  },
];

export function EngagementProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function update() {
      ticking = false;
      const section = sectionRef.current;
      const layer = parallaxRef.current;
      if (!section || !layer) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      const offset = (progress - 0.5) * 70;
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
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
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-paper py-20 lg:py-28">
      <div ref={parallaxRef} className="absolute -inset-y-24 inset-x-0 -z-10 will-change-transform">
        <div className="animate-bg-zoom absolute inset-0">
          <Image src={lawBImg} alt="" fill sizes="100vw" className="object-cover" />
        </div>
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <svg aria-hidden viewBox="0 0 40 40" className="h-10 w-10 text-paper drop-shadow-[0_1px_3px_rgba(23,37,50,0.5)]">
            <path
              d="M8 20a12 12 0 0 1 24 0M8 20v7a3 3 0 0 0 3 3h1v-10H9a1 1 0 0 0-1 1v-1zM32 20v7a3 3 0 0 1-3 3h-1v-10h3a1 1 0 0 1 1 1v-1z"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mx-auto mt-4 max-w-2xl rounded-2xl border border-paper/60 bg-paper/80 px-8 py-10 text-center shadow-[0_20px_60px_-20px_rgba(23,37,50,0.35)] backdrop-blur-md sm:px-14 sm:py-12">
          <p className="text-xs font-bold tracking-[0.2em] text-ink uppercase">Get In Touch</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">Write To Us Directly</h2>
          <Link
            href={`mailto:${SITE.contactEmail}`}
            className="mt-2 inline-block font-serif text-2xl text-accent-dark italic transition-colors hover:text-accent sm:text-3xl"
          >
            {SITE.contactEmail}
          </Link>

          <p className="mt-6 font-serif text-lg text-ink">Or</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Schedule A <em className="text-accent-dark italic">Consultation</em>
          </h2>
        </div>

        <div className="relative mt-28 sm:mt-32">
          <svg
            aria-hidden
            viewBox="0 0 800 200"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-16 hidden h-40 w-full text-paper sm:block"
          >
            <path
              d="M110,150 C220,60 320,20 400,60 C480,20 580,60 690,150"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="7 7"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid gap-16 sm:grid-cols-3 sm:gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-center text-center ${step.offset ? "sm:mt-20" : ""}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-16 left-1/2 -z-10 font-serif text-8xl font-bold text-paper/50 select-none sm:text-9xl"
                  style={{ transform: "translateX(-50%) rotate(-10deg)" }}
                >
                  {step.number}
                </span>

                <div className="group relative flex h-40 w-40 items-center justify-center sm:h-44 sm:w-44">
                  <div
                    aria-hidden
                    className="animate-ring-spin absolute -inset-3 scale-75 rounded-full border-2 border-dashed border-accent opacity-0 transition-[opacity,scale] duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
                  />
                  <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-accent">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="176px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="mt-7 rounded-xl border border-paper/60 bg-paper/80 px-5 py-4 shadow-[0_12px_30px_-12px_rgba(23,37,50,0.3)] backdrop-blur-md">
                  <h3 className="font-serif text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-64 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
