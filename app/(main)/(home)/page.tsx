import type { Metadata } from 'next'

import { getContentSummaries } from '@/app/data/contentApi'

import { Hero } from '../../../components/Hero'
import { _CampaignSection } from './_CampanySection'
import { _ContentsSection } from './_ContentsSection'
import { _RecruitsSection } from './_RecruitsSection'
import { _ServicesSection } from './_ServicesSection'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const Page = async () => {
  const data = (
    await Promise.all([
      getContentSummaries('news'),
      getContentSummaries('column'),
      getContentSummaries('work'),
    ])
  )
    .flat()
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

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
        <_ContentsSection contents={data} />
      </section>
      <_RecruitsSection />
    </>
  )
}

export default Page
