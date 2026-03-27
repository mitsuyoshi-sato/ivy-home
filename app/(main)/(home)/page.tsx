import type { Metadata } from 'next'
import { format } from 'date-fns'

import { Hero } from '../../../components/Hero'
import { dataNews } from '../../data/newsData'
import { _CampaignSection } from './_CampanySection'
import { _NewsSection } from './_NewsSection'
import { _RecruitsSection } from './_RecruitsSection'
import { _ServicesSection } from './_ServicesSection'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const Home = () => {
  // RSCで日付をフォーマット（サーバー側で1回のみ実行）
  const formattedNews = dataNews.map((news) => ({
    ...news,
    formattedDate: format(news.publishedAt, 'yyyy.M.d'),
  }))

  return (
    <>
      <Hero
        overlayHidden
        description="株式会社アイビーホームは、愛媛県松山市を拠点に、太陽光・蓄電池・リフォームを手がけています。"
        image={{
          src: '/home-poster.jpg',
          alt: '屋根にソーラーパネルを設置している住宅',
        }}
        title="未来の暮らしを、つくる。"
        video={{
          src: '/videos/home-hero.mp4',
          alt: '屋根にソーラーパネルを設置している住宅',
        }}
      />
      <section className="w-full bg-cleam" id="company">
        <_CampaignSection />
      </section>
      <_ServicesSection />
      <section className="w-full bg-cleam" id="news">
        <_NewsSection news={formattedNews} />
      </section>
      <_RecruitsSection />
    </>
  )
}

export default Home
