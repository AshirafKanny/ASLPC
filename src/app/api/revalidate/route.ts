import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { POST_TAG } from "@/sanity/client";

/**
 * Called by a Sanity webhook whenever an article is published, changed or deleted,
 * so the site shows the update on the very next visit instead of waiting for the
 * hourly refresh. The request is signed with SANITY_REVALIDATE_SECRET.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET is not set" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<{ _type?: string }>(request, secret);
  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }
  if (body?._type !== "post") {
    return NextResponse.json({ message: "Ignored: not an article" }, { status: 200 });
  }

  revalidateTag(POST_TAG, { expire: 0 });
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
