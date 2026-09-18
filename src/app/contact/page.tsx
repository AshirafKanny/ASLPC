import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the African Sports Law and Policy Centre.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact ASLPC"
        description="For research collaboration, policy engagement, training enquiries or media requests."
      />
      <section className="py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold tracking-wide text-ink uppercase">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold tracking-wide text-ink uppercase">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold tracking-wide text-ink uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-ink"
              />
            </div>
            <button
              type="submit"
              className="mt-2 self-start bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-6 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <div>
              <p className="text-xs font-semibold tracking-wide text-ink uppercase">Location</p>
              <p className="mt-2 text-sm text-muted">{SITE.locationLabel}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-ink uppercase">General Enquiries</p>
              <p className="mt-2 text-sm text-muted">info@aslpc.org</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
