import type { MetadataRoute } from 'next'

import { getContentSitemapEntries } from '@/app/data/contentApi'
import { getContentHref } from '@/app/data/content'

const urlBase = 'https://www.ivyho.me'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const data = await getContentSitemapEntries()

  return [
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
      { path: '/works', priority: 0.8 },
      { path: '/recruit', priority: 0.7 },
    ].map((p) => ({
      url: `${urlBase}${p.path}`,
      changeFrequency: 'monthly' as const,
      priority: p.priority,
    })),
    ...data.map((c) => ({
      url: `${urlBase}${getContentHref(c)}`,
      lastModified: c.revisedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      ...(c.image && { images: [c.image] }),
    })),
  ]
}

export default sitemap
