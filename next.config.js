/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  basePath: '/github-pages',

  // Enable static HTML export
  target: 'serverless',
  output: 'export',

  // Configure images domain
  images: {
    domains: ['www.farmmodules.tech'],
  },
};

module.exports = nextConfig;


