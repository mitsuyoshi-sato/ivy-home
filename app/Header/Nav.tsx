'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useMemo, useRef } from 'react'

import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

import { motion } from '../motion'

export const Nav = (props: {
  items: {
    href: string
    label: string
    subs?: { href: string; label: string; icon?: string }[]
  }[]
}) => {
  const pathname = usePathname()
  const refIndicator = useRef<HTMLDivElement>(null)
  const refContainer = useRef<HTMLDivElement>(null)

  const activeIndex = useMemo(() => {
    if (pathname === '/') return 0
    const i = props.items
      .map((t, idx) => ({ idx, href: t.href || '' }))
      .sort((a, b) => b.href.length - a.href.length)
      .find(({ href }) =>
        href === '/' ? pathname === '/' : pathname?.startsWith(href),
      )?.idx
    return i ?? 0
  }, [pathname, props.items])

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
      className="relative hidden items-center rounded-full p-1 text-sm font-semibold md:flex"
    >
      {props.items.map((t, i) => (
        <Tab
          key={t.href}
          activeIndex={activeIndex}
          href={t.href}
          i={i}
          label={t.label}
          subs={t.subs}
        />
      ))}
      <div
        ref={refIndicator}
        className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-ivy6 shadow-lg"
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
  const refContainer = useRef<HTMLDivElement>(null)
  const adjustModalPosition = () => {
    const modal = refList.current
    const container = refContainer.current
    if (!modal || !container) return

    const modalRect = modal.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    let leftPosition = '0px'
    let topPosition = '100%'
    let transformOrigin = 'top left'

    // 右端チェック
    if (modalRect.right > viewportWidth) {
      leftPosition = 'auto'
      transformOrigin = 'top right'
    }

    // 下端チェック
    if (modalRect.bottom > viewportHeight) {
      topPosition = 'auto'
      if (leftPosition === 'auto') {
        transformOrigin = 'bottom right'
      } else {
        transformOrigin = 'bottom left'
      }
    }

    // 両方の境界に接触している場合
    if (modalRect.right > viewportWidth && modalRect.bottom > viewportHeight) {
      leftPosition = 'auto'
      topPosition = 'auto'
      transformOrigin = 'bottom right'
    }

    modal.style.left = leftPosition
    modal.style.right = leftPosition === 'auto' ? '0px' : 'auto'
    modal.style.top = topPosition
    modal.style.bottom = topPosition === 'auto' ? '100%' : 'auto'
    modal.style.transformOrigin = transformOrigin
  }

  return (
    <div
      ref={refContainer}
      className="relative inline-flex"
      onMouseEnter={async () => {
        const l = refList.current
        const c = refChevron.current
        if (l && c) {
          motion.set(l, { display: 'block' })
          await motion.delay(0)
          adjustModalPosition()
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
        className={cn(
          'z-10 cursor-pointer rounded-full px-4 py-2 text-center text-dark4',
          props.activeIndex === props.i
            ? 'text-white'
            : 'cursor-pointer text-dark5 hover:text-dark8',
          props.subs && 'flex items-center gap-1 pr-2',
        )}
        href={props.href}
      >
        {props.label}
        {props.subs && (
          <div ref={refChevron}>
            <ChevronDown className="size-4" />
          </div>
        )}
      </Link>
      {props.subs && (
        <div
          ref={refList}
          className="absolute left-0 top-full z-50 flex w-[180px] flex-col whitespace-nowrap rounded-lg border border-gray-300 bg-white p-1 text-sm text-dark5 shadow-md"
          style={{
            opacity: 0,
            transform: 'translateY(-10px)',
            display: 'none',
          }}
        >
          {props.subs.map((sub) => (
            <Link
              key={sub.href}
              className="flex shrink-0 items-center gap-2 rounded-md px-3 py-2 hover:cursor-pointer hover:bg-ivy2/30"
              href={sub.href}
            >
              {sub.icon && (
                <span className="shrink-0">
                  <Icon name={sub.icon} />
                </span>
              )}
              <span>{sub.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
