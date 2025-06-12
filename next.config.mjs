/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['brand.brex.com'],
    },
    async rewrites() {
      return [
        { source: '/:path*', destination: '/' },
      ];
    },
  };
  
  export default nextConfig;
  