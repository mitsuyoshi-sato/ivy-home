'use client'

import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'

export const _HeroImage = () => {
  const refArea = useRef<HTMLDivElement>(null)
  const refImgLight = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const a = refArea.current
    const i = refImgLight.current
    let frameId: number | null = null

    if (a && i) {
      const updateOpacity = () => {
        const rect = a.getBoundingClientRect()
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
        )

        const ratio = visibleHeight / rect.height

        const isMobile = window.innerWidth < 768
        const start = isMobile ? 0.85 : 0.9
        const end = isMobile ? 0.55 : 0.1
        const progress = Math.min(1, Math.max(0, (ratio - end) / (start - end)))
        motion.set(i, {
          opacity: isMobile ? progress : progress ** 2,
        })

        frameId = null
      }

      const handleScroll = () => {
        if (frameId === null) {
          frameId = requestAnimationFrame(updateOpacity)
        }
      }
      motion.to(i, 2, 'out', { opacity: 1 })

      window.addEventListener('scroll', handleScroll, {
        passive: true,
      })
      window.addEventListener('resize', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)

        if (frameId !== null) {
          cancelAnimationFrame(frameId)
        }
      }
    }
  }, [])

  return (
    <div className="relative min-h-[330px] xl:min-h-[720px]">
      <div
        ref={refArea}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-56 -top-48 z-20 md:inset-0"
      />
      <figure className="absolute inset-0 overflow-hidden">
        <img
          alt="太陽光パネルと蓄電池を備えた住宅"
          className="absolute inset-0 size-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
          height="1086"
          src="/images/lp/solar-battery/house-dark.webp"
          width="1448"
        />
        <img
          ref={refImgLight}
          style={{ opacity: 0 }}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
          height="1086"
          src="/images/lp/solar-battery/house-light.webp"
          width="1448"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#f8f9f5] to-transparent xl:block"
        />
      </figure>
    </div>
  )
}
