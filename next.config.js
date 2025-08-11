/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // enable static export
  images: { unoptimized: true } // disable Next image optimizer for static hosting
  // basePath: '' // keep empty for root domain like dronski.in
};

module.exports = nextConfig;
