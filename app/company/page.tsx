import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumb } from '@/components/Breadcrumb'
import { _PhilosophySection } from './_PhilosophySection'
import { _InfoSection } from './_InfoSection'

export const metadata: Metadata = {
  title: '会社情報',
  description:
    'お客様の明日の暮らしを支える株式会社アイビーホーム。企業理念や取り組みをわかりやすくご紹介します。',
  openGraph: {
    title: '会社情報 / 株式会社アイビーホーム',
    description:
      'お客様の明日の暮らしを支える株式会社アイビーホーム。企業理念や取り組みをわかりやすくご紹介します。',
    images: {
      url: '/ivy-home.svg',
    },
  },
}

export default function Company() {
  return (
    <>
      <Hero
        video={{
          src: '/coffee.mp4',
          alt: '',
        }}
        subtitle="Company"
        title="会社情報"
        description=""
      />
      <Breadcrumb
        items={[
          { title: 'ホーム', href: '/', icon: 'home' },
          {
            title: '会社情報',
            href: '/company',
            icon: 'building-2',
            current: true,
          },
        ]}
      />
      <section id="philosophy" className="bg-cleam">
        <_PhilosophySection />
      </section>
      <_InfoSection />
    </>
  )
}
