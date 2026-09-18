import { Container } from "@/components/ui/container";

export function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
          {children}
        </div>
      </Container>
    </section>
  );
}
