import type { NextConfig } from "next";

// Baseline browser security headers for every response.
const securityHeaders = [
  // Stop browsers guessing content types (MIME sniffing).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only this site may embed its pages in a frame (clickjacking protection).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Send only the origin, not full URLs, to other sites.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site never needs these device features.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Article images uploaded in the Sanity Studio.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
