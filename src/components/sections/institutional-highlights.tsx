"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import squareImg from "../../../public/small hero img.jpg";
import justiceImg from "../../../public/law monument full aslpc.webp";
import missionImg from "../../../public/business-lawyers.webp";
import visionImg from "../../../public/hero/governance-lawyers.webp";

type TabKey = "mission-vision" | "values" | "partnerships" | "roadmap";

const TABS: { key: TabKey; label: string }[] = [
  { key: "mission-vision", label: "Mission & Vision" },
  { key: "values", label: "Core Values" },
  { key: "partnerships", label: "Partnerships" },
  { key: "roadmap", label: "Growth Roadmap" },
];

const VALUES = [
  {
    title: "Integrity & Accountability",
    description: "Honesty, ethical conduct, transparency and accountability in our research, advice, partnerships and operations.",
  },
  {
    title: "Independence & African Ownership",
    description: "Protecting our intellectual and institutional independence while advancing African expertise and leadership.",
  },
  {
    title: "Excellence & Evidence",
    description: "Grounding our analysis and recommendations in evidence, law, data and comparative experience.",
  },
  {
    title: "Inclusion, Equality & Human Dignity",
    description: "Ensuring athletes, women, youth, persons with disabilities and marginalised communities are heard and benefit from sport.",
  },
  {
    title: "Impact & Transformation",
    description: "Measuring success by contribution to better governance, stronger institutions and meaningful community outcomes.",
  },
];

const PARTNERSHIP_CATEGORIES = [
  { title: "Government", examples: "Ministries and national sports regulators" },
  { title: "Sports bodies", examples: "Federations, Olympic Committee, Anti-Doping Organisation" },
  { title: "Legal & dispute-resolution", examples: "Judiciary, Law Society, Court of Arbitration for Sport" },
  { title: "Universities & research", examples: "Law faculties and sports-law research networks" },
  { title: "Development & international", examples: "Commonwealth Secretariat, UNESCO, UN agencies" },
  { title: "Private sector & media", examples: "Law firms, sponsors, broadcasters, technology companies" },
  { title: "Civil society & communities", examples: "Athletes, youth and community organisations" },
];

const ROADMAP = [
  {
    title: "Phase I   Establishment and Foundation",
    description:
      "Legal establishment and governance structures; core staffing; the first research agenda; a website and digital identity; initial partnerships with Uganda Pentecostal University's Faculty of Law and government; and a public launch.",
  },
  {
    title: "Phase II   Expansion and Institutional Consolidation",
    description:
      "Launch of the ASLPC Academy's professional training; the first annual conference; the African Sports Governance Observatory; the Athlete Rights and Safeguarding Programme; and the first Sport for Development pilot partnerships.",
  },
  {
    title: "Phase III   Continental and International Expansion",
    description:
      "African research networks and continental programming; public launch of the African Sports Law Database; new international partnerships; accredited professional programmes; and regional programme hubs where justified by demand.",
  },
];

export function InstitutionalHighlights() {
  const [activeTab, setActiveTab] = useState<TabKey>("mission-vision");
  const [openPhase, setOpenPhase] = useState(0);

  return (
    <section className="border-t border-line py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 xl:grid-cols-[1fr_420px]">
          <div>
            <Reveal>
              <Eyebrow>Why ASLPC</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                Independence, Rigour &amp; <em className="text-accent-dark italic">Impact</em>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                ASLPC is an independent African research, policy and knowledge institution working at the
                intersection of sports law, governance, policy and sport for development. Explore what shapes our
                work   our mission and vision, the values that guide us, the partners we work with, and the path we
                are building toward a continental institution.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-3">
              {TABS.map((tab) => {
                const isActive = tab.key === activeTab;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    aria-pressed={isActive}
                    className="group relative flex h-11 min-w-40 items-center justify-center overflow-hidden border border-ink/20 px-5 text-center transition-colors duration-300 sm:h-13"
                  >
                    <Image
                      src={squareImg}
                      alt=""
                      fill
                      sizes="200px"
                      className={cn(
                        "object-cover transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute inset-0 bg-ink/70 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                      )}
                    />
                    <span
                      className={cn(
                        "relative z-10 text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-300",
                        isActive ? "text-paper" : "text-ink group-hover:text-paper",
                      )}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-16 border-t border-line pt-12">
              {activeTab === "mission-vision" ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative h-80 overflow-hidden">
                    <Image src={missionImg} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-serif text-xl text-paper">Our Mission</h3>
                      <p className="mt-2 text-sm leading-relaxed text-paper/80">
                        ASLPC advances its vision through rigorous research, evidence-based policy development,
                        legal and institutional reform, professional capacity building, stakeholder engagement and
                        sport-for-development initiatives.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-80 overflow-hidden">
                    <Image src={visionImg} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-serif text-xl text-paper">Our Vision</h3>
                      <p className="mt-2 text-sm leading-relaxed text-paper/80">
                        A legally sound, well-governed, inclusive, commercially sustainable and socially
                        transformative African sports sector, where law, policy and evidence   not improvisation  
                        shape how sport is governed, protected, developed and harnessed for sustainable
                        development.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeTab === "values" ? (
                <div className="divide-y divide-line">
                  {VALUES.map((value, i) => (
                    <div key={value.title} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                      <span className="font-serif text-2xl text-accent-dark sm:w-16 sm:shrink-0">
                        #{i + 1}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-ink">{value.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab === "partnerships" ? (
                <div className="grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {PARTNERSHIP_CATEGORIES.map((category) => (
                    <div key={category.title} className="p-6">
                      <p className="font-serif text-base text-ink">{category.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{category.examples}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab === "roadmap" ? (
                <div className="divide-y divide-line border-t border-line">
                  {ROADMAP.map((phase, i) => {
                    const isOpen = openPhase === i;
                    return (
                      <div key={phase.title}>
                        <button
                          type="button"
                          onClick={() => setOpenPhase(isOpen ? -1 : i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 py-5 text-left"
                        >
                          <span className="font-serif text-lg text-ink">{phase.title}</span>
                          <svg
                            aria-hidden
                            viewBox="0 0 10 6"
                            className={cn("h-2 w-3 shrink-0 text-ink/60 transition-transform", isOpen && "rotate-180")}
                          >
                            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                          </svg>
                        </button>
                        {isOpen ? (
                          <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted">{phase.description}</p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <Reveal variant="scale">
                <Image
                  src={justiceImg}
                  alt="A statuette of Lady Justice with scales, a gavel and an open law book"
                  className="h-auto max-h-128 w-full object-contain"
                  sizes="420px"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
