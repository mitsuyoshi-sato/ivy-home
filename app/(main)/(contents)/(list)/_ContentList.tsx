'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import type { ContentSummary } from '@/app/data/contentData'
import { getContentHref } from '@/app/data/contentData'
import { motion } from '@/app/motion'
import { Button } from '@/components/ui/Button'

export const _ContentList = (props: {
  contents: ContentSummary[]
  emptyMessage: string
}) => {
  return (
    <>
      {props.contents.length > 0 && (
        <div className="grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-2">
          {props.contents.map((c) => (
            <__ContentCard key={c.id} content={c} />
          ))}
        </div>
      )}
      {props.contents.length === 0 && (
        <div className="rounded-2xl border border-ivy2 bg-cleam px-6 py-20 text-center text-gray-600">
          {props.emptyMessage}
        </div>
      )}
    </>
  )
}

const __ContentCard = (props: { content: ContentSummary }) => {
  const refCard = useRef<HTMLElement>(null)

  useEffect(() => {
    const c = refCard.current
    if (c) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
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
        <img
          alt={props.content.title}
          className="size-full object-cover"
          src={props.content.image}
        />
      </figure>
      <div className="flex flex-col">
        <time
          className="mt-2 text-sm text-gray-500"
          dateTime={props.content.publishedAt}
        >
          {props.content.formattedDate}
        </time>
        <h2 className="mt-1 text-lg font-bold">{props.content.title}</h2>
        {props.content.subtitle && (
          <p className="mt-1 line-clamp-3 text-sm text-gray-500">
            {props.content.subtitle}
          </p>
        )}
      </div>
      <div className="mt-4 flex w-full justify-end">
        <Link
          aria-label={`${props.content.title}の詳細を見る`}
          href={getContentHref(props.content)}
        >
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
