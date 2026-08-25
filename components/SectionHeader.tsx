'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'

import { Button } from './ui/Button'

export const SectionHeader = (props: {
  title: string
  subtitle: string
  description: string
  button?: { href: string; text: string; className?: string }
  className?: string
  style?: React.CSSProperties
}) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refSubtitle = useRef<HTMLParagraphElement>(null)
  const refButton = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = refContainer.current
    const s = refSubtitle.current
    const b = refButton.current
    let observer: IntersectionObserver | undefined

    if (c && s && b) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            motion.to(s, 1, 'out', {
              opacity: 1,
              translateY: '0px',
            })
            motion.to(b, 1, 'out', {
              opacity: 1,
              translateY: '0px',
            })
          }
        },
        { threshold: 0.8 },
      )

      observer.observe(c)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div ref={refContainer} className={props.className} style={props.style}>
      <p
        ref={refSubtitle}
        className="text-sm text-ivy5/80 lg:text-lg"
        style={{ opacity: 0, transform: 'translateY(150px)' }}
      >
        {props.subtitle}
      </p>
      <h2 className="mt-4 whitespace-pre-line text-2xl font-bold lg:mt-6 lg:text-4xl">
        {props.title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg">
        {props.description.split('\\n').map((line, index, array) => (
          <span key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div
        ref={refButton}
        className={props.button?.className}
        style={{ opacity: 0, transform: 'translateY(150px)' }}
      >
        <Link hidden={!props.button} href={props.button?.href || ''}>
          <Button
            className="mt-4 lg:mt-6"
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
