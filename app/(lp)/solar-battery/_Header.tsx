'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { motion } from '@/app/motion'

import { _Logo } from './_Logo'

const itemsNavigation = [
  { href: '#strengths', label: '私たちの強み' },
  { href: '#solar-benefits', label: '太陽光のメリット' },
  { href: '#battery-benefits', label: '蓄電池のメリット' },
  { href: '#works', label: '施工事例' },
  { href: '#flow', label: '導入の流れ' },
  { href: '#faq', label: 'よくあるご質問' },
] as const

export const _Header = () => {
  const [stateMenu, setMenu] = useState(false)
  const refHeader = useRef<HTMLElement>(null)
  const refHeaderContent = useRef<HTMLDivElement>(null)
  const refMenuOpen = useRef(false)

  useEffect(() => {
    const e = refHeaderContent.current
    const h = refHeader.current
    const v = window.visualViewport
    let frameId: number | null = null
    let direction: -1 | 0 | 1 = 0
    let distance = 0
    let isHidden = false
    let lastY = window.scrollY
    let offsetViewportTop = -1

    if (e && h) {
      const updateHeader = () => {
        const currentY = window.scrollY
        const delta = currentY - lastY
        let nextDirection: -1 | 0 | 1 = 0
        let nextViewportTop = 0

        if (window.innerWidth < 768 && v) {
          nextViewportTop = v.offsetTop
        }
        if (nextViewportTop !== offsetViewportTop) {
          offsetViewportTop = nextViewportTop
          h.style.top = `${offsetViewportTop}px`
        }

        if (delta > 0) {
          nextDirection = 1
        }
        if (delta < 0) {
          nextDirection = -1
        }
        if (nextDirection !== 0) {
          if (nextDirection !== direction) {
            direction = nextDirection
            distance = 0
          }
          distance += Math.abs(delta)
        }

        let nextHidden = isHidden

        if (
          window.innerWidth >= 768 ||
          currentY <= 48 ||
          refMenuOpen.current ||
          (direction === -1 && distance >= 18)
        ) {
          nextHidden = false
        }
        if (
          window.innerWidth < 768 &&
          currentY > 80 &&
          !refMenuOpen.current &&
          direction === 1 &&
          distance >= 28
        ) {
          nextHidden = true
        }

        if (nextHidden !== isHidden) {
          isHidden = nextHidden

          if (isHidden) {
            motion.to(e, 0.3, 'out', { translateY: '-100%' })
          }
          if (!isHidden) {
            motion.to(e, 0.3, 'out', { translateY: '0px' })
          }
        }

        lastY = currentY
        frameId = null
      }

      const onViewportChange = () => {
        if (frameId === null) {
          frameId = requestAnimationFrame(updateHeader)
        }
      }

      updateHeader()
      v?.addEventListener('resize', onViewportChange)
      v?.addEventListener('scroll', onViewportChange)
      window.addEventListener('resize', onViewportChange)
      window.addEventListener('scroll', onViewportChange, { passive: true })

      return () => {
        v?.removeEventListener('resize', onViewportChange)
        v?.removeEventListener('scroll', onViewportChange)
        window.removeEventListener('resize', onViewportChange)
        window.removeEventListener('scroll', onViewportChange)
        if (frameId !== null) {
          cancelAnimationFrame(frameId)
        }
      }
    }
  }, [])

  const onMenuClose = () => {
    refMenuOpen.current = false
    setMenu(false)
  }

  return (
    <header ref={refHeader} className="fixed inset-x-0 top-0 z-50">
      <div ref={refHeaderContent} className="will-change-transform">
        <div className="relative z-10 mx-auto flex h-16 w-full items-center justify-between gap-8 px-4 sm:px-5 xl:h-20 xl:px-8">
          <div className="ml-[11px]">
            <_Logo onClick={onMenuClose} />
          </div>

          <nav
            aria-label="LP内ナビゲーション"
            className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          >
            {itemsNavigation.map((n) => (
              <a
                key={n.href}
                className="whitespace-nowrap rounded-sm text-[11px] font-semibold tracking-[0.02em] text-dark8 transition-colors hover:text-ivy6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 2xl:text-xs"
                href={n.href}
              >
                {n.label}
              </a>
            ))}
            <a
              className="backdrop-blur-xs whitespace-nowrap rounded-md border border-ivy8 bg-ivy8/90 px-5 py-4 text-[11px] font-semibold tracking-[0.02em] text-white shadow-sm transition-colors hover:bg-ivy8/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 2xl:px-6 2xl:text-xs"
              href="#contact"
            >
              無料相談・シミュレーション
            </a>
          </nav>

          <button
            aria-controls="lp-mobile-navigation"
            aria-expanded={stateMenu}
            aria-label="メニューを切り替える"
            className="relative z-20 flex size-11 items-center justify-center rounded-full border border-ivy8/15 bg-white/80 text-ivy8 shadow-sm backdrop-blur-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 xl:hidden"
            onClick={() => {
              setMenu((p) => {
                refMenuOpen.current = !p
                return !p
              })
            }}
            type="button"
          >
            {!stateMenu && <Menu aria-hidden="true" className="size-5" />}
            {stateMenu && <X aria-hidden="true" className="size-5" />}
          </button>
        </div>

        {stateMenu && (
          <nav
            aria-label="モバイル用LP内ナビゲーション"
            className="mx-4 rounded-2xl border border-ivy8/10 bg-white/95 p-5 shadow-xl backdrop-blur-lg sm:mx-8 xl:hidden"
            id="lp-mobile-navigation"
          >
            <div className="flex flex-col divide-y divide-gray-200">
              {itemsNavigation.map((n) => (
                <a
                  key={n.href}
                  className="py-4 text-sm font-semibold text-dark8 transition-colors hover:text-ivy6 focus-visible:text-ivy6 focus-visible:outline-none"
                  href={n.href}
                  onClick={onMenuClose}
                >
                  {n.label}
                </a>
              ))}
            </div>
            <a
              className="mt-5 flex min-h-12 items-center justify-center rounded-lg bg-ivy8 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6"
              href="#contact"
              onClick={onMenuClose}
            >
              無料相談・シミュレーション
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
