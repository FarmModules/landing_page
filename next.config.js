/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  basePath: '/github-pages',

  // Enable static HTML export
  output: 'export',
  }
// next.config.js
module.exports = {
  images: {
    domains: ['www.farmmodules.tech'],
  },
};

