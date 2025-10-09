/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Routerはデフォルトで有効
  eslint: {
    // ビルド時にESLintエラーを無視
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
