import 'server-only'

import { format } from 'date-fns'
import type { MicroCMSImage } from 'microcms-js-sdk'
import { cache } from 'react'

import { clientMicrocms } from '@/lib/microcms'

import type {
  ContentDetailData,
  ContentKind,
  ContentSitemapEntry,
  ContentSummary,
} from './content'
import { configContent, kindsContent } from './content'

type ContentDetailResponse = {
  author?: string[]
  category?: string[]
  date?: string | null
  eyecatch?: MicroCMSImage
  sections?: {
    content?: string
    fieldId: string
    heading?: string
  }[]
  subtitle?: string
  title: string
}

export const getContentSummaries = cache(
  async (kind: ContentKind): Promise<ContentSummary[]> =>
    (
      await clientMicrocms.getAllContents<{
        date?: string | null
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
          fields: [
            'id',
            'publishedAt',
            'date',
            'title',
            'subtitle',
            'eyecatch',
          ],
          filters: `category[contains]${configContent[kind].label}`,
        },
      })
    )
      .map((c) => ({
        formattedDate: format(
          __getPublishedAt(c.date, c.publishedAt ?? c.createdAt),
          'yyyy.MM.dd',
        ),
        id: c.id,
        image:
          (c.eyecatch &&
            __getMicrocmsImageUrl(c.eyecatch.url, {
              fm: 'webp',
              q: 80,
              w: 800,
            })) ||
          '/images/ivy-home.png',
        kind,
        publishedAt: __getPublishedAt(c.date, c.publishedAt ?? c.createdAt),
        slug: c.id,
        subtitle: c.subtitle ?? '',
        title: c.title,
      }))
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
)

export const getContentDetail = cache(
  async (kind: ContentKind, id: string): Promise<ContentDetailData | null> => {
    let data: ContentDetailData | null = null

    try {
      const content = await __getContentDetailResponse(id)

      if (content.category?.includes(configContent[kind].label)) {
        data = __getContentDetailData(content, kind)
      }
    } catch (error) {
      if (!__isNotFoundError(error)) {
        throw error
      }
    }

    return data
  },
)

export const getContentPreview = cache(
  async (id: string, draftKey: string): Promise<ContentDetailData | null> => {
    let data: ContentDetailData | null = null

    try {
      const content = await __getContentDetailResponse(id, draftKey)
      const kind = __getContentKind(content.category)

      if (kind) {
        data = __getContentDetailData(content, kind)
      }
    } catch (error) {
      if (!__isNotFoundError(error)) {
        throw error
      }
    }

    return data
  },
)

export const getContentSitemapEntries = cache(
  async (): Promise<ContentSitemapEntry[]> =>
    (
      await clientMicrocms.getAllContents<{
        category?: string[]
        eyecatch?: MicroCMSImage
      }>({
        customRequestInit: {
          next: {
            revalidate: 86400,
            tags: ['contents'],
          },
        },
        endpoint: 'contents',
        queries: {
          fields: ['id', 'revisedAt', 'category', 'eyecatch'],
        },
      })
    ).reduce<ContentSitemapEntry[]>((a, c) => {
      const kind = __getContentKind(c.category)

      if (kind) {
        a.push({
          image: c.eyecatch?.url,
          kind,
          revisedAt: c.revisedAt,
          slug: c.id,
        })
      }

      return a
    }, []),
)

const __imageByAuthor: Record<string, string> = {
  '佐藤 充能': '/images/favicon.png',
  '小西 裕也': '/images/yuya-konishi.jpg',
}

const __fieldsContentDetail = [
  'id',
  'publishedAt',
  'revisedAt',
  'date',
  'category',
  'title',
  'subtitle',
  'author',
  'eyecatch',
  'sections',
]

const __getContentDetailResponse = (id: string, draftKey?: string) =>
  clientMicrocms.getListDetail<ContentDetailResponse>({
    contentId: id,
    customRequestInit:
      (draftKey && { cache: 'no-store' }) ||
      ({
        next: {
          revalidate: 86400,
          tags: ['contents', `content-${id}`],
        },
      } as const),
    endpoint: 'contents',
    queries: (draftKey && { draftKey, fields: __fieldsContentDetail }) || {
      fields: __fieldsContentDetail,
    },
  })

const __getContentDetailData = (
  content: Awaited<ReturnType<typeof __getContentDetailResponse>>,
  kind: ContentKind,
): ContentDetailData => {
  const nameAuthor = content.author?.[0] ?? '株式会社アイビーホーム'

  return {
    author: nameAuthor,
    authorImage: __imageByAuthor[nameAuthor] ?? '/images/yuya-konishi.jpg',
    category: content.category?.[0] ?? configContent[kind].label,
    id: content.id,
    image:
      (content.eyecatch &&
        __getMicrocmsImageUrl(content.eyecatch.url, {
          fm: 'webp',
          q: 80,
          w: 1600,
        })) ||
      '/images/ivy-home.png',
    imageOpenGraph:
      (content.eyecatch &&
        __getMicrocmsImageUrl(content.eyecatch.url, {
          fit: 'crop',
          fm: 'jpg',
          h: 630,
          q: 80,
          w: 1200,
        })) ||
      '/images/ivy-home.png',
    kind,
    publishedAt: __getPublishedAt(
      content.date,
      content.publishedAt ?? content.createdAt,
    ),
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

const __getPublishedAt = (
  date: string | null | undefined,
  publishedAt: string,
) => date?.slice(0, 10) ?? publishedAt

const __isNotFoundError = (error: unknown) =>
  error instanceof Error && error.message.includes('status: 404')

const __getContentKind = (categories: string[] | undefined) =>
  kindsContent.find((k) => categories?.includes(configContent[k].label))

const __getMicrocmsImageUrl = (
  url: string,
  parameters: {
    fit?: 'crop'
    fm: 'jpg' | 'webp'
    h?: number
    q: number
    w: number
  },
) => {
  const urlImage = new URL(url)

  Object.entries(parameters).forEach(([k, v]) => {
    if (v !== undefined) {
      urlImage.searchParams.set(k, String(v))
    }
  })

  return urlImage.toString()
}
