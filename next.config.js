/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    trailingSlash: true, // Ensures all paths have a trailing slash
    images: {
      unoptimized: true, // Required for static export if you're using the Next.js Image component
    },
    distDir: '../../../public/next-build', // Output the static build to Laravel's public directory
  };
  
  module.exports = nextConfig;
  