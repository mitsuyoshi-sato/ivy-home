import type { Metadata } from 'next'
import Script from 'next/script'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Hero } from '@/components/Hero'

import { _RecruitSection } from './_RecruitSection'

export const metadata: Metadata = {
  title: '採用情報',
  description:
    '株式会社アイビーホームの採用情報をご紹介します。私たちと一緒に、お客様の暮らしを支えるサービスを提供しませんか。',
  openGraph: {
    title: '採用情報 / 株式会社アイビーホーム',
    description:
      '株式会社アイビーホームの採用情報をご紹介します。私たちと一緒に、お客様の暮らしを支えるサービスを提供しませんか。',
    images: {
      url: '/images/ivy-home.svg',
    },
  },
}

export default function Recruit() {
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
                name: '採用情報',
                item: 'https://www.ivyho.me/recruit',
              },
            ],
          }),
        }}
        id="breadcrumb-recruit"
        type="application/ld+json"
      />
      <Hero
        image={{ src: '/images/walk.jpg', alt: '' }}
        subtitle="Recuruit"
        title="採用情報"
      />
      <Breadcrumb
        items={[
          { title: 'ホーム', href: '/', icon: 'home' },
          {
            title: '採用情報',
            href: '/recruit',
            icon: 'footprints',
            current: true,
          },
        ]}
      />
      <_RecruitSection />
    </>
  )
}
