import Image from "next/image";
import { Container } from "@/components/ui/container";
import f1 from "../../../public/f1.jpg";
import f2 from "../../../public/f2.jpg";
import f3 from "../../../public/f3.jpg";
import f4 from "../../../public/f4.jpg";
import f5 from "../../../public/f5.jpg";
import f6 from "../../../public/f6.jpg";

const IMAGES = [f1, f2, f3, f4, f5, f6];

export function InstagramFeed() {
  return (
    <section className="relative overflow-hidden bg-surface pt-20 pb-1 lg:pt-24">
      <Container className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-ink uppercase">Our Instagram</p>
          <h2 className="relative mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="pointer-events-none absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 text-ink/5 select-none sm:h-36 sm:w-36"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.4" fill="none" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" fill="none" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
            <span className="relative">
              Follow <span className="text-accent-dark">@ASLPC</span>
            </span>
          </h2>
        </div>
      </Container>

      <div className="mt-14 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
        {IMAGES.map((image, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/60" />
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="pointer-events-none absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-75 text-paper opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" fill="none" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" fill="none" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
