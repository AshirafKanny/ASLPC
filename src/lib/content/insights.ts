import type { InsightArticle } from "./types";
import researchB3Img from "../../../public/Research b3.jpg";
import footballB1Img from "../../../public/football b1.jpg";
import lawB2Img from "../../../public/law b2.jpg";

// Launch commentary from ASLPC's research and programme teams, published under
// institutional bylines. Replace or expand as the Centre's editorial output grows.
export const insights: InsightArticle[] = [
  {
    slug: "why-african-federations-need-independent-dispute-tribunals",
    title: "Why African Federations Need Independent Dispute Tribunals",
    accentPhrase: "Independent Dispute Tribunals",
    author: "ASLPC Research Team",
    publishedAt: "2026-07-15",
    pillar: "governance",
    summary:
      "A look at the case for independent dispute-resolution mechanisms within national sports federations, and what Uganda's National Sports Act, 2023 could mean in practice.",
    body: [
      "In most African sporting federations, the body that regulates a sport is also, in effect, the body that judges disputes arising from it. A federation writes its own rules, disciplines its own members, and hears appeals against its own decisions. That arrangement is common, long-standing, and increasingly difficult to defend.",
      "The conflict is structural rather than personal. Even a scrupulously fair federation official is being asked to judge a case in which their own institution has an interest — in the outcome of a selection dispute, a disciplinary matter, or a contractual disagreement. Athletes and clubs are right to ask whether that is a fair hearing, and international sports governance has moved decisively toward separating the two functions, most visibly through the Court of Arbitration for Sport at the international level.",
      "Uganda's National Sports Act, 2023 gives this question new urgency at home. The Act creates a statutory framework for sports administration and discipline, which is precisely the moment at which the relationship between government regulators, federations and independent dispute-resolution bodies has to be decided — not left to custom. Get the institutional design right now, while implementing regulations and structures are still being built, and it is far cheaper than correcting it later.",
      "This is a live research question for ASLPC's Sports Policy and Governance division: how should Uganda, and comparable African jurisdictions working through similar reforms, structure that relationship in practice? What follows in our research agenda is not a call for more litigation, but for a cleaner separation — regulatory administration on one side, independent adjudication on the other — so that federations can focus on developing sport, and disputes can be resolved by bodies with no stake in the outcome.",
    ],
    image: researchB3Img,
    readingTimeMinutes: 6,
    tags: ["governance", "dispute resolution", "National Sports Act"],
  },
  {
    slug: "measuring-what-matters-in-sport-for-development",
    title: "Measuring What Matters in Sport for Development",
    accentPhrase: "Sport for Development",
    author: "ASLPC Programmes Team",
    publishedAt: "2026-08-05",
    pillar: "sport-for-development",
    summary:
      "Why outcome measurement in sport-for-development programming remains inconsistent across the continent, and how a dedicated impact framework can help.",
    body: [
      "Sport-for-development programming is easy to run and hard to evaluate. A football league that keeps teenagers in school, a netball programme that builds girls' confidence, a community tournament that brings rival neighbourhoods together for an afternoon — the value of this work is rarely in doubt to the people delivering it. The evidence base behind it, across much of the continent, is thinner than it should be.",
      "Part of the problem is methodological. International frameworks exist — UNESCO's Kazan Action Plan follow-up work and the African Union Sports Council's continental pillars both set out what sport-for-development programming should be aiming at — but translating continental indicators into something a district-level programme can actually track, on a modest budget, with a small team, is a different and harder task.",
      "It matters because the organisations running this work are usually answerable to donors and government partners who reasonably want to know what changed, not just what happened. Attendance figures and photographs of smiling participants are not evidence of outcomes in health, education, employment, gender equality, social inclusion, peace building or disability inclusion — they are evidence that an event took place.",
      "This is the gap ASLPC's Division C is working to close: a Uganda Sport-for-Development policy and impact framework that adapts established international indicator methodologies to a Ugandan context, developed through cross-sectoral pilot partnerships rather than in the abstract. The goal is not more paperwork for programme staff, but a shared, credible way to say — with evidence, not just conviction — what sport-for-development work in Uganda is actually achieving.",
    ],
    image: footballB1Img,
    readingTimeMinutes: 5,
    tags: ["sport for development", "monitoring & evaluation"],
  },
  {
    slug: "what-ugandas-national-sports-act-means-for-african-sports-governance",
    title: "What Uganda's National Sports Act Means for African Sports Governance",
    accentPhrase: "African Sports Governance",
    author: "ASLPC Policy Team",
    publishedAt: "2026-08-28",
    pillar: "policy",
    summary:
      "Uganda's National Sports Act, 2023 created a comprehensive legal framework for sport — but a framework alone does not guarantee implementation. Here is what has to happen next.",
    body: [
      "Uganda's National Sports Act, 2023 is, on paper, a significant achievement: the first comprehensive statutory framework for sports administration, discipline and regulation the country has had. It sets out roles, powers and structures that previously existed only informally, or not at all.",
      "A statute, however, is an instruction, not an outcome. Laws of this kind succeed or fail on the institutions, professionals and evidence base built up around them — the regulators who apply them consistently, the federations that adapt their own rules to comply, the dispute-resolution bodies that interpret them fairly, and the researchers who track whether the framework is actually improving how sport is governed. Uganda now has the legal architecture. The harder, longer work is building what sits inside it.",
      "This is not a uniquely Ugandan problem. Comparable regulatory reforms are underway or under discussion elsewhere on the continent, and the same gap tends to recur: governance capacity, athlete protection, sports commercialisation and integrity systems all lag behind the legal text meant to govern them. A well-drafted act in one country can be a genuinely useful reference point for legislators elsewhere, provided the implementation lessons — good and bad — are documented and shared rather than left to be rediscovered independently.",
      "That is the space ASLPC's policy work sits in: tracking how the National Sports Act, 2023 is implemented in practice, supporting the institutional and regulatory work that gives it effect, and drawing out what is transferable to comparable reforms across East Africa and the wider continent.",
    ],
    image: lawB2Img,
    readingTimeMinutes: 6,
    tags: ["policy", "National Sports Act", "regulatory reform"],
  },
];

export function getRecentInsights(limit = 3): InsightArticle[] {
  return [...insights]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((i) => i.slug === slug);
}
