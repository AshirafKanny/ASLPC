import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { PILLARS, SITE } from "@/lib/constants";
import { ContactForm } from "./contact-form";
import contactImg from "../../../public/contact2.jpg";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the African Sports Law and Policy Centre.",
};

function param(searchParams: Record<string, string | string[] | undefined>, key: string) {
  const value = searchParams[key];
  return typeof value === "string" ? value.slice(0, 100) : "";
}

// Turns the home page "Request a Consultation" selections into a starting message.
function consultationMessage(searchParams: Record<string, string | string[] | undefined>) {
  const area = PILLARS.find((p) => p.slug === param(searchParams, "area"))?.label;
  const type = param(searchParams, "type");
  const date = param(searchParams, "date");
  const time = param(searchParams, "time");
  if (!area && !type) return "";

  const lines = ["I would like to request a consultation."];
  if (area) lines.push(`Area of interest: ${area}`);
  if (type) lines.push(`Enquiry type: ${type}`);
  if (date) lines.push(`Preferred date: ${date}`);
  if (time) lines.push(`Preferred time: ${time}`);
  return `${lines.join("\n")}\n\n`;
}

export default async function ContactPage(props: PageProps<"/contact">) {
  const searchParams = await props.searchParams;
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact ASLPC"
        description="For research collaboration, policy engagement, training enquiries or media requests."
        image={contactImg}
        imageAlt="A monochrome yellow desk scene with a rotary telephone, notebook and stationery"
        imagePosition="60% 60%"
      />
      <section className="py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <ContactForm defaultMessage={consultationMessage(searchParams)} />

          <div className="flex flex-col gap-6 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <div>
              <p className="text-xs font-semibold tracking-wide text-ink uppercase">Location</p>
              <p className="mt-2 text-sm text-muted">{SITE.locationLabel}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-ink uppercase">General Enquiries</p>
              <p className="mt-2 text-sm text-muted">{SITE.contactEmail}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
