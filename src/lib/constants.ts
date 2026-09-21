export const SITE = {
  name: "African Sports Law and Policy Centre",
  shortName: "ASLPC",
  tagline: "Advancing sports law, governance and policy across Africa",
  description:
    "ASLPC is an independent African research and policy institution working at the intersection of sports law, governance, policy and sport for development.",
  url: "https://aslpc.org",
  locationLabel: "Kampala, Uganda",
  contactEmail: "info@aslpc.org",
} as const;

export type Pillar = {
  slug: string;
  label: string;
  shortLabel: string;
  summary: string;
};

export const PILLARS: Pillar[] = [
  {
    slug: "research",
    label: "Research",
    shortLabel: "Research",
    summary:
      "Rigorous, Africa-grounded research on sports law and the governance of sport.",
  },
  {
    slug: "policy",
    label: "Policy",
    shortLabel: "Policy",
    summary:
      "Policy analysis and briefs that translate research into actionable guidance for institutions.",
  },
  {
    slug: "governance",
    label: "Governance",
    shortLabel: "Governance",
    summary:
      "Advisory work strengthening the governance of federations, ministries and sporting bodies.",
  },
  {
    slug: "academy",
    label: "Capacity Building   ASLPC Academy",
    shortLabel: "Academy",
    summary:
      "Training programmes building a new generation of African sports law and policy practitioners.",
  },
  {
    slug: "sport-for-development",
    label: "Sport for Development",
    shortLabel: "Sport for Development",
    summary:
      "Evidence-based approaches connecting sport to development outcomes across the continent.",
  },
];

export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items: NavItem[];
};

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    items: [
      { label: "Who We Are", href: "/about" },
      { label: "Vision & Mission", href: "/about/vision-and-mission" },
      { label: "Leadership & Board", href: "/about/leadership" },
      { label: "Institutional Structure", href: "/about/structure" },
      { label: "Partnerships", href: "/about/partnerships" },
    ],
  },
  {
    label: "Our Work",
    items: PILLARS.map((p) => ({ label: p.shortLabel, href: `/${p.slug}` })),
  },
  {
    label: "Knowledge",
    items: [
      { label: "Publications", href: "/publications" },
      { label: "Policy Briefs", href: "/publications?category=policy-brief" },
      { label: "Reports", href: "/publications?category=report" },
      { label: "Insights & Articles", href: "/insights" },
    ],
  },
  {
    label: "Articles",
    href: "/insights",
    items: [
      { label: "Article Listing", href: "/insights" },
      { label: "Article Detail", href: "/insights/why-african-federations-need-independent-dispute-tribunals" },
    ],
  },
  {
    label: "Engage",
    items: [
      { label: "Events", href: "/events" },
      { label: "Training Programmes", href: "/academy" },
      { label: "Policy Dialogues", href: "/events?type=dialogue" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_NAV: NavGroup[] = [
  {
    label: "Institute",
    items: [
      { label: "About ASLPC", href: "/about" },
      { label: "Leadership & Board", href: "/about/leadership" },
      { label: "Partnerships", href: "/about/partnerships" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Our Work",
    items: PILLARS.map((p) => ({ label: p.shortLabel, href: `/${p.slug}` })),
  },
  {
    label: "Knowledge",
    items: [
      { label: "Publications", href: "/publications" },
      { label: "Insights & Articles", href: "/insights" },
      { label: "Events", href: "/events" },
    ],
  },
];
