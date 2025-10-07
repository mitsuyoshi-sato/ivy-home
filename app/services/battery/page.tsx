import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { _Battery } from './_Battery'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

export const metadata: Metadata = {
  title: '蓄電池',
  description:
    '電気をためて夜間や緊急時にも活用できる蓄電池システム。停電時にも安心の電力を供給し、光熱費の削減にも貢献します。',
  openGraph: {
    title: '蓄電池 / 株式会社アイビーホーム',
    description:
      '電気をためて夜間や緊急時にも活用できる蓄電池システム。停電時にも安心の電力を供給し、光熱費の削減にも貢献します。',
    images: {
      url: '/battery.jpg',
    },
  },
}

export default function BatteryPage() {
  return (
    <>
      <Hero
        image={{ src: '/light.jpg', alt: '' }}
        subtitle="Battery"
        title="蓄電池"
        overlayOpacity="40"
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '/', icon: 'home' },
          { title: '事業内容一覧', href: '/services', icon: 'layers' },
          {
            title: '蓄電池',
            href: '/services/battery',
            icon: 'battery',
            current: true,
          },
        ]}
      />

      <section className="wrapper">
        <_Battery />
      </section>
      <FooterLinks
        items={[
          { title: '一覧へ戻る', href: '/services', icon: 'layers' },
          { title: '太陽光パネル', href: '/services/solar-panel', icon: 'sun' },
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
