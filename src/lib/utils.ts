import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateRange(startIso: string, endIso?: string): string {
  if (!endIso) return formatDate(startIso);
  const start = new Date(startIso);
  const end = new Date(endIso);
  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  if (sameMonth) {
    const startDay = start.toLocaleDateString("en-GB", { day: "numeric" });
    return `${startDay}–${formatDate(endIso)}`;
  }
  return `${formatDate(startIso)} – ${formatDate(endIso)}`;
}
