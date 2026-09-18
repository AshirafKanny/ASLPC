import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-16 lg:py-20">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
