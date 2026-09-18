import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="border-t border-line bg-ink text-paper">
      <Container className="flex flex-col items-start gap-8 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            Partner with ASLPC
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/70">
            We work with governments, federations, universities and international
            organisations to strengthen sports law, policy and governance across Africa.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href="/contact" variant="on-ink">
            Start a Conversation
          </Button>
          <Button href="/about/partnerships" variant="ghost" className="text-paper hover:text-accent">
            Our Partnerships →
          </Button>
        </div>
      </Container>
    </section>
  );
}
