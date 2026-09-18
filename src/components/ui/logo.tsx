import Image from "next/image";
import mark from "../../../public/aslpc-mark.png";
import { cn } from "@/lib/utils";

export function LogoMark({
  size = 44,
  className,
  priority = false,
  decorative = true,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  return (
    <Image
      src={mark}
      alt={decorative ? "" : "ASLPC emblem"}
      width={size}
      height={size}
      priority={priority}
      className={cn("h-auto shrink-0", className)}
    />
  );
}
