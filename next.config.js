
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
  images: {
    unoptimized: true
  },
  swcMinify: true,
  output: 'standalone',
  trailingSlash: false,
  poweredByHeader: false,
  distDir: 'out',
};

module.exports = nextConfig;
