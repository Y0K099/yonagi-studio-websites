import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/temor',
  assetPrefix: '/temor',
};

export default nextConfig;
