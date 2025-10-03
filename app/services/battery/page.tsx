import type { Metadata } from 'next'
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
      url: '/battery.jpg',
    },
  },
}

export default function BatteryPage() {
  return (
    <>
      <Hero
        image={{ src: '/battery.jpg', alt: '蓄電池' }}
        subtitle="Battery"
        title="蓄電池"
      />
      <section className="wrapper">
        <_Battery />
      </section>
    </>
  )
}
