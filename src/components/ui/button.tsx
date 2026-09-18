import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "on-ink";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper hover:bg-ink-soft",
  secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-accent-dark",
  "on-ink": "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-150";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={href} className={cn(baseClass, variantClass[variant], className)} {...rest}>
      {children}
    </Link>
  );
}
