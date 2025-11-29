import type { Metadata } from 'next'
import { format } from 'date-fns'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'

import { dataNews } from '../../data/newsData'
import { _NewsClient } from './_NewsClient'

export const metadata: Metadata = {
  title: 'ニュース一覧',
  description:
    '株式会社アイビーホームのニュースページ。新サービスやイベント情報など、お客様に役立つ情報を随時更新しています。',
  openGraph: {
    title: 'ニュース一覧 / 株式会社アイビーホーム',
    description:
      '株式会社アイビーホームのニュースページ。新サービスやイベント情報など、お客様に役立つ情報を随時更新しています。',
    images: {
      url: '/images/ivy-home.svg',
    },
  },
}

export default function NewsListPage() {
  // RSCで日付をフォーマット（サーバー側で1回のみ実行）
  const formattedNews = dataNews.map((news) => ({
    ...news,
    formattedDate: format(news.publishedAt, 'yyyy.MM.dd'),
  }))
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
            ],
          }),
        }}
        id="breadcrumb-news"
        type="application/ld+json"
      />
      <Hero
        overlayOpacity="50"
        subtitle="News"
        title="ニュース"
        video={{ src: '/videos/newspaper.mp4', alt: '', playbackRate: 0.5 }}
      />
      <Breadcrumb
        items={[
          { title: 'ホーム', href: '/', icon: 'home' },
          {
            title: 'ニュース一覧',
            href: '/news',
            icon: 'bellRing',
            current: true,
          },
        ]}
      />
      <section className="wrapper flex flex-col gap-20">
        <SectionHeader
          description="株式会社アイビーホームの最新情報をお届けします。\n新サービスやイベント情報など、お客様に役立つ情報を随時更新しています。"
          subtitle="News"
          title="ニュース一覧"
        />
        <_NewsClient news={formattedNews} />
      </section>
    </>
  )
}
