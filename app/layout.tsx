import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Inter, Noto_Sans_JP } from 'next/font/google'

import _OpeningAnimation from './(layout)/_OpeningAnimation'
import { AnimationProvider } from './(layout)/AnimationContext'
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
  title: {
    default: '株式会社アイビーホーム',
    template: '%s / 株式会社アイビーホーム',
  },
  description: '今、つくるエネルギーが、明日の暮らしを豊かにする。',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    images: {
      url: '/images/ivy-home.svg',
    },
    title: '株式会社アイビーホーム',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/company',
      label: '会社情報',
    },
    {
      href: '/services',
      label: '事業内容',
      subs: [
        { href: '/services', label: 'Top', icon: 'briefcase' },
        { href: '/services/solar-panel', label: '太陽光パネル', icon: 'sun' },
        { href: '/services/battery', label: '蓄電池', icon: 'battery' },
        { href: '/services/eco-cute', label: 'エコキュート', icon: 'bath' },
        {
          href: '/services/termite-control',
          label: 'シロアリ駆除',
          icon: 'sprayCan',
        },
        {
          href: '/services/reform',
          label: 'リフォーム',
          icon: 'home',
        },
      ],
    },
    {
      href: '/news',
      label: 'ニュース',
    },
    {
      href: '/recruit',
      label: '採用情報',
    },
  ]

  const itemWithSubs = items.find(
    (i) => Array.isArray(i.subs) && i.subs.length > 0,
  )
  const itemsWithoutSubs = items.filter(
    (i) => !Array.isArray(i.subs) || i.subs.length === 0,
  )

  return (
    <html lang="ja" className={`${inter.variable} ${notosansjp.variable}`}>
      <body className="antialiased">
        <AnimationProvider>
          <Header items={items} />
          <main>
            <_OpeningAnimation>{children}</_OpeningAnimation>
          </main>
          <footer>
            <div className="bg-cleam py-10">
              <div className="wrapper flex flex-col items-start gap-10 md:flex-row md:gap-20 lg:gap-40 xl:w-full xl:justify-between">
                <img
                  src="/images/ivy-home.svg"
                  alt="アイビーホームのロゴ"
                  className="w-24 md:w-[120px] md:-translate-y-[10px] shrink-0"
                />
                <div className="grid w-full flex-1 grid-cols-2 xl:grid-cols-5 gap-x-10 gap-y-8 lg:gap-x-14">
                  {itemsWithoutSubs.map((item) => (
                    <__FooterSection
                      key={item.href}
                      title={item.label}
                      href={item.href}
                      links={[]}
                    />
                  ))}
                  {itemWithSubs && (
                    <div className="col-span-2 xl:col-span-1">
                      <Link
                        href={itemWithSubs.href}
                        className="font-bold text-ivy8 text-xl hover:opacity-70 cursor-pointer"
                      >
                        {itemWithSubs.label}
                      </Link>
                      <div className="mt-6 text-dark5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-1 gap-4 font-medium">
                        {itemWithSubs.subs!.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="hover:text-black"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </footer>
        </AnimationProvider>
      </body>
    </html>
  )
}

function __FooterSection(props: {
  title: string
  href: string
  links: { href: string; label: string; icon?: string }[]
}) {
  return (
    <div className="flex flex-col gap-6">
      <Link
        href={props.href}
        className="font-bold text-ivy8 text-xl hover:opacity-70 cursor-pointer"
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
