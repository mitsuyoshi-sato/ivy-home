import './globals.css'

import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
})

const notosansjp = Noto_Sans_JP({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-notosansjp',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ivyho.me'),
  title: {
    default:
      '株式会社アイビーホーム | 愛媛県の太陽光・蓄電池・エコキュート・シロアリ対策・リフォーム',
    template: '%s | 株式会社アイビーホーム | 愛媛県',
  },
  description:
    '愛媛県の太陽光・蓄電池・エコキュート・シロアリ対策・リフォーム。「未来の暮らしを、つくる。」をテーマに、お客様の快適で安心な毎日を、エコで安全な住まいとともにサポートします。',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    title:
      '株式会社アイビーホーム | 愛媛県の太陽光・蓄電池・エコキュート・シロアリ対策・リフォーム',
    description:
      '愛媛県の太陽光・蓄電池・エコキュート・シロアリ対策・リフォーム。「未来の暮らしを、つくる。」をテーマに、お客様の快適で安心な毎日を、エコで安全な住まいとともにサポートします。',
    type: 'website',
    images: [
      {
        url: '/images/ivy-home.png',
        width: 1200,
        height: 630,
        alt: '株式会社アイビーホーム',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${notosansjp.variable}`} lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  )
}