import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  devIndicators: { 
    staticRouteIndicator: false,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname), // আপনার প্রকল্পের রুট ডিরেক্টরি
    };
    return config;
  },
}

export default nextConfig;
