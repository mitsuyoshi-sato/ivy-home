import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'
import { Hero } from '@/components/Hero'

import { _TermiteControl } from './_TermiteControl'

export const metadata: Metadata = {
  title: 'シロアリ駆除',
  description:
    '住宅を食害から守る専門サービス。大切な家の資産価値を守るため、プロの技術でシロアリを徹底駆除します。',
  openGraph: {
    title: 'シロアリ駆除 / 株式会社アイビーホーム',
    description:
      '住宅を食害から守る専門サービス。大切な家の資産価値を守るため、プロの技術でシロアリを徹底駆除します。',
    images: {
      url: '/images/family.jpg',
    },
  },
}

export default function TermiteControlPage() {
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
                name: 'シロアリ駆除',
                item: 'https://www.ivyho.me/services/termite-control',
              },
            ],
          }),
        }}
        id="breadcrumb-services-termiteControl"
        type="application/ld+json"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'シロアリ駆除サービス',
            description: '住宅を食害から守る専門サービス。大切な家の資産価値を守るため、プロの技術でシロアリを徹底駆除します。',
            provider: {
              '@type': 'LocalBusiness',
              name: '株式会社アイビーホーム',
              url: 'https://www.ivyho.me',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '朝生田町7丁目2-22大興ビル201',
                addressLocality: '松山市',
                addressRegion: '愛媛県',
                addressCountry: 'JP',
              },
            },
            areaServed: {
              '@type': 'State',
              name: '愛媛県',
            },
            serviceType: 'シロアリ駆除・予防',
            category: '害虫駆除・住宅保護',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'シロアリ駆除サービス',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'シロアリ駆除',
                    description: '既存のシロアリを徹底的に駆除',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'シロアリ予防',
                    description: 'シロアリの侵入を予防する薬剤処理',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '定期点検',
                    description: '継続的な点検とモニタリング',
                  },
                },
              ],
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: '資産保護',
                value: '住宅の資産価値維持、構造保護',
              },
              {
                '@type': 'PropertyValue',
                name: '安全性',
                value: '人体・ペットに安全な薬剤使用',
              },
            ],
          }),
        }}
        id="service-termite-control"
        type="application/ld+json"
      />
      <Hero
        image={{ src: '/images/damaged-wood.jpg', alt: 'シロアリ駆除' }}
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
