
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
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  distDir: 'out',
};

module.exports = nextConfig;
