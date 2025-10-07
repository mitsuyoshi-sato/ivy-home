import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { _News } from './_News'
import { dataNews } from '@/app/data/newsData'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 記事データを取得してメタデータを生成
  return {
    title: '記事タイトル',
    description: '記事の説明',
  }
}

export default function ArticlePage({ params }: Props) {
  const data = dataNews.find((data) => data.href === `/news/${params.slug}`)
  if (!data) notFound()

  return (
    <>
      <Script
        id={`breadcrumb-article-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://ivyho.me/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'お知らせ',
                item: 'https://ivyho.me/news',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: data.title,
                item: `https://ivyho.me/news/${params.slug}`,
              },
            ],
          }),
        }}
      />
      <Script
        id={`article-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: data.title,
            image: `https://ivyho.me${data.image}`,
            datePublished: data.publishedAt,
            description: data.subtitle,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://ivyho.me/news/${params.slug}`,
            },
            author: {
              '@type': 'Person',
              name: data.createdByEn,
              image: `https://ivyho.me${data.createdByImage}`,
            },
            publisher: {
              '@type': 'Organization',
              name: '株式会社アイビーホーム',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ivyho.me/ivy-home.svg',
              },
            },
          }),
        }}
      />
      <div className="bg-cleam">
        <Breadcrumb
          className="pt-24"
          items={[
            { title: 'ホーム', href: '/', icon: 'home' },
            { title: 'お知らせ', href: '/news', icon: 'bellRing' },
            {
              title: data.title,
              href: `/news/${params.slug}`,
              icon: 'newspaper',
              current: true,
            },
          ]}
        />
      </div>
      <section>
        <_News data={data} />
      </section>
      <FooterLinks
        items={[{ title: '記事一覧に戻る', href: '/news', icon: 'newspaper' }]}
      />
    </>
  )
}
