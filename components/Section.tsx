'use client'

import { Button } from './ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion } from '@/app/motion'

export const SectionHeader = (props: {
  title: string
  subtitle: string
  description: string
  button?: { href: string; text: string }
  className?: string
  style?: React.CSSProperties
}) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refSubtitle = useRef<HTMLParagraphElement>(null)
  const refTitle = useRef<HTMLHeadingElement>(null)
  const refDescription = useRef<HTMLParagraphElement>(null)
  const refButton = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      const container = refContainer.current
      const s = refSubtitle.current
      const h = refTitle.current
      const d = refDescription.current
      const b = refButton.current

      if (container && s && h && d && b) {
        const observer = new IntersectionObserver(
          async (entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
              motion.to(s, 1.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              motion.to(h, 1.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })

              // 説明のアニメーション
              await motion.delay(0.3)
              motion.to(d, 1.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })

              // ボタンのアニメーション
              await motion.delay(0.3)
              motion.to(b, 1.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          },
          { threshold: 0.5 },
        )

        observer.observe(container)

        return () => observer.disconnect()
      }
    })()
  }, [])

  return (
    <div ref={refContainer} className={props.className} style={props.style}>
      <p
        ref={refSubtitle}
        className="text-sm text-ivy5/80 lg:text-lg"
        style={{ opacity: 0, transform: 'translateY(100px)' }}
      >
        {props.subtitle}
      </p>
      <h2
        ref={refTitle}
        className="lg:text-4xl text-2xl font-bold lg:mt-6 mt-4 whitespace-pre-line"
        style={{ opacity: 0, transform: 'translateY(100px)' }}
      >
        {props.title}
      </h2>
      <p
        ref={refDescription}
        className="leading-relaxed lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4 whitespace-pre-line"
        style={{ opacity: 0, transform: 'translateY(100px)' }}
      >
        {props.description.replace(/\\n/g, '\n')}
      </p>
      <div
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        ref={refButton}
      >
        <Link href={props.button?.href || ''} hidden={!props.button}>
          <Button
            className="lg:mt-6 mt-4"
            icon={ArrowRight}
            iconPosition="right"
          >
            {props.button?.text}
          </Button>
        </Link>
      </div>
    </div>
  )
}
