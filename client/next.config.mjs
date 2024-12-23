/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProd ? "https://kimtaekyong.github.io/boram-memory/" : "",
  basePath: isProd ? "/boram-memory" : "",
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
    webpack5: true,
    webpack: (config) => {
      config.cache = false;
      return config;
    },
  },
  async rewrites() {
    return process.env.NODE_ENV === "development"
      ? [
          {
            source: "/api/memorials/:memorialId",
            destination: "http://localhost:4000/api/memorials/:memorialId",
          },
        ]
      : [];
  },
};

export default nextConfig;
