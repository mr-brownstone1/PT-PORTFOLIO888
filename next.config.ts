import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Drop idle routes from memory faster during local work
  onDemandEntries: {
    maxInactiveAge: 20 * 1000,
    pagesBufferLength: 1,
  },
  // Low-RAM machines: avoid webpack worker thrash that hangs first compile
  experimental: {
    webpackMemoryOptimizations: true,
    optimizePackageImports: ["framer-motion"],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.parallelism = 1;
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/stack",
        destination: "/about#stack",
        permanent: true,
      },
      {
        source: "/case-study/bermahadev-website",
        destination: "/case-study/inventory-management",
        permanent: true,
      },
      {
        source: "/case-study/payment-system",
        destination: "/case-study/accounting-system",
        permanent: true,
      },
      {
        source: "/writing",
        destination: "/projects",
        permanent: false,
      },
      {
        source: "/products",
        destination: "/projects",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
