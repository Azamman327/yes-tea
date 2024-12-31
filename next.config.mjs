/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ];
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
