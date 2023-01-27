/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  fs: false,
  path: false
}

module.exports = nextConfig
module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
