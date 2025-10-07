'use client'

import { useEffect, useRef } from 'react'
import { format } from 'date-fns'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { motion } from '../motion'
import { dataNews } from '../data/newsData'

export const _ArticlesClient = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
      {dataNews.map((news, index) => (
        <__ArticleCard
          key={index}
          imageSrc={news.image}
          date={format(new Date(news.publishedAt), 'yyyy.MM.dd')}
          title={news.title}
          description={news.subtitle}
          href={news.href}
        />
      ))}
    </div>
  )
}

const __ArticleCard = ({
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
      style={{ opacity: 0, transform: 'translateY(100px)' }}
      className="flex flex-col"
    >
      <figure className="w-full h-[250px] rounded-lg overflow-hidden border border-gray-200">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col">
        <time className="text-sm text-gray-500 mt-2" dateTime={date}>
          {date}
        </time>
        <h3
          className={`text-lg mt-1 font-bold${description ? ' line-clamp-1' : ''}`}
        >
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500 line-clamp-3">
            {description}
          </p>
        )}
      </div>
      <div className="mt-4 w-full flex justify-end">
        <Link href={href} aria-label={`${title}の詳細を見る`}>
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
