import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'
import { Hero } from '@/components/Hero'

import { _SolarPanel } from './_SolarPanel'

export const metadata: Metadata = {
  title: '太陽光発電パネル',
  description:
    '未来のエネルギーをつくるための安心の選択肢。太陽光発電システムで光熱費を削減し、環境にやさしい暮らしを実現します。',
  openGraph: {
    title: '太陽光発電パネル / 株式会社アイビーホーム',
    description:
      '未来のエネルギーをつくるための安心の選択肢。太陽光発電システムで光熱費を削減し、環境にやさしい暮らしを実現します。',
    images: {
      url: '/solar-panel.jpg',
    },
  },
}

export default function SolarPanelPage() {
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
              {
                '@type': 'ListItem',
                position: 3,
                name: '太陽光パネル',
                item: 'https://www.ivyho.me/services/solar-panel',
              },
            ],
          }),
        }}
        id="breadcrumb-services-solarPanel"
        type="application/ld+json"
      />
      <Hero
        image={{
          src: '/images/houses2.jpg',
          alt: '太陽光パネルの住宅が連なっている',
        }}
        overlayOpacity="10"
        subtitle="Solar Panel"
        title="太陽光パネル"
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '/', icon: 'home' },
          { title: '事業内容一覧', href: '/services', icon: 'briefcase' },
          {
            title: '太陽光パネル',
            href: '/services/solar-panel',
            icon: 'sun',
            current: true,
          },
        ]}
      />
      <section className="wrapper">
        <_SolarPanel />
      </section>
      <FooterLinks
        items={[
          { title: '一覧へ戻る', href: '/services', icon: 'briefcase' },
          { title: '蓄電池', href: '/services/battery', icon: 'battery' },
          { title: 'エコキュート', href: '/services/eco-cute', icon: 'bath' },
          {
            title: 'シロアリ駆除',
            href: '/services/termite-control',
            icon: 'sprayCan',
          },
          { title: 'リフォーム', href: '/services/reform', icon: 'paintbrush' },
        ]}
      />
    </>
  )
}
