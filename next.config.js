
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
  trailingSlash: true,
  poweredByHeader: false,
  distDir: 'out',
};

module.exports = nextConfig;
