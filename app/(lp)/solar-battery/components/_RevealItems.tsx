'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'
import { cn } from '@/lib/utils'

type RevealOrder = 'center-out' | 'forward'

export const _RevealItems = (props: {
  children: ReactNode
  className: string
  order?: RevealOrder
  role?: 'list'
}) => {
  const refItems = useRef<HTMLDivElement>(null)
  const order = props.order ?? 'forward'

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
              if (order === 'center-out') {
                const indexCenter = Math.floor((items.length - 1) / 2)
                const countOffset = Math.max(
                  indexCenter,
                  items.length - 1 - indexCenter,
                )
                __showItem(items[indexCenter], __config[order].duration)
                for (let i = 1; i <= countOffset; i += 1) {
                  await motion.delay(__config[order].delay)
                  if (isMounted) {
                    __showItem(items[indexCenter - i], __config[order].duration)
                    __showItem(items[indexCenter + i], __config[order].duration)
                  }
                }
              } else {
                for (const [i, e] of items.entries()) {
                  if (i > 0) {
                    await motion.delay(__config[order].delay)
                  }
                  if (isMounted) {
                    __showItem(e, __config[order].duration)
                  }
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
                __showItem(e, __config[order].duration)
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
  }, [order])

  return (
    <div
      ref={refItems}
      role={props.role}
      className={cn(
        props.className,
        __config[order].classInitial,
        '[&>*]:opacity-0 motion-reduce:[&>*]:translate-y-0 motion-reduce:[&>*]:opacity-100',
      )}
    >
      {props.children}
    </div>
  )
}

const __showItem = (e: Element | undefined, duration: number) => {
  if (e) {
    motion.to(e, duration, 'out', {
      opacity: 1,
      translateY: '0px',
    })
  }
}

const __config = {
  'center-out': {
    classInitial: '[&>*]:translate-y-4',
    delay: 0.15,
    duration: 1,
  },
  forward: {
    classInitial: '[&>*]:translate-y-6',
    delay: 0.12,
    duration: 1.3,
  },
} as const satisfies Record<
  RevealOrder,
  { classInitial: string; delay: number; duration: number }
>
