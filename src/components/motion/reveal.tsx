import type { ReactNode } from "react";

type RevealVariant = "rise" | "clip" | "scale" | "fade";

const VARIANT_TO_AOS: Record<RevealVariant, string> = {
  rise: "fade-up",
  clip: "clip-reveal",
  scale: "zoom-out",
  fade: "fade",
};

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={className} data-aos={VARIANT_TO_AOS[variant]} data-aos-delay={Math.round(delay * 1000)}>
      {children}
    </div>
  );
}
