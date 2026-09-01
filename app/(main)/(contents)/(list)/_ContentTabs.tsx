'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef } from 'react'

import { configContent, kindsContent } from '@/app/data/content'
import { motion } from '@/app/motion'
import { cn } from '@/lib/utils'

export const _ContentTabs = () => {
  const pathname = usePathname()
  const refContainer = useRef<HTMLDivElement>(null)
  const refIndicator = useRef<HTMLDivElement>(null)
  const refPathname = useRef<string | null>(null)

  useLayoutEffect(() => {
    const c = refContainer.current
    const i = refIndicator.current
    const indexCurrent = kindsContent.findIndex((k) =>
      pathname.startsWith(configContent[k].path),
    )

    if (c && i && indexCurrent >= 0) {
      const first = c.children[0] as HTMLElement
      const current = c.children[indexCurrent] as HTMLElement
      const translateX = `${current.offsetLeft - first.offsetLeft}px`

      if (refPathname.current) {
        motion.to(i, 0.5, 'out', { translateX })
      } else {
        motion.set(i, { translateX })
      }

      refPathname.current = pathname
    }
  }, [pathname])

  return (
    <nav aria-label="記事カテゴリー" className="wrapper mt-12 py-0">
      <div
        ref={refContainer}
        className="relative grid grid-cols-3 rounded-full border border-gray-100 bg-gray-100 p-1 shadow-sm"
      >
        {kindsContent.map((k) => (
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
