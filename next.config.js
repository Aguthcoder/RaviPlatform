/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'media.wired.com'],
  },
  // برای دیپلوی استاتیک روی GitHub Pages
  // output: 'export',
  // basePath: '/raavi-platform',
}

module.exports = nextConfig
