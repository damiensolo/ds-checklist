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
};

module.exports = nextConfig;