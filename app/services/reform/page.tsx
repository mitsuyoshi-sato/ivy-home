import type { Metadata } from 'next'
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
      <Hero imageSrc="/cooking2.jpg" subtitle="Reform" title="リフォーム" />
      <section className="wrapper">
        <_Reform />
      </section>
    </>
  )
}
