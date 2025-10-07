import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { _SolarPanel } from './_SolarPanel'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

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
      <Hero
        image={{ src: '/houses2.jpg', alt: '太陽光パネルの住宅が連なっている' }}
        subtitle="Solar Panel"
        title="太陽光パネル"
        overlayOpacity="10"
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '/', icon: 'home' },
          { title: '事業内容一覧', href: '/services', icon: 'layers' },
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
          { title: '一覧へ戻る', href: '/services', icon: 'layers' },
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
