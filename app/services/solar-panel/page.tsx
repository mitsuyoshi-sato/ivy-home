import type { Metadata } from 'next'
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
      <Hero
        image={{ src: '/houses2.jpg', alt: '太陽光パネルの住宅が連なっている' }}
        subtitle="Solar Panel"
        title="太陽光パネル"
        overlayOpacity="10"
      />
      <section className="wrapper">
        <_SolarPanel />
      </section>
    </>
  )
}
