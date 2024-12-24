// next.config.js
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProd ? "https://kimtaekyong.github.io/boram-memory/" : "",
  basePath: isProd ? "/boram-memory" : "",
  images: {
    unoptimized: true, // Optional, only if you want to avoid Next.js image optimization
  },
  compiler: {
    styledComponents: true,
    webpack5: true,
    webpack: (config) => {
      if (process.env.NODE_ENV !== "production") {
        config.cache = false; // Disable caching only in development
      }
      return config;
    },
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./Components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  async rewrites() {
    return process.env.NODE_ENV === "development"
      ? [
          {
            source: "/api/memorials/:memorialId",
            destination: "http://localhost:4000/api/memorials/:memorialId",
          },
        ]
      : []; // Make sure to handle production API calls as needed
  },
};

export default nextConfig;
