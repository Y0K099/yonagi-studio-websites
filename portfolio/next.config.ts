import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // No basePath - serves from root domain
};

export default nextConfig;
