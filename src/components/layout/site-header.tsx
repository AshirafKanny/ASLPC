"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { getLenis } from "@/components/motion/smooth-scroll";
import { PRIMARY_NAV, SITE, type NavGroup } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HOVER_CLOSE_DELAY_MS = 150;
const SCROLL_THRESHOLD = 24;
const DESKTOP_QUERY = "(min-width: 1024px)";

function basePath(href: string) {
  return href.split("?")[0];
}

function matches(pathname: string, href: string) {
  const base = basePath(href);
  return pathname === base || (base !== "/" && pathname.startsWith(`${base}/`));
}

/**
 * The single item in a group that represents the current page: the longest matching path,
 * ignoring query-string variants (e.g. "Policy Briefs") so only one item is ever marked.
 */
function activeItemHref(group: NavGroup, pathname: string) {
  let best: string | null = null;
  for (const item of group.items) {
    if (item.href.includes("?") || !matches(pathname, item.href)) continue;
    if (!best || basePath(item.href).length > basePath(best).length) best = item.href;
  }
  return best;
}

function isGroupActive(group: NavGroup, pathname: string) {
  if (group.href && matches(pathname, group.href)) return true;
  return group.items.some((item) => matches(pathname, item.href));
}

function groupId(label: string) {
  return `nav-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close any open menu once navigation lands on a new page.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenGroup(null);
    setMobileOpen(false);
  }

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
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (openGroup) {
        triggerRefs.current[openGroup]?.focus();
        setOpenGroup(null);
      } else if (mobileOpen) {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openGroup, mobileOpen]);

  // The mobile menu is replaced by the desktop nav at the lg breakpoint.
  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    function onChange(event: MediaQueryListEvent) {
      if (event.matches) setMobileOpen(false);
    }
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Freeze the page behind the open mobile menu (both Lenis and native scrolling).
  useEffect(() => {
    if (!mobileOpen) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    getLenis()?.stop();
    return () => {
      root.style.overflow = previousOverflow;
      getLenis()?.start();
    };
  }, [mobileOpen]);

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

  function onGroupBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenGroup(null);
  }

  function onTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, label: string) {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    openGroupNow(label);
    // The panel is always mounted, so its first link can take focus once it becomes visible.
    requestAnimationFrame(() => {
      document.querySelector<HTMLAnchorElement>(`#${groupId(label)} a`)?.focus();
    });
  }

  function toggleMobile() {
    if (mobileOpen) {
      setMobileOpen(false);
      return;
    }
    const current = PRIMARY_NAV.find((group) => group.items.length > 0 && isGroupActive(group, pathname));
    setMobileOpenGroup(current?.label ?? null);
    setMobileOpen(true);
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b border-line-on-ink bg-ink transition-shadow duration-300",
        scrolled && "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-300 ease-out",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link href="/" aria-label={`${SITE.shortName} home`} className="flex items-center gap-3">
            <LogoMark size={scrolled ? 48 : 60} priority />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-medium text-paper">{SITE.shortName}</span>
              <span className="hidden text-[11px] tracking-wide text-paper/50 sm:block">
                African Sports Law &amp; Policy Centre
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 border-l border-paper/15 pl-8 lg:flex">
            {PRIMARY_NAV.map((group) => {
              const groupActive = isGroupActive(group, pathname);
              const underline =
                "after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-300";

              if (group.items.length === 0 && group.href) {
                return (
                  <Link
                    key={group.label}
                    href={group.href}
                    aria-current={groupActive ? "page" : undefined}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper",
                      underline,
                      groupActive ? "text-paper after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                    )}
                  >
                    {group.label}
                  </Link>
                );
              }

              const isOpen = openGroup === group.label;
              const currentHref = activeItemHref(group, pathname);
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => openGroupNow(group.label)}
                  onMouseLeave={scheduleClose}
                  onBlur={onGroupBlur}
                >
                  <button
                    ref={(el) => {
                      triggerRefs.current[group.label] = el;
                    }}
                    type="button"
                    onClick={() => openGroupNow(isOpen ? null : group.label)}
                    onKeyDown={(event) => onTriggerKeyDown(event, group.label)}
                    aria-expanded={isOpen}
                    aria-controls={groupId(group.label)}
                    className={cn(
                      "relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper",
                      underline,
                      groupActive ? "text-paper after:scale-x-100" : "after:scale-x-0",
                      isOpen && "text-paper",
                    )}
                  >
                    {group.label}
                    <svg
                      aria-hidden
                      viewBox="0 0 10 6"
                      className={cn("h-1.5 w-2.5 transition-transform duration-200", isOpen && "rotate-180")}
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>

                  <div
                    id={groupId(group.label)}
                    className={cn(
                      "absolute top-full left-0 w-64 border border-line-on-ink bg-ink py-2 shadow-[0_16px_32px_-16px_rgba(0,0,0,0.4)] transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none",
                      isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    {group.items.map((item) => {
                      const itemActive = item.href === currentHref;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpenGroup(null)}
                          aria-current={itemActive ? "page" : undefined}
                          className={cn(
                            "block border-l-2 px-4 py-2.5 text-sm transition-colors hover:bg-ink-soft hover:text-accent focus-visible:bg-ink-soft focus-visible:text-accent focus-visible:outline-none",
                            itemActive ? "border-accent text-accent" : "border-transparent text-paper/75",
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 border-l border-paper/15 pl-6 lg:flex">
            <Link
              href="/search"
              aria-label="Search"
              aria-current={pathname === "/search" ? "page" : undefined}
              className={cn(
                "flex h-9 w-9 items-center justify-center transition-colors hover:text-paper",
                pathname === "/search" ? "text-accent" : "text-paper/70",
              )}
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
            ref={mobileToggleRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center text-paper lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobile}
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

      <div
        id="mobile-menu"
        data-lenis-prevent
        className={cn(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-line-on-ink bg-ink shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none lg:hidden",
          mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <Container className="py-4">
          <nav aria-label="Mobile" className="flex flex-col divide-y divide-line-on-ink">
            {PRIMARY_NAV.map((group) => {
              const groupActive = isGroupActive(group, pathname);
              if (group.items.length === 0 && group.href) {
                return (
                  <Link
                    key={group.label}
                    href={group.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={groupActive ? "page" : undefined}
                    className={cn(
                      "py-3.5 text-xs font-semibold tracking-[0.14em] uppercase",
                      groupActive ? "text-accent" : "text-paper/80",
                    )}
                  >
                    {group.label}
                  </Link>
                );
              }

              const isOpen = mobileOpenGroup === group.label;
              const currentHref = activeItemHref(group, pathname);
              return (
                <div key={group.label}>
                  <button
                    type="button"
                    onClick={() => setMobileOpenGroup(isOpen ? null : group.label)}
                    aria-expanded={isOpen}
                    aria-controls={`${groupId(group.label)}-mobile`}
                    className="flex w-full items-center justify-between gap-4 py-3.5 text-left"
                  >
                    <span
                      className={cn(
                        "text-xs font-semibold tracking-[0.14em] uppercase",
                        groupActive ? "text-accent" : "text-paper/80",
                      )}
                    >
                      {group.label}
                    </span>
                    <svg
                      aria-hidden
                      viewBox="0 0 10 6"
                      className={cn("h-2 w-3 shrink-0 text-paper/50 transition-transform duration-200", isOpen && "rotate-180")}
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div
                    id={`${groupId(group.label)}-mobile`}
                    className={cn(
                      "grid transition-[grid-template-rows,visibility] duration-200 ease-out motion-reduce:transition-none",
                      isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col pb-3">
                        {group.items.map((item) => {
                          const itemActive = item.href === currentHref;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              aria-current={itemActive ? "page" : undefined}
                              className={cn(
                                "border-l-2 py-2.5 pl-3 text-sm",
                                itemActive ? "border-accent text-accent" : "border-transparent text-paper/80",
                              )}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <div className="mt-4 grid grid-cols-[auto_1fr] gap-3">
            <Link
              href="/search"
              onClick={() => setMobileOpen(false)}
              aria-label="Search"
              className="flex h-12 w-12 items-center justify-center border border-paper/30 text-paper"
            >
              <svg aria-hidden viewBox="0 0 20 20" className="h-4.5 w-4.5">
                <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <path d="M14 14l4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex h-12 items-center justify-center bg-accent px-4 text-sm font-medium text-ink"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </div>
      <ScrollProgress />
    </header>
  );
}
