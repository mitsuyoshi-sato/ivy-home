import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'
import { Hero } from '@/components/Hero'

import { _Battery } from './_Battery'

export const metadata: Metadata = {
  title: '蓄電池',
  description:
    '電気をためて夜間や緊急時にも活用できる蓄電池システム。停電時にも安心の電力を供給し、光熱費の削減にも貢献します。',
  openGraph: {
    title: '蓄電池 / 株式会社アイビーホーム',
    description:
      '電気をためて夜間や緊急時にも活用できる蓄電池システム。停電時にも安心の電力を供給し、光熱費の削減にも貢献します。',
    images: {
      url: '/images/battery.jpg',
    },
  },
}

export default function BatteryPage() {
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
                name: '蓄電池',
                item: 'https://www.ivyho.me/services/battery',
              },
            ],
          }),
        }}
        id="breadcrumb-services-battery"
        type="application/ld+json"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: '蓄電池設置サービス',
            description: '電気をためて夜間や緊急時にも活用できる蓄電池システム。停電時にも安心の電力を供給し、光熱費の削減にも貢献します。',
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
            serviceType: '家庭用蓄電池システム設置',
            category: 'エネルギー・電力',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: '蓄電池サービス',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: '家庭用蓄電池システム',
                    description: '高性能リチウムイオン蓄電池システム',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '蓄電池設置工事',
                    description: '専門技術者による安全で確実な設置工事',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'メンテナンスサービス',
                    description: '定期点検と長期保証サービス',
                  },
                },
              ],
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: '停電対策',
                value: '緊急時電力供給、災害対策',
              },
              {
                '@type': 'PropertyValue',
                name: '経済効果',
                value: '電気代削減、ピークカット',
              },
            ],
          }),
        }}
        id="service-battery"
        type="application/ld+json"
      />
      <Hero
        image={{ src: '/images/light.jpg', alt: '' }}
        overlayOpacity="40"
        subtitle="Battery"
        title="蓄電池"
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '/', icon: 'home' },
          { title: '事業内容一覧', href: '/services', icon: 'briefcase' },
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
          { title: '一覧へ戻る', href: '/services', icon: 'briefcase' },
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
