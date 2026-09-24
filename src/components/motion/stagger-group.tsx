import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type StaggerVariant = "rise" | "scale";

const VARIANT_TO_AOS: Record<StaggerVariant, string> = {
  rise: "fade-up",
  scale: "zoom-out",
};

/** Wraps a group of cards (its direct children) and staggers their AOS entrance as the group scrolls into view. */
export function StaggerGroup({
  children,
  variant = "rise",
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  variant?: StaggerVariant;
  className?: string;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as ReactElement<Record<string, unknown>>, {
          "data-aos": VARIANT_TO_AOS[variant],
          "data-aos-delay": Math.round(i * stagger * 1000),
        });
      })}
    </div>
  );
}
