'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'
import { cn } from '@/lib/utils'

export const _RevealItems = (props: {
  children: ReactNode
  className: string
  role?: 'list'
}) => {
  const refItems = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = refItems.current
    let isMounted = true
    const observers: IntersectionObserver[] = []

    if (c) {
      const items = Array.from(c.children)

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        items.forEach((e) => {
          motion.set(e, { opacity: 1, translateY: '0px' })
        })
      } else if (window.matchMedia('(min-width: 1024px)').matches) {
        const observer = new IntersectionObserver(
          async ([entry]) => {
            if (entry.isIntersecting) {
              observer.unobserve(c)
              for (const [i, e] of items.entries()) {
                if (i > 0) {
                  await motion.delay(0.12)
                }
                if (isMounted) {
                  __showItem(e)
                }
              }
            }
          },
          { threshold: 0.3 },
        )
        observer.observe(c)
        observers.push(observer)
      } else {
        items.forEach((e) => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                observer.unobserve(e)
                __showItem(e)
              }
            },
            { threshold: 0.2 },
          )
          observer.observe(e)
          observers.push(observer)
        })
      }
    }

    return () => {
      isMounted = false
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return (
    <div
      ref={refItems}
      role={props.role}
      className={cn(
        props.className,
        '[&>*]:translate-y-6 [&>*]:opacity-0 motion-reduce:[&>*]:translate-y-0 motion-reduce:[&>*]:opacity-100',
      )}
    >
      {props.children}
    </div>
  )
}

const __showItem = (e: Element) => {
  motion.to(e, 1.3, 'out', {
    opacity: 1,
    translateY: '0px',
  })
}
