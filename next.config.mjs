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
      '@': path.resolve(new URL('.', import.meta.url).pathname), 
    };
    return config;
  },
}

export default nextConfig;
