import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'
import { Hero } from '@/components/Hero'

import { _EcoCute } from './_EcoCute'

export const metadata: Metadata = {
  title: 'エコキュート',
  description:
    '空気の熱を利用して効率よくお湯をつくるエコキュート。電気代を大幅に削減し、環境にやさしい給湯システムです。',
  openGraph: {
    title: 'エコキュート / 株式会社アイビーホーム',
    description:
      '空気の熱を利用して効率よくお湯をつくるエコキュート。電気代を大幅に削減し、環境にやさしい給湯システムです。',
    images: {
      url: '/images/bathroom.jpg',
    },
  },
}

export default function EcoCutePage() {
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
                name: 'エコキュート',
                item: 'https://www.ivyho.me/services/eco-cute',
              },
            ],
          }),
        }}
        id="breadcrumb-services-ecoCute"
        type="application/ld+json"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'エコキュート設置サービス',
            description:
              '空気の熱を利用して効率よくお湯をつくるエコキュート。電気代を大幅に削減し、環境にやさしい給湯システムです。',
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
            serviceType: 'エコキュート給湯システム設置',
            category: '給湯・住宅設備',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'エコキュートサービス',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'エコキュート給湯器',
                    description: 'ヒートポンプ式高効率給湯器',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'エコキュート設置工事',
                    description: '専門技術者による設置・配管工事',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'アフターサービス',
                    description: '定期メンテナンスと故障対応',
                  },
                },
              ],
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: '省エネ効果',
                value: '電気代大幅削減、高効率運転',
              },
              {
                '@type': 'PropertyValue',
                name: '環境効果',
                value: 'CO2削減、環境保護',
              },
            ],
          }),
        }}
        id="service-eco-cute"
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
                name: '家族4人だとお湯は足りますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '基本的には充分です。一般的な4人家族用のタンクで1日分の生活用水は十分に確保できます。ただし、連続で長時間使用する場合や、家族が多い場合はタンク容量の大きいモデルを選ぶとより安心です。',
                },
              },
              {
                '@type': 'Question',
                name: '冬でもちゃんとお湯は出ますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'はい、問題ありません。エコキュートは空気の熱を利用してお湯を作りますが、寒冷地対応モデルであればマイナス25度の環境でも安定して稼働します。さらに、タンクにお湯を貯めておく方式なので、寒い冬でも入浴や家事に必要なお湯がすぐに使えます。',
                },
              },
              {
                '@type': 'Question',
                name: 'エコキュートって電気代は本当に節約できますか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'はい。夜間の安い電力を使って効率的にお湯を沸かすため、毎月の光熱費を大幅に抑えられます。長期的には家計の負担軽減にもつながります。',
                },
              },
              {
                '@type': 'Question',
                name: '家族が同時にお湯を使っても大丈夫ですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'お風呂・洗面所・キッチンなど複数箇所で同時に使用しても快適に給湯できます。多人数で同時使用すると、わずかに温度や水圧が変わることがあります。',
                },
              },
              {
                '@type': 'Question',
                name: 'お手入れは大変ですか？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'タンクや給湯器の外装、フィルターなど日常のお手入れは簡単です。内部の点検や故障対応は専門スタッフがサポートしますので、安心してご利用いただけます。',
                },
              },
            ],
          }),
        }}
        id="faq-eco-cute"
        type="application/ld+json"
      />
      <Hero
        image={{ src: '/images/bathroom.jpg', alt: 'エコキュート' }}
        subtitle="EcoCute"
        title="エコキュート"
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '/', icon: 'home' },
          { title: '事業内容一覧', href: '/services', icon: 'briefcase' },
          {
            title: 'エコキュート',
            href: '/services/eco-cute',
            icon: 'bath',
            current: true,
          },
        ]}
      />
      <section className="wrapper">
        <_EcoCute />
      </section>
      <FooterLinks
        items={[
          { title: '一覧へ戻る', href: '/services', icon: 'briefcase' },
          { title: '太陽光パネル', href: '/services/solar-panel', icon: 'sun' },
          { title: '蓄電池', href: '/services/battery', icon: 'battery' },
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
