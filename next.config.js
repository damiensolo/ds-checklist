
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  swcMinify: true,
  trailingSlash: false,
  poweredByHeader: false,
};

module.exports = nextConfig;
