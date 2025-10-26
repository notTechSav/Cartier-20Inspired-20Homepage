/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error detection
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Transpile specific packages if needed
  transpilePackages: [
    '@builder.io/react',
    '@builder.io/sdk',
    'swiper',
  ],

  // Environment variables available to the browser
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },

  // Webpack config for any custom needs
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
