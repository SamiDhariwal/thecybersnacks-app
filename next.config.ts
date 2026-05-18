import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/snacks/sscp",
        destination: "/certifications/sscp",
        permanent: true,
      },
      {
        source: "/snacks/cism",
        destination: "/certifications/cism",
        permanent: true,
      },
      {
        source: "/snacks/cissp",
        destination: "/certifications/cissp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
