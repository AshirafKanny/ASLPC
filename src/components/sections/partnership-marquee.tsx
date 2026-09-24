import { Fragment } from "react";

type PartnerCategory = {
  label: string;
  icon: (props: { className?: string }) => React.ReactElement;
};

/** Placeholder line-icons — swap each `icon` for the real artwork when it's provided. */
function GovernmentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 10v11M10 10v11M14 10v11M18 10v11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SportsBodyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 2l7 3v6c0 5-3 8.5-7 11-4-2.5-7-6-7-11V5l7-3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LegalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M8 20a12 12 0 0 1 24 0M8 20v7a3 3 0 0 0 3 3h1v-10H9a1 1 0 0 0-1 1v-1zM32 20v7a3 3 0 0 1-3 3h-1v-10h3a1 1 0 0 1 1 1v-1z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 8v24M13 36h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UniversityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 8l10-5 10 5-10 5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10.5v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5M22 8v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" strokeLinecap="round" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CommunityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path
        d="M2.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6M14.5 20c0-2.4 1.8-4.3 4-4.3s4 1.9 4 4.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CATEGORIES: PartnerCategory[] = [
  { label: "Government", icon: GovernmentIcon },
  { label: "Sports Bodies", icon: SportsBodyIcon },
  { label: "Legal & Dispute-Resolution Institutions", icon: LegalIcon },
  { label: "Universities & Research Institutions", icon: UniversityIcon },
  { label: "Development & International Partners", icon: GlobeIcon },
  { label: "Private Sector & Media", icon: BriefcaseIcon },
  { label: "Civil Society & Communities", icon: CommunityIcon },
];

export function PartnershipMarquee() {
  return (
    <section className="border-b border-line bg-surface py-12">
      <div className="flex w-max animate-marquee items-stretch mask-[linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={`${copy}-${category.label}`}
                  className="flex shrink-0 items-center gap-3 border-r border-line px-10"
                >
                  <Icon className="h-8 w-8 shrink-0 text-accent-dark" />
                  <span className="max-w-40 text-sm leading-snug font-medium text-ink">{category.label}</span>
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
