import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { _TermiteControl } from './_TermiteControl'

export const metadata: Metadata = {
  title: 'シロアリ駆除',
  description:
    '住宅を食害から守る専門サービス。大切な家の資産価値を守るため、プロの技術でシロアリを徹底駆除します。',
  openGraph: {
    title: 'シロアリ駆除 / 株式会社アイビーホーム',
    description:
      '住宅を食害から守る専門サービス。大切な家の資産価値を守るため、プロの技術でシロアリを徹底駆除します。',
    images: {
      url: '/family.jpg',
    },
  },
}

export default function TermiteControlPage() {
  return (
    <>
      <Hero
        imageSrc="/family.jpg"
        subtitle="Termite Control"
        title="シロアリ駆除"
      />
      <section className="wrapper">
        <_TermiteControl />
      </section>
    </>
  )
}
