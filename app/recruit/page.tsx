import type { Metadata } from 'next'
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
      url: '/ivy-home.png',
    },
  },
}

export default function Recruit() {
  return <_RecruitSection />
}
