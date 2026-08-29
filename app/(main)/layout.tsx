import '../globals.css'

import Link from 'next/link'

import { cn } from '@/lib/utils'

import _OpeningAnimation from '../(layout)/_OpeningAnimation'
import { AnimationProvider } from '../(layout)/AnimationContext'
import { Header } from '../(layout)/Header'

const MainLayout = (props: { children: React.ReactNode }) => {
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
      label: 'コンテンツ',
      matches: ['/columns', '/works'],
      subs: [
        { href: '/news', label: 'ニュース', icon: 'newspaper' },
        { href: '/columns', label: 'お役立ち情報', icon: 'lightbulb' },
        { href: '/works', label: '施工事例', icon: 'briefcase' },
      ],
    },
    {
      href: '/recruit',
      label: '採用情報',
    },
  ]

  return (
    <AnimationProvider>
      <Header items={items} />
      <main>
        <_OpeningAnimation>{props.children}</_OpeningAnimation>
      </main>
      <footer>
        <div className="bg-cleam py-10">
          <div className="wrapper flex flex-col items-start gap-6 md:flex-row md:gap-20 lg:gap-40 xl:w-full xl:justify-between">
            <div className="flex flex-col md:translate-y-[-10px]">
              <img
                alt="株式会社アイビーホーム"
                className="w-24 shrink-0 md:w-[120px]"
                src="/images/ivy-home.svg"
              />
              <div className="-translate-y-2 text-xs font-medium text-gray-600">
                株式会社アイビーホーム
              </div>
            </div>
            <div className="grid w-full flex-1 grid-cols-2 gap-x-10 gap-y-2 md:gap-y-8 lg:gap-x-14 xl:grid-cols-5">
              {items.map((item) => (
                <div
                  key={item.href}
                  className={cn(
                    'flex flex-col gap-6',
                    item.subs && 'col-span-2 xl:col-span-1',
                  )}
                >
                  <Link
                    className="cursor-pointer text-xl font-bold text-ivy8 hover:opacity-70"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                  {item.subs && (
                    <div className="grid grid-cols-2 gap-4 font-medium text-dark5 md:grid-cols-3 xl:grid-cols-1">
                      {item.subs.map((link) => (
                        <Link
                          key={link.label}
                          className="hover:text-black"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </AnimationProvider>
  )
}

export default MainLayout
