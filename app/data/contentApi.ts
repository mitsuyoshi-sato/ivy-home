import 'server-only'

import { format } from 'date-fns'
import type { MicroCMSImage } from 'microcms-js-sdk'
import { cache } from 'react'

import { clientMicrocms } from '@/lib/microcms'

import type {
  ContentDetailData,
  ContentKind,
  ContentSummary,
} from './contentData'

export const getContentSummaries = cache(
  async (kind: ContentKind): Promise<ContentSummary[]> =>
    (
      await clientMicrocms.getAllContents<{
        eyecatch?: MicroCMSImage
        subtitle?: string
        title: string
      }>({
        customRequestInit: {
          next: {
            revalidate: 86400,
            tags: ['contents', `contents-${kind}`],
          },
        },
        endpoint: 'contents',
        queries: {
          fields: ['id', 'publishedAt', 'title', 'subtitle', 'eyecatch'],
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
      subtitle: c.subtitle ?? '',
      title: c.title,
    })),
)

export const getContentDetail = cache(
  async (kind: ContentKind, id: string): Promise<ContentDetailData | null> => {
    let data: ContentDetailData | null = null

    try {
      const content = await clientMicrocms.getListDetail<{
        author?: string[]
        category?: string[]
        eyecatch?: MicroCMSImage
        sections?: {
          content?: string
          fieldId: string
          heading?: string
        }[]
        subtitle?: string
        title: string
      }>({
        contentId: id,
        customRequestInit: {
          next: {
            revalidate: 86400,
            tags: ['contents', `content-${id}`],
          },
        },
        endpoint: 'contents',
        queries: {
          fields: [
            'id',
            'publishedAt',
            'revisedAt',
            'category',
            'title',
            'subtitle',
            'author',
            'eyecatch',
            'sections',
          ],
        },
      })

      if (content.category?.includes(__categoryByKind[kind])) {
        const nameAuthor = content.author?.[0] ?? '株式会社アイビーホーム'

        data = {
          author: nameAuthor,
          authorImage:
            __imageByAuthor[nameAuthor] ?? '/images/yuya-konishi.JPG',
          category: content.category[0] ?? __categoryByKind[kind],
          id: content.id,
          image: content.eyecatch?.url ?? '/images/ivy-home.png',
          kind,
          publishedAt: content.publishedAt ?? content.createdAt,
          revisedAt: content.revisedAt ?? content.updatedAt,
          sections:
            content.sections?.map((s) => ({
              description: s.content ?? '',
              title: s.heading ?? '',
            })) ?? [],
          slug: content.id,
          subtitle: content.subtitle ?? '',
          title: content.title,
        }
      }
    } catch (error) {
      if (!__isNotFoundError(error)) {
        throw error
      }
    }

    return data
  },
)

const __categoryByKind = {
  column: 'お役立ち情報',
  news: 'ニュース',
  work: '施工事例',
} as const satisfies Record<ContentKind, string>

const __imageByAuthor: Record<string, string> = {
  '佐藤 充能': '/images/yuya-konishi.JPG',
  '小西 裕也': '/images/yuya-konishi.JPG',
}

const __isNotFoundError = (error: unknown) =>
  error instanceof Error && error.message.includes('status: 404')
