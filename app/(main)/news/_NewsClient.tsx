'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { News } from '@/app/data/newsData'
import { Button } from '@/components/ui/Button'

import { motion } from '../../motion'

export const _NewsClient = (props: {
  news: Array<News & { formattedDate: string }>
}) => {
  return (
    <div className="grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-2">
      {[...props.news].reverse().map((news, index) => (
        <__NewsCard
          key={index}
          date={news.formattedDate}
          description={news.subtitle}
          href={news.href}
          imageSrc={news.image}
          title={news.title}
        />
      ))}
    </div>
  )
}

const __NewsCard = ({
  imageSrc,
  date,
  title,
  description,
  href,
}: {
  imageSrc: string
  date: string
  title: string
  description?: string
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
      <figure className="h-[250px] w-full overflow-hidden rounded-lg border border-gray-200">
        <img alt={title} className="size-full object-cover" src={imageSrc} />
      </figure>
      <div className="flex flex-col">
        <time className="mt-2 text-sm text-gray-500" dateTime={date}>
          {date}
        </time>
        <h3 className="mt-1 text-lg font-bold">{title}</h3>
        {description && (
          <p className="mt-1 line-clamp-3 text-sm text-gray-500">
            {description}
          </p>
        )}
      </div>
      <div className="mt-4 flex w-full justify-end">
        <Link aria-label={`${title}の詳細を見る`} href={href}>
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
