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
    ];
  },
};

export default nextConfig;
