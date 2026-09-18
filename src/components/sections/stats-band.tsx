import { Container } from "@/components/ui/container";

const STATS = [
  { value: "5", label: "Core Pillars of Work" },
  { value: "2026", label: "Founded" },
  { value: "Continental", label: "Scope of Engagement" },
  { value: "Independent", label: "Institutional Status" },
];

export function StatsBand() {
  return (
    <section className="border-b border-line bg-ink text-paper">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-line-on-ink lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-b border-line-on-ink px-6 py-8 last:border-b-0 lg:border-b-0">
              <p className="font-serif text-3xl text-paper">{stat.value}</p>
              <p className="mt-2 text-xs tracking-wide text-paper/60 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
