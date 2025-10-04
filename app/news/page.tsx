import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
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
      url: '/ivy-home.png',
    },
  },
}

export default function Articles() {
  return (
    <>
      <Hero
        video={{ src: '/newspaper.mp4', alt: '', playbackRate: 0.5 }}
        subtitle="News"
        title="お知らせ"
        overlayOpacity="50"
      />
      <section className="wrapper flex flex-col gap-20">
        <_ArticlesClient />
      </section>
    </>
  )
}

// クライアントに切り出し
