import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSR enabled - no output export
  trailingSlash: true,
  // No basePath - clean URLs
};

export default nextConfig;
