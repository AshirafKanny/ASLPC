import Image from "next/image";
import { PortableText, type PortableTextComponents, type PortableTextBlock } from "next-sanity";

type BodyImage = {
  alt?: string;
  caption?: string;
  src?: string;
  lqip?: string;
  dimensions?: { width: number; height: number };
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2 className="pt-4 font-serif text-2xl leading-snug font-semibold text-ink sm:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="pt-2 font-serif text-xl leading-snug font-semibold text-ink">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent pl-6 font-serif text-xl leading-relaxed text-ink italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6 marker:text-accent">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-2 pl-6 marker:text-accent-dark">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href) && !href.startsWith("https://aslpc.org");
      return (
        <a
          href={href}
          className="text-accent-dark underline decoration-accent/50 underline-offset-2 transition-colors hover:text-ink"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: BodyImage }) => {
      if (!value.src || !value.dimensions) return null;
      return (
        <figure className="py-4">
          <Image
            src={value.src}
            alt={value.alt ?? ""}
            width={value.dimensions.width}
            height={value.dimensions.height}
            sizes="(min-width: 1024px) 768px, 100vw"
            placeholder={value.lqip ? "blur" : "empty"}
            blurDataURL={value.lqip}
            className="h-auto w-full"
          />
          {value.caption ? <figcaption className="mt-3 text-sm text-muted">{value.caption}</figcaption> : null}
        </figure>
      );
    },
  },
};

/** Renders an article's rich text from the Studio in the site's editorial style. */
export function ArticleBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-muted">
      <PortableText value={value} components={components} />
    </div>
  );
}
