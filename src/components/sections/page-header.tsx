import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition,
  overlay = "strong",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: StaticImageData;
  imageAlt?: string;
  imagePosition?: string;
  overlay?: "strong" | "light" | "none";
}) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 -z-10">
          <div className="animate-bg-zoom absolute inset-0">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
            />
          </div>
          {overlay !== "none" ? (
            <>
              <div className={cn("absolute inset-0", overlay === "light" ? "bg-ink/30" : "bg-ink/70")} />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t",
                  overlay === "light" ? "from-ink/85 via-ink/15 to-transparent" : "from-ink via-ink/35 to-ink/55",
                )}
              />
            </>
          ) : null}
        </div>

        <Container className="relative py-28 lg:py-36">
          <Reveal>
            {eyebrow ? <Eyebrow tone="on-ink">{eyebrow}</Eyebrow> : null}
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-paper sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">{description}</p>
            ) : null}
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-16 lg:py-20">
        <Reveal>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
