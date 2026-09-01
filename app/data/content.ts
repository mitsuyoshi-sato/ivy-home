export const kindsContent = ['news', 'column', 'work'] as const

export type ContentKind = (typeof kindsContent)[number]

export type Content = {
  category: string
  id: string
  image: string
  kind: ContentKind
  publishedAt: string
  sections: {
    description: string
    title: string
  }[]
  slug: string
  subtitle: string
  title: string
}

export type ContentSummary = Pick<
  Content,
  'id' | 'image' | 'kind' | 'publishedAt' | 'slug' | 'subtitle' | 'title'
> & { formattedDate: string }

export type ContentSitemapEntry = Pick<Content, 'kind' | 'slug'> & {
  image?: string
  revisedAt: string
}

export type ContentDetailData = Pick<
  Content,
  | 'category'
  | 'id'
  | 'image'
  | 'kind'
  | 'publishedAt'
  | 'sections'
  | 'slug'
  | 'subtitle'
  | 'title'
> & {
  author: string
  authorImage: string
  imageOpenGraph: string
  revisedAt: string
}

export const configContent = {
  news: {
    description:
      '株式会社アイビーホームからの会社情報、新サービス、イベントなどの最新ニュースをご案内します。',
    icon: 'bellRing',
    label: 'ニュース',
    path: '/news',
    schemaType: 'NewsArticle',
    subtitle: 'News',
  },
  column: {
    description:
      '太陽光発電・蓄電池・リフォームなど、住まいと暮らしに役立つ情報を専門家の視点でお届けします。',
    icon: 'lightbulb',
    label: 'お役立ち情報',
    path: '/columns',
    schemaType: 'BlogPosting',
    subtitle: 'Useful Information',
  },
  work: {
    description:
      '株式会社アイビーホームが手がけた太陽光発電・蓄電池・リフォームなどの施工事例をご紹介します。',
    icon: 'briefcase',
    label: '施工事例',
    path: '/works',
    schemaType: 'Article',
    subtitle: 'Works',
  },
} as const satisfies Record<
  ContentKind,
  {
    description: string
    icon: string
    label: string
    path: `/${string}`
    schemaType: 'Article' | 'BlogPosting' | 'NewsArticle'
    subtitle: string
  }
>

export const getContentHref = (content: Pick<Content, 'kind' | 'slug'>) =>
  `${configContent[content.kind].path}/${content.slug}`
