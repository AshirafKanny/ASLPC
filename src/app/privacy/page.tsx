import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import privacyImg from "../../../public/privacy.jpg";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ASLPC collects, uses, discloses and safeguards personal data across its website and programmes.",
};

const EFFECTIVE_DATE = "2026-09-24";

const h2 = "font-serif text-2xl leading-tight font-semibold text-ink";
const body = "mt-4 space-y-4 text-base leading-relaxed text-muted";
const list = "list-disc space-y-2 pl-5";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How ASLPC collects, uses, discloses and safeguards personal data across its website and institutional activities."
        image={privacyImg}
        imageAlt="Hands typing on a laptop keyboard overlaid with data-security and privacy icons"
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
                    The African Sports Law and Policy Centre (ASLPC) is committed to protecting the privacy and
                    personal data of all individuals who interact with our website, programs, research platforms and
                    institutional activities.
                  </p>
                  <p>
                    As an independent African research, policy and knowledge institution dedicated to sports law,
                    governance, policy development and sport for development, ASLPC recognises the importance of
                    handling personal data responsibly, transparently and in accordance with applicable data
                    protection laws and international best practices.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, disclose and safeguard your information when
                    you visit our website or engage with our services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className={h2}>2. Information We Collect</h2>
                <div className={body}>
                  <p>We may collect and process the following categories of information:</p>

                  <p className="font-medium text-ink">2.1 Personal Information</p>
                  <ul className={list}>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Organisation or institutional affiliation</li>
                    <li>Professional title</li>
                  </ul>

                  <p className="font-medium text-ink">2.2 Technical Information</p>
                  <ul className={list}>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device type</li>
                    <li>Pages visited and interaction data</li>
                    <li>Date and time of access</li>
                  </ul>

                  <p className="font-medium text-ink">2.3 Content and Engagement Data</p>
                  <ul className={list}>
                    <li>Information submitted through contact forms</li>
                    <li>Event registrations</li>
                    <li>Training program applications</li>
                    <li>Newsletter subscriptions</li>
                    <li>Research submissions or inquiries</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className={h2}>3. How We Use Your Information</h2>
                <div className={body}>
                  <p>ASLPC uses collected information to:</p>
                  <ul className={list}>
                    <li>Provide and manage our website and digital platforms</li>
                    <li>Respond to inquiries and communication requests</li>
                    <li>Administer events, conferences and training programs</li>
                    <li>Disseminate research, publications and institutional updates</li>
                    <li>Improve user experience and website performance</li>
                    <li>Support policy engagement and institutional collaboration</li>
                    <li>Maintain internal records and administrative functions</li>
                  </ul>
                  <p>We process personal data only where there is a lawful basis to do so.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>4. Data Sharing and Disclosure</h2>
                <div className={body}>
                  <p>ASLPC does not sell, rent or trade personal data.</p>
                  <p>We may share information in the following circumstances:</p>
                  <ul className={list}>
                    <li>With trusted service providers supporting website hosting, analytics or communication</li>
                    <li>With institutional partners where necessary for joint programs or events</li>
                    <li>When required by law, regulation or legal process</li>
                    <li>To protect the rights, safety and integrity of ASLPC and its stakeholders</li>
                  </ul>
                  <p>All third-party service providers are required to maintain appropriate data protection standards.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>5. Data Security</h2>
                <div className={body}>
                  <p>
                    We implement appropriate technical and organisational measures to protect personal data against
                    unauthorised access, loss, misuse or alteration.
                  </p>
                  <p>These measures include:</p>
                  <ul className={list}>
                    <li>Secure hosting environments</li>
                    <li>Access controls and authentication systems</li>
                    <li>Regular system monitoring</li>
                    <li>Data minimisation practices</li>
                  </ul>
                  <p>While we take reasonable steps to protect data, no system is completely secure.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>6. Data Retention</h2>
                <div className={body}>
                  <p>We retain personal data only for as long as necessary to:</p>
                  <ul className={list}>
                    <li>Fulfil the purposes outlined in this policy</li>
                    <li>Comply with legal and regulatory obligations</li>
                    <li>Support institutional, research and programmatic activities</li>
                  </ul>
                  <p>When data is no longer required, it is securely deleted or anonymised.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>7. Your Rights</h2>
                <div className={body}>
                  <p>Depending on applicable laws, you may have the right to:</p>
                  <ul className={list}>
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to or restrict processing</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                  <p>Requests may be submitted using the contact details below.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>8. Cookies and Tracking Technologies</h2>
                <div className={body}>
                  <p>Our website may use cookies and similar technologies to:</p>
                  <ul className={list}>
                    <li>Enhance user experience</li>
                    <li>Analyse website traffic and performance</li>
                    <li>Understand user behaviour</li>
                  </ul>
                  <p>Users may control cookie preferences through their browser settings.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>9. Third-Party Links</h2>
                <div className={body}>
                  <p>Our website may contain links to external websites.</p>
                  <p>ASLPC is not responsible for the privacy practices or content of those third-party platforms.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>10. International Data Transfers</h2>
                <div className={body}>
                  <p>
                    As an institution engaging with regional and international partners, data may be processed or
                    stored outside your jurisdiction.
                  </p>
                  <p>In such cases, ASLPC ensures appropriate safeguards are in place to protect personal data.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>11. Updates to This Policy</h2>
                <div className={body}>
                  <p>
                    ASLPC may update this Privacy Policy from time to time to reflect changes in legal, operational
                    or technological developments.
                  </p>
                  <p>Updates will be published on this page with a revised effective date.</p>
                </div>
              </div>

              <div>
                <h2 className={h2}>12. Contact Information</h2>
                <div className={body}>
                  <p>
                    For any questions, concerns or requests regarding this Privacy Policy or your personal data,
                    please contact:
                  </p>
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
                <h2 className={h2}>13. Institutional Commitment</h2>
                <div className={body}>
                  <p>
                    ASLPC is committed to maintaining the highest standards of integrity, transparency and
                    accountability in all its operations, including the responsible management of personal data in
                    support of its mission to advance sports law, governance, policy and development across Africa.
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
