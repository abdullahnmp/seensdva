/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  devIndicators: { // এই অংশটি যোগ করুন
    staticRouteIndicator: false,
  },
}

export default nextConfig;