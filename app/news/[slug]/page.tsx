import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { _News } from './_News'
import { dataNews } from '@/app/data/newsData'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const data = dataNews.find((data) => data.href === `/news/${slug}`)
  if (!data) notFound()

  return (
    <>
      <Script
        id={`breadcrumb-article-${slug}`}
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
                name: 'ニュース一覧',
                item: 'https://ivyho.me/news',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: data.title,
                item: `https://ivyho.me/news/${slug}`,
              },
            ],
          }),
        }}
      />
      <Script
        id={`article-${slug}`}
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
              '@id': `https://ivyho.me/news/${slug}`,
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
                url: 'https://ivyho.me/images/ivy-home.svg',
              },
            },
          }),
        }}
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
      <_News data={data} />
      <FooterLinks
        items={[{ title: '記事一覧に戻る', href: '/news', icon: 'newspaper' }]}
      />
    </>
  )
}
