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
};

module.exports = nextConfig;