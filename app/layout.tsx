import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { Header } from './Header'
import _OpeningAnimation from './_OpeningAnimation'
import { AnimationProvider } from './AnimationContext'

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
    icon: '/favicon.png',
  },
  openGraph: {
    images: {
      url: '/ivy-home.svg',
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
        { href: '/services', label: 'Top', icon: 'layers' },
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
      label: 'お知らせ',
    },
    {
      href: '/recruit',
      label: '採用情報',
    },
  ]

  return (
    <html lang="ja" className={`${inter.variable} ${notosansjp.variable}`}>
      <body className="antialiased">
        <AnimationProvider>
          <Header items={items} />
          <main>
            <_OpeningAnimation>{children}</_OpeningAnimation>
          </main>
          <footer>
            <div className="bg-cleam">
              <div className="wrapper flex gap-40 items-start">
                <img
                  src="/ivy-home.svg"
                  alt="アイビーホームのロゴ"
                  className="w-[120px] -translate-y-[10px]"
                />
                <div className="flex gap-20">
                  {items.map((item) => (
                    <__FooterSection
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
