import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains: ["storage.googleapis.com"]
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
