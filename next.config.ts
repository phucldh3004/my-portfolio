import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Image optimization enabled for better performance
  experimental: {
    // Inline the (small) Tailwind CSS into the HTML so it doesn't block first render.
    inlineCss: true,
  },
};

export default nextConfig;
