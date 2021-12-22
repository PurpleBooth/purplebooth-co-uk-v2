/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

const withPWA = require('next-pwa');

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  commonmark: true,
  gfm: true,
});
module.exports = withPWA(withMDX({
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public'
  },
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
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}));
