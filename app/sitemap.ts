import type { MetadataRoute } from 'next'

import {
  dataContents,
  getContentHref,
  getContents,
} from '@/app/data/contentData'

const baseUrl = 'https://www.ivyho.me'

const sitemap = (): MetadataRoute.Sitemap => [
  ...[
    { path: '/', priority: 1 },
    { path: '/company', priority: 0.6 },
    { path: '/services', priority: 0.8 },
    { path: '/services/reform', priority: 0.8 },
    { path: '/services/battery', priority: 0.8 },
    { path: '/services/solar-panel', priority: 0.8 },
    { path: '/services/termite-control', priority: 0.8 },
    { path: '/services/eco-cute', priority: 0.8 },
    { path: '/news', priority: 0.6 },
    { path: '/columns', priority: 0.7 },
    ...(getContents('work').length > 0
      ? [{ path: '/works', priority: 0.8 }]
      : []),
    { path: '/recruit', priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  })),
  ...dataContents.map((c) => ({
    url: `${baseUrl}${getContentHref(c)}`,
    lastModified: new Date(c.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  })),
]

export default sitemap
