import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/Section'
import { _ServiceCard } from './_ServiceCard'

export const metadata: Metadata = {
  title: '事業内容',
  description:
    '太陽光パネル、蓄電池、エコキュート、リフォームなど、暮らしの安全と安心を守る取り組みをご紹介します。',
  openGraph: {
    title: '事業内容 / 株式会社アイビーホーム',
    description:
      '太陽光パネル、蓄電池、エコキュート、リフォームなど、暮らしの安全と安心を守る取り組みをご紹介します。',
    images: {
      url: '/ivy-home.png',
    },
  },
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        image={{ src: '/hero2.jpg', alt: '事業内容' }}
        subtitle="Services"
        title="事業内容"
      />
      <section className="wrapper">
        <SectionHeader
          title="事業内容の一覧"
          subtitle="Services"
          description="私たちは、暮らしをより快適で安心にするさまざまなサービスを提供しています。\n日常のささいな不安や課題に目を向け、家庭や暮らしの安全を守るとともに、将来に向けた備えや安心のある生活を支える取り組みを行っています。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 mt-12">
          <_ServiceCard
            title="太陽光発電パネル"
            description="未来のエネルギーをつくるための安心の選択肢です。"
            src="/solar-panel.jpg"
            index={0}
            href="/services/solar-panel"
          />
          <_ServiceCard
            title="蓄電池"
            description="電気をためて夜間や緊急時にも活用できます。"
            src="/print.jpg"
            index={1}
            href="/services/battery"
          />
          <_ServiceCard
            title="エコキュート"
            description="空気の熱を利用して効率よくお湯をつくる給湯器です。"
            src="/bathroom.jpg"
            index={2}
            href="/services/eco-cute"
          />
          <_ServiceCard
            title="シロアリ駆除"
            description="住宅を食害から守る専門サービス。大切な家の資産価値を守ります。"
            src="/after-follow.jpg"
            index={3}
            href="/services/termite-control"
          />
          <_ServiceCard
            title="リフォーム"
            description="マイホームをリフォームして、これからも長く住み続けられるように。"
            src="/family.jpg"
            index={4}
            href="/services/reform"
          />
        </div>
      </section>
    </>
  )
}
