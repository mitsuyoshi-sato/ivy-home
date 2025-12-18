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
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '蓄電池は太陽光パネルがないと使えないの？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'いいえ、蓄電池だけでも使えます。深夜の安い電力を蓄えて昼間に使うことで電気代を削減できます。もちろん！太陽光パネルと併用すればより効果的です。',
                },
              },
              {
                '@type': 'Question',
                name: '停電時にはどのくらい使えますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '蓄電池の容量によって異なりますが、一般的な家庭用蓄電池なら、冷蔵庫やテレビ、照明などを数時間～数日使うことが可能です。太陽光発電と併用すれば、晴れた日には充電も可能です。',
                },
              },
              {
                '@type': 'Question',
                name: '蓄電池の寿命はどのくらいですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '一般的に10～15年程度です。メーカーによっては10年保証が付いている製品もあります。定期的なメンテナンスで、より長く安心してお使いいただけます。',
                },
              },
              {
                '@type': 'Question',
                name: '本当に電気代が節約できますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '夜間電力や太陽光の余剰電力を効率的に蓄えることで、毎月の電気代を節約できます。家庭の使用状況や蓄電容量によって差はありますが、無料でお見積もり可能です。',
                },
              },
              {
                '@type': 'Question',
                name: '設置スペースはどのくらい必要ですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '家庭用の蓄電池は比較的コンパクトで、屋外壁面や屋内の空きスペースに設置可能です。設置場所の条件に合わせて最適なプランをご提案します。',
                },
              },
            ],
          }),
        }}
        id="faq-battery"
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
