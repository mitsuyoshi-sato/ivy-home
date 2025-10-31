import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Hero } from '@/components/Hero'

import { _InfoSection } from './_InfoSection'
import { _PhilosophySection } from './_PhilosophySection'

export const metadata: Metadata = {
  title: '会社情報',
  description:
    'お客様の明日の暮らしを支える株式会社アイビーホーム。企業理念や取り組みをわかりやすくご紹介します。',
  openGraph: {
    title: '会社情報 / 株式会社アイビーホーム',
    description:
      'お客様の明日の暮らしを支える株式会社アイビーホーム。企業理念や取り組みをわかりやすくご紹介します。',
    images: {
      url: '/images/ivy-home.svg',
    },
  },
}

export default function Company() {
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
                name: '会社情報',
                item: 'https://www.ivyho.me/company',
              },
            ],
          }),
        }}
        id="breadcrumb-company"
        type="application/ld+json"
      />
      <Hero
        description=""
        subtitle="Company"
        title="会社情報"
        video={{
          src: '/videos/coffee.mp4',
          alt: '',
        }}
      />
      <div className="bg-cleam">
        <Breadcrumb
          items={[
            { title: 'ホーム', href: '/', icon: 'home' },
            {
              title: '会社情報',
              href: '/company',
              icon: 'building',
              current: true,
            },
          ]}
        />
      </div>
      <section className="bg-cleam" id="philosophy">
        <_PhilosophySection />
      </section>
      <_InfoSection />
    </>
  )
}
