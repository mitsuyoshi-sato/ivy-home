'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'

export const _FlowLineAnimation = (props: { children: ReactNode }) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refLine = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const c = refContainer.current
    const l = refLine.current
    let isMounted = true
    let observer: IntersectionObserver | null = null

    if (c && l) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        motion.set(l, { opacity: 1, scaleX: '1' })
      } else if (window.matchMedia('(min-width: 1024px)').matches) {
        observer = new IntersectionObserver(
          async ([entry]) => {
            if (entry.isIntersecting) {
              observer?.unobserve(c)
              await motion.delay(1.8)
              if (isMounted) {
                motion.to(l, 0.8, 'out', {
                  opacity: 1,
                  scaleX: '1',
                })
              }
            }
          },
          { threshold: 0.3 },
        )
        observer.observe(c)
      }
    }

    return () => {
      isMounted = false
      observer?.disconnect()
    }
  }, [])

  return (
    <div ref={refContainer} className="relative mt-12">
      <span
        ref={refLine}
        aria-hidden="true"
        className="absolute inset-x-[10%] top-10 hidden h-px origin-left scale-x-0 bg-[#e0e4dc] opacity-0 motion-reduce:scale-x-100 motion-reduce:opacity-100 lg:block"
      />
      {props.children}
    </div>
  )
}
