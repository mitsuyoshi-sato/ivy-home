import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumb } from '@/components/Breadcrumb'
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
      url: '/ivy-home.svg',
    },
  },
}

export default function Recruit() {
  return (
    <>
      <Hero
        image={{ src: 'walk.jpg', alt: '' }}
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
