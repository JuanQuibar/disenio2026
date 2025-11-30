import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jwplayer.com",
        port: "",
        pathname: "/**", // Permite cualquier ruta dentro de este dominio
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
