import type { Metadata } from 'next'
import Script from 'next/script'
import { Hero } from '@/components/Hero'
import { Breadcrumb } from '@/components/Breadcrumb'
import { SectionHeader } from '@/components/Section'
import { _ArticlesClient } from './_ArticlesClient'

export const metadata: Metadata = {
  title: 'お知らせ',
  description:
    '株式会社アイビーホームのお知らせページ。新サービスやイベント情報など、お客様に役立つ情報を随時更新しています。',
  openGraph: {
    title: 'お知らせ / 株式会社アイビーホーム',
    description:
      '株式会社アイビーホームのお知らせページ。新サービスやイベント情報など、お客様に役立つ情報を随時更新しています。',
    images: {
      url: '/ivy-home.svg',
    },
  },
}

export default function Articles() {
  return (
    <>
      <Script
        id="breadcrumb-news"
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
            ],
          }),
        }}
      />
      <Hero
        video={{ src: '/newspaper.mp4', alt: '', playbackRate: 0.5 }}
        subtitle="News"
        title="お知らせ"
        overlayOpacity="50"
      />
      <Breadcrumb
        items={[
          { title: 'ホーム', href: '/', icon: 'home' },
          {
            title: 'お知らせ',
            href: '/news',
            icon: 'bellRing',
            current: true,
          },
        ]}
      />
      <section className="wrapper flex flex-col gap-20">
        <SectionHeader
          title="お知らせ一覧"
          subtitle="News"
          description="株式会社アイビーホームの最新情報をお届けします。\n新サービスやイベント情報など、お客様に役立つ情報を随時更新しています。"
        />
        <_ArticlesClient />
      </section>
    </>
  )
}

// クライアントに切り出し
