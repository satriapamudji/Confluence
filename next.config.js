/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: [],
  },
};

module.exports = nextConfig;
