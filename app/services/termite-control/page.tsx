import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { _TermiteControl } from './_TermiteControl'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

export const metadata: Metadata = {
  title: 'シロアリ駆除',
  description:
    '住宅を食害から守る専門サービス。大切な家の資産価値を守るため、プロの技術でシロアリを徹底駆除します。',
  openGraph: {
    title: 'シロアリ駆除 / 株式会社アイビーホーム',
    description:
      '住宅を食害から守る専門サービス。大切な家の資産価値を守るため、プロの技術でシロアリを徹底駆除します。',
    images: {
      url: '/family.jpg',
    },
  },
}

export default function TermiteControlPage() {
  return (
    <>
      <Hero
        image={{ src: '/damaged-wood.jpg', alt: 'シロアリ駆除' }}
        subtitle="Termite Control"
        title="シロアリ駆除"
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '/', icon: 'home' },
          { title: '事業内容一覧', href: '/services', icon: 'briefcase' },
          {
            title: 'シロアリ駆除',
            href: '/services/termite-control',
            icon: 'sprayCan',
            current: true,
          },
        ]}
      />
      <section className="wrapper">
        <_TermiteControl />
      </section>
      <FooterLinks
        items={[
          { title: '一覧へ戻る', href: '/services', icon: 'briefcase' },
          { title: '太陽光パネル', href: '/services/solar-panel', icon: 'sun' },
          { title: '蓄電池', href: '/services/battery', icon: 'battery' },
          { title: 'エコキュート', href: '/services/eco-cute', icon: 'bath' },
          { title: 'リフォーム', href: '/services/reform', icon: 'paintbrush' },
        ]}
      />
    </>
  )
}
