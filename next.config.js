/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  basePath: '/github-pages',

  // Enable static HTML export
  output: 'export',
};

module.exports = nextConfig;
