/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  // basePath: '/github-pages',

  // Enable static HTML export
  output: "export",

  // Configure images domain
  // Configure images domain
  images: {},
  css: ["@styles/main.css"],
};

module.exports = nextConfig;
