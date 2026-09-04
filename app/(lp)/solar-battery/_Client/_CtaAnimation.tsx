'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'

export const _CtaAnimation = (props: {
  button: ReactNode
  contact: ReactNode
  heading: ReactNode
  image: ReactNode
}) => {
  const refCard = useRef<HTMLDivElement>(null)
  const refButton = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = refCard.current
    const b = refButton.current
    let isMounted = true
    let observer: IntersectionObserver | undefined

    if (c && b) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        motion.set(c, {
          opacity: 1,
          scale: '1',
          translateY: '0px',
        })
        motion.set(b, { opacity: 1, translateY: '0px' })
      } else {
        observer = new IntersectionObserver(
          async ([entry]) => {
            if (entry.isIntersecting) {
              observer?.unobserve(c)
              motion.to(c, 1.1, 'out', {
                opacity: 1,
                scale: '1',
                translateY: '0px',
              })
              await motion.delay(0.15)
              if (isMounted) {
                motion.to(b, 0.8, 'out', {
                  opacity: 1,
                  translateY: '0px',
                })
              }
            }
          },
          { threshold: 0.15 },
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
    <div
      ref={refCard}
      className="mx-auto grid w-full max-w-[1240px] translate-y-6 scale-[0.98] overflow-hidden rounded-2xl border border-[#e5e7e1] bg-white opacity-0 shadow-[0_28px_72px_rgba(21,50,35,0.18)] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 lg:grid-cols-[58%_42%]"
    >
      <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
        {props.heading}
        <div
          ref={refButton}
          className="translate-y-2 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        >
          {props.button}
        </div>
        {props.contact}
      </div>
      {props.image}
    </div>
  )
}
