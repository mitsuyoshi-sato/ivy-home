'use client'

import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'

export const _HeroImage = () => {
  const refImgLight = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const i = refImgLight.current
    let frameId: number | null = null

    if (i) {
      const updateOpacity = () => {
        const rect = i.getBoundingClientRect()
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
        )

        const ratio = visibleHeight / rect.height

        const progress = Math.min(Math.max((ratio - 0.1) / 0.7, 0), 1)
        motion.set(i, {
          opacity: progress ** 2,
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

      return () => {
        window.removeEventListener('scroll', handleScroll)

        if (frameId !== null) {
          cancelAnimationFrame(frameId)
        }
      }
    }
  }, [])

  return (
    <figure className="relative min-h-[330px] overflow-hidden xl:min-h-[720px]">
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
  )
}
