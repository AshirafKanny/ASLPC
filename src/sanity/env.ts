// Project ID and dataset are public identifiers (they appear in every API request),
// so they have safe defaults; environment variables can override them.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cxpuy3cc";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-10-01";
