import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'
import { Hero } from '@/components/Hero'

import { _SolarPanel } from './_SolarPanel'

export const metadata: Metadata = {
  title: '太陽光パネル',
  description:
    '未来のエネルギーをつくるための安心の選択肢。太陽光発電システムで光熱費を削減し、環境にやさしい暮らしを実現します。',
  openGraph: {
    title: '太陽光パネル / 株式会社アイビーホーム',
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
                name: '太陽光パネル',
                item: 'https://www.ivyho.me/services/solar-panel',
              },
            ],
          }),
        }}
        id="breadcrumb-services-solarPanel"
        type="application/ld+json"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: '太陽光パネル設置サービス',
            description:
              '未来のエネルギーをつくるための安心の選択肢。太陽光発電システムで光熱費を削減し、環境にやさしい暮らしを実現します。',
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
            serviceType: '太陽光発電システム設置',
            category: 'エネルギー・環境',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: '太陽光パネルサービス',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: '住宅用太陽光発電システム',
                    description: '屋根に設置する太陽光パネルシステム',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '太陽光パネル設置工事',
                    description: '専門技術者による安全で確実な設置工事',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'アフターサポート',
                    description: '設置後のメンテナンスとサポート',
                  },
                },
              ],
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: '環境効果',
                value: 'CO2削減、環境保護',
              },
              {
                '@type': 'PropertyValue',
                name: '経済効果',
                value: '光熱費削減、売電収入',
              },
            ],
          }),
        }}
        id="service-solar-panel"
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
                name: '太陽光パネル設置は本当にお得なの？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '太陽光は「自分で電気をつくる」仕組みなので、今後の電気代高騰への保険としてもお得といえると思います。実際にどのくらい削減できるかは、電気代の明細を見て具体的に試算いたします。',
                },
              },
              {
                '@type': 'Question',
                name: '雨の日は発電できますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'はい、発電します。ただし、晴天時に比べて発電量は少なくなります。天候に左右されるため、蓄電池を組み合わせることで効率的に電力を利用できます。',
                },
              },
              {
                '@type': 'Question',
                name: '設置に向いている屋根はありますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '南向きで日当たりの良い屋根が最適です。北向きや影が多い場合でも設置は可能ですが、南向きと比較すると発電効率はやや下がります。',
                },
              },
              {
                '@type': 'Question',
                name: '停電時にも電気が使えるのですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '停電時でも、蓄電池を併用することで電力を供給できます。特に災害時には非常用電源として活用可能です。',
                },
              },
              {
                '@type': 'Question',
                name: 'メンテナンスは必要ですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '日常的な掃除や簡単な確認だけで十分です。内部の点検や故障対応は専門スタッフがサポートするため、手間はほとんどかかりません。',
                },
              },
            ],
          }),
        }}
        id="faq-solar-panel"
        type="application/ld+json"
      />
      <Hero
        image={{
          src: '/images/houses2.jpg',
          alt: '太陽光パネルの住宅が連なっている',
        }}
        overlayOpacity="10"
        subtitle="Solar Panel"
        title="太陽光パネル"
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '/', icon: 'home' },
          { title: '事業内容一覧', href: '/services', icon: 'briefcase' },
          {
            title: '太陽光パネル',
            href: '/services/solar-panel',
            icon: 'sun',
            current: true,
          },
        ]}
      />
      <section className="wrapper">
        <_SolarPanel />
      </section>
      <FooterLinks
        items={[
          { title: '一覧へ戻る', href: '/services', icon: 'briefcase' },
          { title: '蓄電池', href: '/services/battery', icon: 'battery' },
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
