import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'
import { Hero } from '@/components/Hero'

import { _Reform } from './_Reform'

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
                name: 'リフォーム',
                item: 'https://www.ivyho.me/services/reform',
              },
            ],
          }),
        }}
        id="breadcrumb-services-reform"
        type="application/ld+json"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'リフォームサービス',
            description: 'マイホームをリフォームして、これからも長く住み続けられるように。キッチン、バスルーム、内装リフォームなど、お客様のご要望にお応えします。',
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
            serviceType: '住宅リフォーム・改修',
            category: '住宅・建築・リフォーム',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'リフォームサービス',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'キッチンリフォーム',
                    description: '機能的で美しいキッチンへの改修',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'バスルームリフォーム',
                    description: '快適で安全なバスルームへの改修',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '内装リフォーム',
                    description: '壁紙・床材・照明などの内装改修',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'バリアフリー改修',
                    description: '高齢者・障害者に配慮した住環境改修',
                  },
                },
              ],
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: '住環境向上',
                value: '快適性向上、機能性向上',
              },
              {
                '@type': 'PropertyValue',
                name: '資産価値',
                value: '住宅価値向上、長期居住対応',
              },
            ],
          }),
        }}
        id="service-reform"
        type="application/ld+json"
      />
      <Hero
        image={{ src: '/images/kitchen.jpg', alt: 'リフォーム' }}
        overlayOpacity="40"
        subtitle="Reform"
        title="リフォーム"
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
