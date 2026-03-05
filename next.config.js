/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Disable webpack caching which causes issues on Windows
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.cache = false;
    }
    
    // Fix for Windows paths
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    
    return config;
  },
  
  // Disable telemetry
  distDir: '.next',
  
  // Enable SWC minification (faster)
  swcMinify: true,
  
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