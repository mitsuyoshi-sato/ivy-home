import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Hero } from '@/components/Hero'

import { _InfoSection } from './_InfoSection'
import { _PhilosophySection } from './_PhilosophySection'

export const metadata: Metadata = {
  title: '会社情報',
  description:
    'お客様の明日の暮らしを支える株式会社アイビーホーム(愛媛県)。企業理念や取り組みをわかりやすくご紹介します。',
  openGraph: {
    title: '会社情報 / 株式会社アイビーホーム | 愛媛県',
    description:
      'お客様の明日の暮らしを支える株式会社アイビーホーム(愛媛県)。企業理念や取り組みをわかりやすくご紹介します。',
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
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: '株式会社アイビーホーム',
            description: '愛媛県の太陽光パネル・蓄電池・エコキュート・シロアリ対策・リフォーム。「未来の暮らしを、つくる。」をテーマに、お客様の快適で安心な毎日を、エコで安全な住まいとともにサポートします。',
            url: 'https://www.ivyho.me',
            logo: 'https://www.ivyho.me/images/ivy-home.svg',
            image: 'https://www.ivyho.me/images/ivy-home.png',
            foundingDate: '2025-10',
            founder: {
              '@type': 'Person',
              name: '小西 裕也',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '朝生田町7丁目2-22大興ビル201',
              addressLocality: '松山市',
              addressRegion: '愛媛県',
              addressCountry: 'JP',
            },
            areaServed: {
              '@type': 'State',
              name: '愛媛県',
            },
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 33.8416,
                longitude: 132.7658,
              },
              geoRadius: '50000',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'サービス一覧',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '太陽光パネル設置',
                    description: '未来のエネルギーをつくるための安心の選択肢です。',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '蓄電池設置',
                    description: '電気をためて夜間や緊急時にも活用できます。',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'エコキュート設置',
                    description: '空気の熱を利用して効率よくお湯をつくる給湯器です。',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'シロアリ駆除',
                    description: '住宅を食害から守る専門サービス。大切な家の資産価値を守ります。',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'リフォーム',
                    description: 'マイホームをリフォームして、これからも長く住み続けられるように。',
                  },
                },
              ],
            },
          }),
        }}
        id="local-business-company"
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
