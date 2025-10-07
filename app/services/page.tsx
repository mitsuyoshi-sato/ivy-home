import type { Metadata } from 'next'
import Script from 'next/script'
import { Hero } from '@/components/Hero'
import { Breadcrumb } from '@/components/Breadcrumb'
import { SectionHeader } from '@/components/Section'
import { _ServiceCard } from './_ServiceCard'

export const metadata: Metadata = {
  title: '事業内容一覧',
  description:
    '太陽光パネル、蓄電池、エコキュート、リフォームなど、暮らしの安全と安心を守る取り組みをご紹介します。',
  openGraph: {
    title: '事業内容一覧 / 株式会社アイビーホーム',
    description:
      '太陽光パネル、蓄電池、エコキュート、リフォームなど、暮らしの安全と安心を守る取り組みをご紹介します。',
    images: {
      url: '/ivy-home.svg',
    },
  },
}

export default function ServicesPage() {
  return (
    <>
      <Script
        id="breadcrumb-services"
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
                name: '事業内容一覧',
                item: 'https://ivyho.me/services',
              },
            ],
          }),
        }}
      />
      <Hero
        video={{
          src: '/sun-light.mp4',
          alt: '',
        }}
        subtitle="Services"
        title="事業内容"
      />
      <Breadcrumb
        items={[
          { title: 'ホーム', href: '/', icon: 'home' },
          {
            title: '事業内容一覧',
            href: '/services',
            icon: 'briefcase',
            current: true,
          },
        ]}
      />
      <section className="wrapper">
        <SectionHeader
          title="事業内容一覧"
          subtitle="Services"
          description="私たちは、暮らしをより快適で安心にするさまざまなサービスを提供しています。\n日常のささいな不安や課題に目を向け、家庭や暮らしの安全を守るとともに、将来に向けた備えや安心のある生活を支える取り組みを行っています。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 mt-12">
          <_ServiceCard
            title="太陽光発電パネル"
            description="未来のエネルギーをつくるための安心の選択肢です。"
            image={{
              src: '/houses.jpg',
              alt: '太陽光発電パネルを設置した住宅',
            }}
            index={0}
            href="/services/solar-panel"
          />
          <_ServiceCard
            title="蓄電池"
            description="電気をためて夜間や緊急時にも活用できます。"
            image={{ src: '/battery.jpg', alt: '蓄電池の画像' }}
            index={1}
            href="/services/battery"
          />
          <_ServiceCard
            title="エコキュート"
            description="空気の熱を利用して効率よくお湯をつくる給湯器です。"
            image={{ src: '/bathroom.jpg', alt: 'お湯の溜まったお風呂' }}
            index={2}
            href="/services/eco-cute"
          />
          <_ServiceCard
            title="シロアリ駆除"
            description="住宅を食害から守る専門サービス。大切な家の資産価値を守ります。"
            image={{
              src: '/pest-control.jpg',
              alt: 'シロアリを虫眼鏡で発見しているイメージ',
            }}
            index={3}
            href="/services/termite-control"
          />
          <_ServiceCard
            title="リフォーム"
            description="マイホームをリフォームして、これからも長く住み続けられるように。"
            image={{ src: '/kitchen.jpg', alt: 'リフォームされたキッチン' }}
            index={4}
            href="/services/reform"
          />
        </div>
      </section>
    </>
  )
}
