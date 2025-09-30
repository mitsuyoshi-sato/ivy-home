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
  const items = [
    { href: '/', label: 'Home' },
    {
      href: '/company',
      label: '会社情報',
      subs: [
        { href: '#policy', label: '理念', icon: 'idea' },
        { href: '#info', label: '会社概要', icon: 'info' },
      ],
    },
    {
      href: '/services',
      label: '事業内容',
      subs: [
        { href: '#solar-panel', label: '太陽光パネル', icon: 'sun' },
        { href: '#battery-storage', label: '蓄電池', icon: 'battery' },
        { href: '#eco-cute', label: 'エコキュート', icon: 'bath' },
        { href: '#all-electric', label: 'オール電化', icon: 'plugZap' },
        { href: '#exterior-wall', label: '外壁塗装', icon: 'paintbrush' },
      ],
    },
    { href: '/news', label: 'ニュース' },
    {
      href: '/recruit',
      label: '採用情報',
      subs: [
        { href: '#sales', label: 'セールス', icon: 'briefcase' },
        { href: '#back-office', label: 'バックオフィス', icon: 'fileText' },
        {
          href: '#marketing',
          label: 'マーケティング',
          icon: 'chartNoAxesCombined',
        },
      ],
    },
  ]

  return (
    <html lang="ja" className={`${inter.variable} ${notosansjp.variable}`}>
      <body className="antialiased overflow-y-auto">
        <Header items={items} />
        <main>{children}</main>
        <footer>
          <div className="bg-cleam">
            <div className="wrapper flex gap-40 items-start">
              <img
                src="/ivy-home.svg"
                alt="logo"
                className="w-[120px] -translate-y-[10px]"
              />
              <div className="flex gap-20">
                {items.map((item) => (
                  <__Section
                    key={item.href}
                    title={item.label}
                    href={item.href}
                    links={item.subs || []}
                  />
                ))}
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
  href: string
  links: { href: string; label: string; icon?: string }[]
}) {
  return (
    <div className="flex flex-col gap-6">
      <Link
        href={props.href}
        className="font-bold text-ivy8 text-xl hover:text-dark8 cursor-pointer"
      >
        {props.title}
      </Link>
      <div className="text-dark5 flex flex-col gap-4 text-sm font-medium">
        {props.links.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-black">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
