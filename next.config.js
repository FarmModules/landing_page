/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  basePath: '/github-pages',
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ['example.com'], // Replace example.com with your actual domain(s)
  },
};

