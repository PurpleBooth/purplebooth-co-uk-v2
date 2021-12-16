/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  commonmark: true,
  gfm: true,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils', "models", "services"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
});
