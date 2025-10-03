import type { Metadata } from 'next'
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
      url: '/bathroom.jpg',
    },
  },
}

export default function EcoCutePage() {
  return (
    <>
      <Hero imageSrc="/bathroom.jpg" subtitle="EcoCute" title="エコキュート" />
      <div className="wrapper">
        <_EcoCute />
      </div>
    </>
  )
}
