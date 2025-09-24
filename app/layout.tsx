import type { Metadata } from 'next'
import './globals.css'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { Header } from './Header'

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
  description: '株式会社アイビーホーム',
  openGraph: {
    images: '/',
    title: '株式会社アイビーホーム',
  },
  title: {
    default: '株式会社アイビーホーム',
    template: '%s / 株式会社アイビーホーム',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('描画された')
  return (
    <html lang="ja" className={`${inter.variable} ${notosansjp.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="px-4 py-[60px] md:px-8 md:py-[78px] lg:px-24">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  )
}
