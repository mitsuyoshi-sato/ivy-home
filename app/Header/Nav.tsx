'use client'

import Link from 'next/link'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion } from '../motion'
import { ChevronDown } from 'lucide-react'
import { Icon } from '@/components/ui/icon'

export const Nav = () => {
  const pathname = usePathname()
  const refIndicator = useRef<HTMLDivElement>(null)
  const refContainer = useRef<HTMLDivElement>(null)

  const tabs = [
    { href: '/', label: 'Home' },
    {
      href: '/company',
      label: '会社情報',
      subs: [
        { href: '#policy', label: '理念', icon: 'idea' },
        { href: '#services', label: '事業内容', icon: 'building' },
        { href: '#info', label: '会社概要', icon: 'info' },
      ],
    },
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
      const target = (tab.querySelector('a') as HTMLElement) ?? tab
      const cRect = container.getBoundingClientRect()
      const tRect = target.getBoundingClientRect()
      motion.to(el, 0.5, 'out', {
        left: tRect.left - cRect.left + 'px',
        width: tRect.width + 'px',
      })
    })()
  }, [activeIndex])

  return (
    <div
      ref={refContainer}
      className="font-semibold text-sm md:flex hidden items-center relative rounded-full p-1 h-fit"
    >
      {tabs.map((t, i) => (
        <Tab
          key={t.href}
          href={t.href}
          label={t.label}
          activeIndex={activeIndex}
          i={i}
          subs={t.subs}
        />
      ))}
      <div
        className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-[#262626]"
        ref={refIndicator}
        style={{ width: '0px', left: '0px' }}
      />
    </div>
  )
}

const Tab = (props: {
  href: string
  label: string
  activeIndex: number
  i: number
  subs?: { href: string; label: string; icon?: string }[]
}) => {
  const refList = useRef<HTMLDivElement>(null)
  const refChevron = useRef<HTMLDivElement>(null)
  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => {
        const l = refList.current
        const c = refChevron.current
        if (l && c) {
          motion.set(l, { display: 'block' })
          motion.to(l, 0.5, 'out', {
            opacity: 1,
            translateY: '0px',
          })
          motion.to(c, 0.5, 'out', {
            rotate: '180deg',
          })
        }
      }}
      onMouseLeave={async () => {
        const l = refList.current
        const c = refChevron.current
        if (l && c) {
          await motion.to(l, 0.2, 'out', {
            opacity: 0,
            translateY: '-10px',
          })
          motion.set(l, { display: 'none' })
          motion.to(c, 0.2, 'out', {
            rotate: '0deg',
          })
        }
      }}
    >
      <Link
        href={props.href}
        className={cn(
          'px-4 py-2 rounded-full z-10 cursor-pointer text-center',
          props.activeIndex === props.i
            ? 'text-white'
            : 'text-gray-700 cursor-pointer hover:text-gray-900',
          props.subs && 'flex items-center gap-1 pr-2',
        )}
      >
        {props.label}
        {props.subs && (
          <div ref={refChevron}>
            <ChevronDown className="w-4 h-4" />
          </div>
        )}
      </Link>
      {props.subs && (
        <div
          ref={refList}
          className="absolute left-0 top-full w-[180px] bg-white rounded-lg flex flex-col p-1 whitespace-nowrap text-sm text-gray-600 border border-gray-300 shadow-md"
          style={{
            opacity: 0,
            transform: 'translateY(-10px)',
            display: 'none',
          }}
        >
          {props.subs.map((sub) => (
            <div
              key={sub.href}
              className="hover:cursor-pointer shrink-0 py-2 px-3 hover:bg-gray-100 rounded-sm"
            >
              <a href={sub.href} className="flex items-center gap-2">
                {sub.icon && (
                  <span className="shrink-0">
                    <Icon name={sub.icon} />
                  </span>
                )}
                <span>{sub.label}</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
