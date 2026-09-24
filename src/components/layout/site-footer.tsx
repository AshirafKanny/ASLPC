import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo";
import { Reveal } from "@/components/motion/reveal";
import { FooterSparkles } from "@/components/sections/footer-sparkles";
import { FOOTER_NAV, SITE } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-line-on-ink bg-ink text-paper">
      <FooterSparkles />

      <Reveal>
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <LogoMark size={56} />
            <p className="mt-5 max-w-sm font-serif text-xl leading-snug text-paper">
              {SITE.name}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              {SITE.description}
            </p>
            <p className="mt-6 text-sm text-paper/50">{SITE.locationLabel}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_NAV.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold tracking-[0.14em] text-paper/40 uppercase">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-paper/75 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-on-ink pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.shortName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-paper/70">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
      </Reveal>
    </footer>
  );
}
