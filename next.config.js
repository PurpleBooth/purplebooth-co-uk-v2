/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  commonmark: true,
  gfm: true,
});
module.exports = withMDX({
  pageExtensions: ["page.js", "page.jsx", "page.ts", "page.tsx", "page.md", "page.mdx"],
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  eslint: {
    dirs: ['pages', 'utils', "models", "services"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/page/1'
      }
    ];
  }
});
