/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en", "ko", "pt", "tr"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    unoptimized: true
  },
  swcMinify: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/health',
        destination: '/api/health',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/health',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;