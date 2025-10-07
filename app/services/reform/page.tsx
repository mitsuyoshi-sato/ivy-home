import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { _Reform } from './_Reform'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

export const metadata: Metadata = {
  title: 'リフォーム',
  description:
    'マイホームをリフォームして、これからも長く住み続けられるように。キッチン、バスルーム、内装リフォームなど、お客様のご要望にお応えします。',
  openGraph: {
    title: 'リフォーム / 株式会社アイビーホーム',
    description:
      'マイホームをリフォームして、これからも長く住み続けられるように。キッチン、バスルーム、内装リフォームなど、お客様のご要望にお応えします。',
    images: {
      url: '/cooking2.jpg',
    },
  },
}

export default function ReformPage() {
  return (
    <>
      <Hero
        image={{ src: '/kitchen.jpg', alt: 'リフォーム' }}
        subtitle="Reform"
        title="リフォーム"
        overlayOpacity="40"
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '/', icon: 'home' },
          { title: '事業内容一覧', href: '/services', icon: 'briefcase' },
          {
            title: 'リフォーム',
            href: '/services/reform',
            icon: 'home',
            current: true,
          },
        ]}
      />
      <section className="wrapper">
        <_Reform />
      </section>
      <FooterLinks
        items={[
          { title: '一覧へ戻る', href: '/services', icon: 'briefcase' },
          { title: '太陽光パネル', href: '/services/solar-panel', icon: 'sun' },
          { title: '蓄電池', href: '/services/battery', icon: 'battery' },
          { title: 'エコキュート', href: '/services/eco-cute', icon: 'bath' },
          {
            title: 'シロアリ駆除',
            href: '/services/termite-control',
            icon: 'sprayCan',
          },
        ]}
      />
    </>
  )
}
