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
  description: '今、つくるエネルギーが、明日の暮らしを豊かにする。',
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
      <body className="antialiased overflow-y-auto">
        <Header />
        <main>{children}</main>
        <footer>
          <div className="h-[300px] bg-[#f2f4f3] p-10">Footer</div>
        </footer>
      </body>
    </html>
  )
}
