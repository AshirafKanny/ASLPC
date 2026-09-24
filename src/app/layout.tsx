import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { SITE } from "@/lib/constants";
import "./globals.css";

// DM Sans: body copy, navigation, buttons, forms, cards, labels — the interface voice.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Source Serif 4: hero headings, page/section headings, editorial statements — the institutional voice.
const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} (${SITE.shortName})`,
    template: `%s   ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "sports law Africa",
    "sports governance Africa",
    "sports policy Africa",
    "sport for development Africa",
    "African Sports Law and Policy Centre",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.shortName,
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif4.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <SmoothScroll>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
