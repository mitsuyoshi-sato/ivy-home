'use client'

import Link from 'next/link'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion } from '../motion'

export const Nav = () => {
  const pathname = usePathname()
  const refIndicator = useRef<HTMLDivElement>(null)
  const refContainer = useRef<HTMLDivElement>(null)

  const tabs = [
    { href: '/', label: 'Home' },
    { href: '/company', label: '会社情報' },
    { href: '/achievements', label: '実績' },
    { href: '/recruit', label: '採用情報' },
  ]

  const activeIndex = useMemo(() => {
    if (pathname === '/') return 0
    const i = tabs
      .map((t, idx) => ({ idx, href: t.href }))
      .sort((a, b) => b.href.length - a.href.length)
      .find(({ href }) =>
        href === '/' ? pathname === '/' : pathname?.startsWith(href),
      )?.idx
    return i ?? 0
  }, [pathname])

  useLayoutEffect(() => {
    ;(async () => {
      const el = refIndicator.current
      const container = refContainer.current
      if (!el || !container) return
      const tab = container.children[activeIndex] as HTMLElement | undefined
      if (!tab) return
      motion.to(el, 0.5, 'out', {
        left: tab.offsetLeft + 'px',
        width: tab.offsetWidth + 'px',
      })
    })()
  }, [activeIndex])

  return (
    <div
      ref={refContainer}
      className="font-semibold text-sm md:flex hidden items-center relative rounded-full p-1 h-fit"
    >
      {tabs.map((t, i) => (
        <Link
          key={t.href}
          href={t.href}
          className={cn(
            'px-4 py-2 rounded-full z-10 cursor-pointer text-center',
            activeIndex === i
              ? 'text-white'
              : 'text-gray-700 cursor-pointer hover:text-gray-900',
          )}
        >
          {t.label}
        </Link>
      ))}
      <div
        className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-[#262626]"
        ref={refIndicator}
        style={{ width: '0px', left: '0px' }}
      />
    </div>
  )
}
