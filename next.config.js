/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // ✅ CRITICAL for Hostinger Node.js hosting
  // Without this, Hostinger has no server.js to start and returns 503
  output: 'standalone',

  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },

  distDir: '.next',

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
