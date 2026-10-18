import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Article images uploaded in the Sanity Studio.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
};

export default nextConfig;
