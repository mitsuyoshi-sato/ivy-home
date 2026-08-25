/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Routerはデフォルトで有効
  eslint: {
    // ビルド時にESLintエラーを無視
    ignoreDuringBuilds: true,
  },
  redirects: async () => [
    {
      destination: '/columns/solar-battery-combination',
      permanent: true,
      source: '/news/monthly-bill',
    },
    {
      destination: '/columns/solar-battery-combination',
      permanent: true,
      source: '/news/solar-battery-combination',
    },
    {
      destination: '/columns/termite-checklist',
      permanent: true,
      source: '/news/termite-checklist',
    },
    {
      destination: '/columns/electricity-price-rise-2025',
      permanent: true,
      source: '/news/electricity-price-rise-2025',
    },
  ],
}

module.exports = nextConfig
