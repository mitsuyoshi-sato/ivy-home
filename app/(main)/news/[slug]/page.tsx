import type { Metadata } from 'next'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Script from 'next/script'

import { dataNews } from '@/app/data/newsData'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

import { _News } from './_News'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = dataNews.find((item) => item.href === `/news/${slug}`)

  if (!data) {
    return {
      title: '記事が見つかりません',
      description: '指定された記事は見つかりませんでした',
    }
  }

  return {
    title: data.title,
    description: data.subtitle,
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const data = dataNews.find((data) => data.href === `/news/${slug}`)
  if (!data) notFound()

  // RSCで日付をフォーマット（サーバー側で1回のみ実行）
  const formattedData = {
    ...data,
    formattedDate: format(data.publishedAt, 'yyyy.MM.dd'),
  }

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://www.ivyho.me/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'ニュース一覧',
                item: 'https://www.ivyho.me/news',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: data.title,
                item: `https://www.ivyho.me/news/${slug}`,
              },
            ],
          }),
        }}
        id={`breadcrumb-news-${slug}`}
        type="application/ld+json"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: data.title,
            image: `https://www.ivyho.me${data.image}`,
            datePublished: data.publishedAt,
            description: data.subtitle,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.ivyho.me/news/${slug}`,
            },
            author: {
              '@type': 'Person',
              name: data.createdByEn,
              image: `https://www.ivyho.me${data.createdByImage}`,
            },
            publisher: {
              '@type': 'Organization',
              name: '株式会社アイビーホーム',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.ivyho.me/images/ivy-home.svg',
              },
            },
          }),
        }}
        id={`news-${slug}`}
        type="application/ld+json"
      />
      <div className="bg-cleam pt-24">
        <Breadcrumb
          items={[
            { title: 'ホーム', href: '/', icon: 'home' },
            { title: 'ニュース一覧', href: '/news', icon: 'bellRing' },
            {
              title: data.title,
              href: `/news/${slug}`,
              icon: 'newspaper',
              current: true,
            },
          ]}
        />
      </div>
      <_News data={formattedData} />
      <FooterLinks
        items={[{ title: '記事一覧に戻る', href: '/news', icon: 'newspaper' }]}
      />
    </>
  )
}
