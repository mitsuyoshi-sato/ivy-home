import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    allow: '/',
    userAgent: '*',
  },
  sitemap: 'https://www.ivyho.me/sitemap.xml',
})

export default robots
