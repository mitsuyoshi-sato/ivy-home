import type { Metadata } from 'next'
import './globals.css'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'

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
  return (
    <html lang="ja" className={`${inter.variable} ${notosansjp.variable}`}>
      <body className="antialiased ">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b w-full">
          <nav className="py-4 px-4 w-full">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                アイビーホーム
              </Link>
              <div className="md:flex hidden items-center gap-4">
                <Link href="/about">会社概要</Link>
                <Link href="/services">サービス</Link>
                <Link href="/contact">お問い合わせ</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="px-4 py-8 md:px-8 lg:px-16 xl:px-24">{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
