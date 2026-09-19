"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import faq1 from "../../../public/faq1.jpg";
import faq2 from "../../../public/faq2.jpg";
import faq3 from "../../../public/faq3.jpg";

const FAQS = [
  {
    question: "What is the African Sports Law and Policy Centre?",
    answer:
      "ASLPC is an independent African research, policy and knowledge institution dedicated to sports law, sports governance, sports policy and sport for development. Based in Uganda, it generates evidence, supports institutional reform and builds professional capacity across the continent's sports sector.",
  },
  {
    question: "Is ASLPC a government body, law firm or university?",
    answer:
      "No. ASLPC is not a university department, law firm, sports federation or government agency. It maintains its own institutional identity, governance, research agenda and intellectual independence, while building affiliations with all of these types of institutions.",
  },
  {
    question: "What does the ASLPC Academy offer?",
    answer:
      "The ASLPC Academy delivers short courses, executive workshops and seminars in sports law, governance, athlete rights, contracts, intellectual property, integrity and dispute resolution — for federation officials, club administrators, coaches, athletes, lawyers, government officials and students.",
  },
  {
    question: "How can my organisation partner with ASLPC?",
    answer:
      "ASLPC builds structured relationships with government, sports bodies, legal and dispute-resolution institutions, universities, development partners, the private sector and civil society. Visit our Partnerships page or get in touch directly to discuss how your organisation could work with the Centre.",
  },
  {
    question: "Where is ASLPC based, and does it work across Africa?",
    answer:
      "ASLPC begins with a firm base in Uganda and East Africa, where its founding research, partnerships and programming are concentrated, before progressively developing a continental and international footprint through research networks, comparative publications and regional partnerships.",
  },
  {
    question: "How is ASLPC funded, and does that affect its independence?",
    answer:
      "ASLPC pursues a diversified funding model combining public-interest grants with income-generating activities such as training and advisory services. No single donor, sponsor or government relationship is permitted to constitute more than a defined share of the Centre's income, which preserves its editorial and institutional independence.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-paper py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-4">
            <div className="relative h-64 overflow-hidden sm:h-80">
              <Image
                src={faq1}
                alt="A consultation between two colleagues reviewing documents in an office"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 overflow-hidden sm:h-64">
                <Image
                  src={faq2}
                  alt="A professional taking a call at his desk"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden sm:h-64">
                <Image
                  src={faq3}
                  alt="Colleagues in discussion in an office setting"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              Our <em className="text-accent-dark italic">Expert</em> Answers
            </h2>

            <div className="mt-8 divide-y divide-line border-t border-line">
              {FAQS.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-serif text-base text-accent-dark">{i + 1}.</span>
                        <span className="font-serif text-lg leading-snug text-ink">{item.question}</span>
                      </span>
                      <svg
                        aria-hidden
                        viewBox="0 0 10 6"
                        className={cn("mt-2 h-2 w-3 shrink-0 text-ink/60 transition-transform", isOpen && "rotate-180")}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                      </svg>
                    </button>
                    {isOpen ? (
                      <p className="max-w-xl pb-6 pl-7 text-sm leading-relaxed text-muted">{item.answer}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-6 bg-surface p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-serif text-xl text-ink">Still Have Questions?</h3>
                <p className="mt-2 text-sm text-muted">Reach out directly and the Centre will respond.</p>
              </div>
              <Button
                href="/contact"
                className="shrink-0 shadow-[6px_6px_0_0_rgba(184,144,60,0.4)] transition-all duration-300 hover:shadow-none"
              >
                Send Enquiry →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
