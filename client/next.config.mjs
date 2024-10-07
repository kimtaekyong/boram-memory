/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/memorials/:memorialId", // 클라이언트가 요청하는 경로
        destination: "http://localhost:4000/api/memorials/:memorialId", // 실제 요청이 전달될 백엔드 서버 경로
      },
    ];
  },
};

export default nextConfig;
