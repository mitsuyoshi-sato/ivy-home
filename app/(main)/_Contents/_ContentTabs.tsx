'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useAnimation } from '@/app/(layout)/AnimationContext'
import { configContent } from '@/app/data/contentData'
import { cn } from '@/lib/utils'

export const _ContentTabs = () => {
  const pathname = usePathname()
  const { refSkipHeroAnimation } = useAnimation()

  return (
    <nav aria-label="記事カテゴリー" className="wrapper py-0">
      <div className="grid grid-cols-3 rounded-full border border-ivy6 bg-white p-1 shadow-sm">
        {(['news', 'column', 'work'] as const).map((k) => (
          <Link
            key={k}
            aria-current={
              pathname.startsWith(configContent[k].path) ? 'page' : undefined
            }
            className={cn(
              'rounded-full px-2 py-3 text-center text-sm font-semibold transition-colors md:text-base',
              pathname.startsWith(configContent[k].path) &&
                'bg-ivy6 text-white shadow-sm',
              !pathname.startsWith(configContent[k].path) &&
                'text-dark5 hover:bg-ivy1 hover:text-ivy8',
            )}
            href={configContent[k].path}
            onClick={() => {
              if (!pathname.startsWith(configContent[k].path)) {
                refSkipHeroAnimation.current = configContent[k].path
              }
            }}
            scroll={false}
          >
            {configContent[k].label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
