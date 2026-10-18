import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

// Published content only. Responses are cached by Next.js and refreshed by the
// /api/revalidate webhook when an editor publishes, with an hourly fallback.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

export const POST_TAG = "post";
const FALLBACK_REVALIDATE_SECONDS = 3600;

export function sanityFetch<T>(query: string, params: Record<string, unknown> = {}) {
  return client.fetch<T>(query, params, {
    next: { tags: [POST_TAG], revalidate: FALLBACK_REVALIDATE_SECONDS },
  });
}
