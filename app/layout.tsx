import './globals.css'

import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'

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
  metadataBase: new URL('https://www.ivyho.me'),
  title: {
    default: '株式会社アイビーホーム',
    template: '%s / 株式会社アイビーホーム',
  },
  description:
    '太陽光・蓄電池・エコキュート・シロアリ対策・リフォーム。「未来の暮らしを、つくる。」をテーマに、お客様の快適で安心な毎日を、エコで安全な住まいとともにサポートします。',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    title: '株式会社アイビーホーム',
    description:
      '太陽光・蓄電池・エコキュート・シロアリ対策・リフォーム。「未来の暮らしを、つくる。」をテーマに、お客様の快適で安心な毎日を、エコで安全な住まいとともにサポートします。',
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
    <html className={`${inter.variable} ${notosansjp.variable}`} lang="ja">
      <body className="antialiased">
        <AnimationProvider>
          <Header items={items} />
          <main>
            <_OpeningAnimation>{children}</_OpeningAnimation>
          </main>
          <footer>
            <div className="bg-cleam py-10">
              <div className="wrapper flex flex-col items-start gap-6 md:flex-row md:gap-20 lg:gap-40 xl:w-full xl:justify-between">
                <img
                  alt="アイビーホームのロゴ"
                  className="w-24 shrink-0 md:w-[120px] md:translate-y-[-10px]"
                  src="/images/ivy-home.svg"
                />
                <div className="grid w-full flex-1 grid-cols-2 gap-x-10 gap-y-2 md:gap-y-8 lg:gap-x-14 xl:grid-cols-5">
                  {itemsWithoutSubs.map((item) => (
                    <__FooterSection
                      key={item.href}
                      href={item.href}
                      links={[]}
                      title={item.label}
                    />
                  ))}
                  {itemWithSubs && (
                    <div className="col-span-2 xl:col-span-1">
                      <Link
                        className="cursor-pointer text-xl font-bold text-ivy8 hover:opacity-70"
                        href={itemWithSubs.href}
                      >
                        {itemWithSubs.label}
                      </Link>
                      <div className="mt-4 grid grid-cols-2 gap-4 font-medium text-dark5 md:grid-cols-3 xl:grid-cols-1">
                        {itemWithSubs.subs!.map((link) => (
                          <Link
                            key={link.label}
                            className="hover:text-black"
                            href={link.href}
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
        className="cursor-pointer text-xl font-bold text-ivy8 hover:opacity-70"
        href={props.href}
      >
        {props.title}
      </Link>
      <div className="flex flex-col gap-4 text-sm font-medium text-dark5">
        {props.links.map((link) => (
          <Link key={link.label} className="hover:text-black" href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
