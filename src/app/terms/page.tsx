import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import termsImg from "../../../public/tems1.jpg";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing access to and use of the ASLPC website and digital platforms.",
};

const EFFECTIVE_DATE = "2026-09-24";

const h2 = "font-serif text-2xl leading-tight font-semibold text-ink";
const body = "mt-4 space-y-4 text-base leading-relaxed text-muted";
const list = "list-disc space-y-2 pl-5";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms governing access to and use of the ASLPC website and digital platforms."
        image={termsImg}
        imageAlt="A person reviewing documents and files at a desk"
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="border-b border-line pb-8">
              <p className="text-sm font-semibold text-ink">African Sports Law and Policy Centre (ASLPC)</p>
              <p className="mt-1 text-sm text-muted">Effective Date: {formatDate(EFFECTIVE_DATE)}</p>
            </div>

            <div className="mt-12 space-y-12">
              <div>
                <h2 className={h2}>1. Introduction</h2>
                <div className={body}>
                  <p>
                    These Terms of Use govern access to and use of the website and digital platforms operated by the
                    African Sports Law and Policy Centre (ASLPC).
                  </p>
                  <p>
                    By accessing or using this website, you agree to comply with these Terms. If you do not agree,
                    you should not use the website.
                  </p>
                  <p>
                    ASLPC is an independent African research, policy and knowledge institution dedicated to sports
                    law, governance, policy development and sport for development, and this website is provided to
                    support its institutional, research, educational and engagement activities.
                  </p>
                </div>
              </div>

              <div>
                <h2 className={h2}>2. Use of the Website</h2>
                <div className={body}>
                  <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
                  <ul className={list}>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on the rights of others</li>
                    <li>Disrupt or interfere with the security or operation of the website</li>
                    <li>Attempt to gain unauthorised access to systems or data</li>
                  </ul>
                  <p>ASLPC reserves the right to restrict or terminate access where misuse is identified.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>3. Intellectual Property</h2>
                <div className={body}>
                  <p>All content on this website, including but not limited to:</p>
                  <ul className={list}>
                    <li>Research publications</li>
                    <li>Reports and policy briefs</li>
                    <li>Text, graphics and design</li>
                    <li>Logos, branding and visual identity</li>
                    <li>Databases and knowledge resources</li>
                  </ul>
                  <p>is the property of ASLPC or its licensors, unless otherwise stated.</p>
                  <p>
                    Content may be accessed for personal, academic or non-commercial use. Any reproduction,
                    distribution or commercial use without prior written consent is prohibited.
                  </p>
                  <p>Proper attribution to ASLPC must be provided when referencing its work.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>4. Research and Publications Disclaimer</h2>
                <div className={body}>
                  <p>The content published by ASLPC is intended for informational, research and policy purposes only.</p>
                  <p>
                    While the Centre seeks to ensure accuracy and rigor, it does not guarantee that all information
                    is complete, current or free from error.
                  </p>
                  <p>Nothing on this website constitutes:</p>
                  <ul className={list}>
                    <li>Legal advice</li>
                    <li>Professional advisory services</li>
                    <li>Official policy positions of any government or institution</li>
                  </ul>
                  <p>Users should seek independent professional advice where appropriate.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>5. External Links</h2>
                <div className={body}>
                  <p>This website may contain links to third-party websites or resources.</p>
                  <p>ASLPC does not control and is not responsible for:</p>
                  <ul className={list}>
                    <li>The content of external sites</li>
                    <li>Their availability</li>
                    <li>Their privacy practices</li>
                  </ul>
                  <p>Accessing third-party sites is at your own risk.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>6. Events, Training and Programs</h2>
                <div className={body}>
                  <p>Where applicable, the website may provide information on:</p>
                  <ul className={list}>
                    <li>Conferences</li>
                    <li>Workshops</li>
                    <li>Training programs</li>
                    <li>Policy dialogues</li>
                    <li>Institutional events</li>
                  </ul>
                  <p>
                    Participation in such activities may be subject to additional terms, conditions or registration
                    requirements, which will be communicated separately.
                  </p>
                  <p>ASLPC reserves the right to modify, postpone or cancel events where necessary.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>7. User Submissions</h2>
                <div className={body}>
                  <p>
                    If you submit information through the website (including inquiries, applications or research
                    contributions), you agree that:
                  </p>
                  <ul className={list}>
                    <li>The information provided is accurate and lawful</li>
                    <li>You have the right to share such information</li>
                    <li>ASLPC may use the information for institutional, administrative or communication purposes</li>
                  </ul>
                  <p>Personal data will be handled in accordance with the ASLPC Privacy Policy.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>8. Limitation of Liability</h2>
                <div className={body}>
                  <p>To the fullest extent permitted by law, ASLPC shall not be liable for any:</p>
                  <ul className={list}>
                    <li>Direct, indirect or consequential damages</li>
                    <li>Loss of data, opportunity or revenue</li>
                    <li>Disruption arising from use of the website</li>
                  </ul>
                  <p>This includes, but is not limited to:</p>
                  <ul className={list}>
                    <li>Reliance on website content</li>
                    <li>Temporary unavailability of the website</li>
                    <li>Technical issues or system interruptions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className={h2}>9. Availability and Modifications</h2>
                <div className={body}>
                  <p>ASLPC reserves the right to:</p>
                  <ul className={list}>
                    <li>Modify or discontinue any part of the website</li>
                    <li>Update content without prior notice</li>
                    <li>Revise these Terms of Use at any time</li>
                  </ul>
                  <p>Continued use of the website constitutes acceptance of any updates.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>10. Governing Law</h2>
                <div className={body}>
                  <p>
                    These Terms shall be governed by and interpreted in accordance with the laws of Uganda, unless
                    otherwise required by applicable international frameworks.
                  </p>
                </div>
              </div>

              <div>
                <h2 className={h2}>11. Contact Information</h2>
                <div className={body}>
                  <p>For any questions regarding these Terms of Use, please contact:</p>
                  <p>
                    <span className="font-medium text-ink">African Sports Law and Policy Centre (ASLPC)</span>
                    <br />
                    {SITE.locationLabel}
                  </p>
                  <p>
                    Email: {SITE.contactEmail}
                    <br />
                    Phone: [Insert Phone Number]
                  </p>
                </div>
              </div>

              <div>
                <h2 className={h2}>12. Institutional Integrity</h2>
                <div className={body}>
                  <p>
                    ASLPC is committed to maintaining high standards of integrity, independence and professionalism.
                    These Terms support the responsible use of its digital platforms in furtherance of its mission to
                    advance sports law, governance, policy and development across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
