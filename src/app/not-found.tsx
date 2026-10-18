import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const SUGGESTIONS = [
  { label: "About ASLPC", href: "/about" },
  { label: "Insights & Articles", href: "/insights" },
  { label: "Our Work: Research", href: "/research" },
  { label: "Events", href: "/events" },
];

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-7xl font-semibold text-accent sm:text-8xl">404</p>
          <h1 className="mt-6 font-serif text-3xl leading-tight font-semibold text-ink sm:text-4xl">
            This page could not be <span className="text-accent-dark">found</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The link may be out of date, or the page may have moved. Try one of these instead, or search the site.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/">Go to the home page</Button>
            <Button href="/search" variant="secondary">
              Search the site
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-line pt-8 text-sm">
            {SUGGESTIONS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-accent-dark underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
