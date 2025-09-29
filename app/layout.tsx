import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { Header } from './Header'
import { Leaf } from 'lucide-react'

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
          <div className="bg-cleam">
            <div className="wrapper flex gap-40">
              <div className="flex text-xl font-bold">
                <Leaf
                  size={24}
                  className="-translate-y-[10px] translate-x-[10px] text-green-800"
                  fill="#86EFAC"
                />
                <div>Ivy Home</div>
              </div>
              <div className="flex gap-20">
                <__Section
                  title="Home"
                  links={[
                    { href: '/', text: 'アイビーホームの強み' },
                    { href: '/', text: '私たちの提供する価値' },
                    { href: '/', text: '事業内容をみる' },
                  ]}
                />
                <__Section
                  title="Company"
                  links={[
                    { href: '/', text: '理念' },
                    { href: '/', text: '会社概要' },
                  ]}
                />
                <__Section
                  title="Services"
                  links={[
                    { href: '/', text: '太陽光パネル' },
                    { href: '/', text: '蓄電池' },
                    { href: '/', text: 'エコキュート' },
                    { href: '/', text: 'オール電化' },
                    { href: '/', text: '外壁塗装' },
                  ]}
                />
                <__Section title="Articles" links={[]} />
                <__Section title="Recruit" links={[]} />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

function __Section(props: {
  title: string
  links: { href: string; text: string }[]
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="font-bold text-ivy8 text-xl hover:text-dark8 cursor-pointer">
        {props.title}
      </div>
      <div className="text-dark5 flex flex-col gap-4 text-sm font-medium">
        {props.links.map((link) => (
          <Link key={link.text} href={link.href} className="hover:text-dark8">
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
