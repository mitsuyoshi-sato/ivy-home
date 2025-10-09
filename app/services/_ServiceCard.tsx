'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/Button'

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
      ref={refCard}
      className="flex flex-col"
      style={{ opacity: 0, transform: 'translateY(100px)' }}
    >
      <p className="text-lg font-semibold">{props.title}</p>
      <figure className="mt-4 h-[250px] w-full overflow-hidden rounded-lg border border-gray-200">
        <img
          alt={props.image.alt}
          className="size-full object-cover"
          src={props.image.src}
        />
      </figure>
      <p className="mt-4 whitespace-pre-line break-words text-sm leading-[1.82] text-gray-800">
        {props.description}
      </p>
      <div className="mt-4 flex w-full justify-end">
        <Link aria-label={`${props.title}の詳細を見る`} href={props.href}>
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
