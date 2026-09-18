import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="lg:col-span-8">
          <Eyebrow>{SITE.locationLabel} — Independent Research &amp; Policy Institution</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {SITE.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/research">Explore Our Research</Button>
            <Button href="/about" variant="secondary">
              About the Centre
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-6 border-t border-line pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <p className="text-sm leading-relaxed text-muted">
            ASLPC works across five interconnected pillars — research, policy, governance,
            capacity building and sport for development — to strengthen how sport is governed
            across the continent.
          </p>
          <Button href="/publications" variant="ghost" className="justify-start px-0">
            View Latest Publications →
          </Button>
        </div>
      </Container>
    </section>
  );
}
