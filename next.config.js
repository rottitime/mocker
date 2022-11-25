/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: { appDir: false },
  swcMinify: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  publicRuntimeConfig: {
    siteTitle: 'Mocker'
  }
}

module.exports = nextConfig
