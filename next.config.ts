import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Skip static export for pages that require authentication/Clerk
  // Allow dynamic rendering for pages that use Clerk
  experimental: {
    isrMemoryCacheSize: 0,
  },
  // Disable static optimization during Docker builds
  ...(process.env.DOCKER_BUILD === "true" && {
    staticPageGenerationTimeout: 1000,
  }),
};

export default nextConfig;
