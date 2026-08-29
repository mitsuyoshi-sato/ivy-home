import 'server-only'

import { format } from 'date-fns'
import type { MicroCMSImage } from 'microcms-js-sdk'
import { cache } from 'react'

import { clientMicrocms } from '@/lib/microcms'

import type { ContentKind, ContentSummary } from './contentData'

export const getContentSummaries = cache(
  async (
    kind: ContentKind,
  ): Promise<{ contents: ContentSummary[]; kind: ContentKind }> => ({
    contents: (
      await clientMicrocms.getAllContents<{
        eyecatch?: MicroCMSImage
        title: string
      }>({
        customRequestInit: {
          next: {
            revalidate: 3600,
            tags: [`contents-${kind}`],
          },
        },
        endpoint: 'contents',
        queries: {
          fields: ['id', 'publishedAt', 'title', 'eyecatch'],
          filters: `category[contains]${__categoryByKind[kind]}`,
          orders: '-publishedAt',
        },
      })
    ).map((c) => ({
      formattedDate: format(c.publishedAt ?? c.createdAt, 'yyyy.MM.dd'),
      id: c.id,
      image: c.eyecatch?.url ?? '/images/ivy-home.png',
      kind,
      publishedAt: c.publishedAt ?? c.createdAt,
      slug: c.id,
      subtitle: '',
      title: c.title,
    })),
    kind,
  }),
)

const __categoryByKind = {
  column: 'お役立ち情報',
  news: 'ニュース',
  work: '施工事例',
} as const satisfies Record<ContentKind, string>
