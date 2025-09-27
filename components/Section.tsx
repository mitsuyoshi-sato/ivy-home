'use client'

import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { forwardRef, useEffect, useRef } from 'react'
import { motion } from '@/app/motion'

export const Section = forwardRef<
  HTMLDivElement,
  {
    title: string
    subtitle: string
    description: string
    button: { href: string; text: string }
    className?: string
    style?: React.CSSProperties
  }
>((props, ref) => {
  const refSubtitle = useRef<HTMLParagraphElement>(null)
  const refTitle = useRef<HTMLHeadingElement>(null)
  const refDescription = useRef<HTMLParagraphElement>(null)
  const refButton = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      const container = ref as React.RefObject<HTMLDivElement>
      const s = refSubtitle.current
      const h = refTitle.current
      const d = refDescription.current
      const b = refButton.current

      if (container?.current && s && h && d && b) {
        const observer = new IntersectionObserver(
          async (entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
              motion.to(s, 2, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              motion.to(h, 2, 'out', {
                opacity: 1,
                translateY: '0px',
              })

              // 説明のアニメーション
              await motion.delay(0.3)
              motion.to(d, 2, 'out', {
                opacity: 1,
                translateY: '0px',
              })

              // ボタンのアニメーション
              await motion.delay(0.3)
              motion.to(b, 2, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          },
          { threshold: 0.5 },
        )

        observer.observe(container.current)

        return () => observer.disconnect()
      }
    })()
  }, [ref])

  return (
    <div ref={ref} className={props.className} style={props.style}>
      <p
        ref={refSubtitle}
        className="text-sm text-ivy5/70 lg:text-lg"
        style={{ opacity: 0, transform: 'translateY(200px)' }}
      >
        {props.subtitle}
      </p>
      <h2
        ref={refTitle}
        className="lg:text-4xl text-2xl font-bold lg:mt-6 mt-4"
        style={{ opacity: 0, transform: 'translateY(200px)' }}
      >
        {props.title}
      </h2>
      <p
        ref={refDescription}
        className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4 whitespace-pre-line"
        style={{ opacity: 0, transform: 'translateY(200px)' }}
      >
        {props.description.replace(/\\n/g, '\n')}
      </p>
      <div
        style={{ opacity: 0, transform: 'translateY(200px)' }}
        ref={refButton}
      >
        <Link href={props.button.href}>
          <Button
            className="lg:mt-6 mt-4"
            icon={ArrowRight}
            iconPosition="right"
          >
            {props.button.text}
          </Button>
        </Link>
      </div>
    </div>
  )
})
