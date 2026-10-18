"use client";

import { usePathname } from "next/navigation";
import { AosInit } from "@/components/motion/aos-init";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

/**
 * The public site's frame (header, footer, smooth scrolling, WhatsApp button).
 * The Sanity Studio at /studio is a full-screen app of its own, so it gets none of it.
 */
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return <>{children}</>;

  return (
    <>
      <AosInit />
      <SmoothScroll>
        {header}
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        {footer}
      </SmoothScroll>
      <WhatsAppButton />
    </>
  );
}
