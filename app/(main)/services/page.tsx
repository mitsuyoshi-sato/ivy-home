import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'

import { _ServiceCard } from './_ServiceCard'

export const metadata: Metadata = {
  title: '事業内容一覧',
  description:
    '愛媛県にお住まいの方へ、太陽光パネル、蓄電池、エコキュート、リフォームなど、暮らしの安全と安心を守る取り組みをご紹介します。',
  openGraph: {
    title: '事業内容一覧 / 株式会社アイビーホーム',
    description:
      '愛媛県にお住まいの方へ、太陽光パネル、蓄電池、エコキュート、リフォームなど、暮らしの安全と安心を守る取り組みをご紹介します。',
    images: {
      url: '/images/ivy-home.svg',
    },
  },
}

export default function ServicesPage() {
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
                name: '事業内容一覧',
                item: 'https://www.ivyho.me/services',
              },
            ],
          }),
        }}
        id="breadcrumb-services"
        type="application/ld+json"
      />
      <Hero
        subtitle="Services"
        title="事業内容"
        video={{
          src: '/videos/sun-light.mp4',
          alt: '',
        }}
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
          description="私たちは、暮らしをより快適で安心にするさまざまなサービスを提供しています。\n日常のささいな不安や課題に目を向け、家庭や暮らしの安全を守るとともに、将来に向けた備えや安心のある生活を支える取り組みを行っています。"
          subtitle="Services"
          title="事業内容一覧"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-2">
          <_ServiceCard
            description="未来のエネルギーをつくるための安心の選択肢です。"
            href="/services/solar-panel"
            image={{
              src: '/images/houses.jpg',
              alt: '太陽光パネルを設置した住宅',
            }}
            index={0}
            title="太陽光パネル"
          />
          <_ServiceCard
            description="電気をためて夜間や緊急時にも活用できます。"
            href="/services/battery"
            image={{ src: '/images/battery.jpg', alt: '蓄電池の画像' }}
            index={1}
            title="蓄電池"
          />
          <_ServiceCard
            description="空気の熱を利用して効率よくお湯をつくる給湯器です。"
            href="/services/eco-cute"
            image={{ src: '/images/bathroom.jpg', alt: 'お湯の溜まったお風呂' }}
            index={2}
            title="エコキュート"
          />
          <_ServiceCard
            description="住宅を食害から守る専門サービス。大切な家の資産価値を守ります。"
            href="/services/termite-control"
            image={{
              src: '/images/pest-control.jpg',
              alt: 'シロアリを虫眼鏡で発見しているイメージ',
            }}
            index={3}
            title="シロアリ駆除"
          />
          <_ServiceCard
            description="マイホームをリフォームして、これからも長く住み続けられるように。"
            href="/services/reform"
            image={{
              src: '/images/kitchen.jpg',
              alt: 'リフォームされたキッチン',
            }}
            index={4}
            title="リフォーム"
          />
        </div>
      </section>
    </>
  )
}
