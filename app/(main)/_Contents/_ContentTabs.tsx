'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef } from 'react'

import { useAnimation } from '@/app/(layout)/AnimationContext'
import { configContent } from '@/app/data/contentData'
import { motion } from '@/app/motion'
import { cn } from '@/lib/utils'

export const _ContentTabs = () => {
  const pathname = usePathname()
  const { refContentTabFromPath, refSkipHeroAnimation } = useAnimation()
  const refContainer = useRef<HTMLDivElement>(null)
  const refIndicator = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const c = refContainer.current
    const i = refIndicator.current
    const pathFrom = refContentTabFromPath.current
    const indexCurrent = __kinds.findIndex((k) =>
      pathname.startsWith(configContent[k].path),
    )
    const indexFrom = __kinds.findIndex((k) =>
      pathFrom?.startsWith(configContent[k].path),
    )

    if (c && i && indexCurrent >= 0) {
      const first = c.children[0] as HTMLElement
      const current = c.children[indexCurrent] as HTMLElement

      if (indexFrom >= 0 && indexFrom !== indexCurrent) {
        const from = c.children[indexFrom] as HTMLElement
        motion.set(i, {
          translateX: `${from.offsetLeft - first.offsetLeft}px`,
        })
        void (async () => {
          await motion.to(i, 0.5, 'out', {
            translateX: `${current.offsetLeft - first.offsetLeft}px`,
          })
          if (refContentTabFromPath.current === pathFrom) {
            refContentTabFromPath.current = null
          }
        })()
      } else {
        motion.set(i, {
          translateX: `${current.offsetLeft - first.offsetLeft}px`,
        })
      }
    }
  }, [pathname, refContentTabFromPath])

  return (
    <nav aria-label="記事カテゴリー" className="wrapper py-0">
      <div
        ref={refContainer}
        className="relative grid grid-cols-3 rounded-full border border-gray-100 bg-gray-100 p-1 shadow-sm"
      >
        {__kinds.map((k) => (
          <Link
            key={k}
            aria-current={
              pathname.startsWith(configContent[k].path) ? 'page' : undefined
            }
            className={cn(
              'relative z-10 rounded-full px-2 py-3 text-center text-sm font-semibold transition-colors md:text-base',
              pathname.startsWith(configContent[k].path) && 'text-white',
              !pathname.startsWith(configContent[k].path) && 'text-dark5',
            )}
            href={configContent[k].path}
            onClick={() => {
              if (!pathname.startsWith(configContent[k].path)) {
                refContentTabFromPath.current = pathname
                refSkipHeroAnimation.current = configContent[k].path
              }
            }}
            scroll={false}
          >
            {configContent[k].label}
          </Link>
        ))}
        <div
          ref={refIndicator}
          aria-hidden="true"
          className="absolute inset-y-1 left-1 z-0 rounded-full bg-ivy6 shadow-sm"
          style={{
            transform: 'translateX(0px)',
            width: 'calc((100% - 8px) / 3)',
          }}
        />
      </div>
    </nav>
  )
}

const __kinds = ['news', 'column', 'work'] as const
