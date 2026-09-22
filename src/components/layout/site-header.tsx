"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { PRIMARY_NAV, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HOVER_CLOSE_DELAY_MS = 150;
const SCROLL_THRESHOLD = 24;

export function SiteHeader() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    let ticking = false;
    function update() {
      ticking = false;
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  function openGroupNow(label: string | null) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenGroup(label);
  }

  function scheduleClose() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setOpenGroup(null), HOVER_CLOSE_DELAY_MS);
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b border-line-on-ink bg-ink transition-shadow duration-300",
        scrolled && "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-300 ease-out",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <LogoMark size={scrolled ? 48 : 60} priority />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-medium text-paper">{SITE.shortName}</span>
              <span className="hidden text-[11px] tracking-wide text-paper/50 sm:block">
                African Sports Law &amp; Policy Centre
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 border-l border-paper/15 pl-8 lg:flex">
            {PRIMARY_NAV.map((group) =>
              group.items.length === 0 && group.href ? (
                <Link
                  key={group.label}
                  href={group.href}
                  className="px-4 py-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
                >
                  {group.label}
                </Link>
              ) : (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => openGroupNow(group.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    onClick={() => openGroupNow(openGroup === group.label ? null : group.label)}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper",
                      openGroup === group.label && "text-paper",
                    )}
                    aria-expanded={openGroup === group.label}
                  >
                    {group.label}
                    <svg
                      aria-hidden
                      viewBox="0 0 10 6"
                      className={cn("h-1.5 w-2.5 transition-transform", openGroup === group.label && "rotate-180")}
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>

                  {openGroup === group.label ? (
                    <div className="absolute top-full left-0 w-64 border border-line-on-ink bg-ink py-2 shadow-[0_16px_32px_-16px_rgba(0,0,0,0.4)]">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpenGroup(null)}
                          className="block px-4 py-2.5 text-sm text-paper/75 transition-colors hover:bg-ink-soft hover:text-accent"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-4 border-l border-paper/15 pl-6 lg:flex">
            <Link
              href="/search"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center text-paper/70 transition-colors hover:text-paper"
            >
              <svg aria-hidden viewBox="0 0 20 20" className="h-4.5 w-4.5">
                <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <path d="M14 14l4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border border-paper/30 px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-paper lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileOpenGroup(null);
            }}
          >
            <svg aria-hidden viewBox="0 0 22 16" className="h-4 w-5.5">
              <path
                d={mobileOpen ? "M1 1l20 14M21 1L1 15" : "M0 1h22M0 8h22M0 15h22"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-line-on-ink bg-ink lg:hidden">
          <Container className="py-4">
            <div className="flex flex-col divide-y divide-line-on-ink">
              {PRIMARY_NAV.map((group) =>
                group.items.length === 0 && group.href ? (
                  <Link
                    key={group.label}
                    href={group.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-xs font-semibold tracking-[0.14em] text-paper/80 uppercase"
                  >
                    {group.label}
                  </Link>
                ) : (
                  <div key={group.label} className="py-1">
                    <button
                      type="button"
                      onClick={() => setMobileOpenGroup(mobileOpenGroup === group.label ? null : group.label)}
                      aria-expanded={mobileOpenGroup === group.label}
                      className="flex w-full items-center justify-between gap-4 py-3 text-left"
                    >
                      <span className="text-xs font-semibold tracking-[0.14em] text-paper/80 uppercase">
                        {group.label}
                      </span>
                      <svg
                        aria-hidden
                        viewBox="0 0 10 6"
                        className={cn(
                          "h-2 w-3 shrink-0 text-paper/50 transition-transform",
                          mobileOpenGroup === group.label && "rotate-180",
                        )}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                      </svg>
                    </button>
                    {mobileOpenGroup === group.label ? (
                      <div className="flex flex-col gap-1 pb-3">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-1.5 text-sm text-paper/80"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ),
              )}
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block border border-paper/30 px-4 py-3 text-center text-sm font-medium text-paper"
            >
              Get in Touch
            </Link>
          </Container>
        </div>
      ) : null}
      <ScrollProgress />
    </header>
  );
}
