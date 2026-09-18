import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-ink/15 px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
