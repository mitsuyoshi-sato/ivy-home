'use client'

import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion } from '../motion'

export const _ServiceCard = (props: {
  title: string
  description: string
  image: { src: string; alt: string }
  index: number
  href: string
}) => {
  const refCard = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = refCard.current
    if (c) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              motion.to(c, 2, 'out', { opacity: 1, translateY: '0px' })
            }
          })
        },
        { threshold: 0.3 },
      )

      observer.observe(c)

      return () => observer.disconnect()
    }
  }, [])

  return (
    <article
      className="flex flex-col"
      ref={refCard}
      style={{ opacity: 0, transform: 'translateY(100px)' }}
    >
      <p className="text-lg font-semibold">{props.title}</p>
      <img
        src={props.image.src}
        alt={props.image.alt}
        className="w-full h-full object-cover rounded-sm mt-4"
      />
      <p className="text-gray-800 mt-4 leading-[1.82] break-words whitespace-pre-line text-sm">
        {props.description}
      </p>
      <div className="mt-4 w-full flex justify-end">
        <Link href={props.href} aria-label={`${props.title}の詳細を見る`}>
          <Button
            icon={ArrowRightIcon}
            iconPosition="right"
            variant="secondary"
          >
            詳しく見る
          </Button>
        </Link>
      </div>
    </article>
  )
}
