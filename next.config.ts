import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
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
