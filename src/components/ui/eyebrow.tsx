import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "accent",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "muted" | "on-ink";
}) {
  const toneClass = {
    accent: "text-accent-dark",
    muted: "text-muted",
    "on-ink": "text-accent",
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase",
        toneClass,
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current" />
      {children}
    </span>
  );
}
