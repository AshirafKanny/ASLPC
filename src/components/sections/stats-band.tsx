import { Container } from "@/components/ui/container";
import { StaggerGroup } from "@/components/motion/stagger-group";

const STATS = [
  { value: "5", label: "Core Pillars of Work" },
  { value: "2026", label: "Founded" },
  { value: "Uganda & East Africa", label: "Founding Base" },
  { value: "Independent", label: "Institutional Status" },
];

export function StatsBand() {
  return (
    <section className="border-b border-line bg-surface">
      <Container>
        <StaggerGroup className="grid grid-cols-2 divide-x divide-line lg:grid-cols-4" stagger={0.08}>
          {STATS.map((stat) => (
            <div key={stat.label} className="border-b border-line px-6 py-8 last:border-b-0 lg:border-b-0">
              <p className="font-serif text-2xl wrap-break-word text-accent-dark sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs tracking-wide text-muted uppercase">{stat.label}</p>
            </div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
