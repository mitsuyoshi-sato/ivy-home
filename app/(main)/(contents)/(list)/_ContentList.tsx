'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import type { ContentSummary } from '@/app/data/content'
import { getContentHref } from '@/app/data/content'
import { motion } from '@/app/motion'

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
  const hrefContent = getContentHref(props.content)
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
      className="group/card flex flex-col"
      style={{ opacity: 0, transform: 'translateY(100px)' }}
    >
      <Link
        className="relative isolate block overflow-hidden rounded-lg after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-white/30 after:opacity-0 after:transition-opacity after:duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 group-has-[a:hover]/card:after:opacity-100"
        href={hrefContent}
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
      </Link>
      <div className="mt-4 flex w-full justify-end">
        <Link
          aria-label={`${props.content.title}の詳細を見る`}
          className="group/button inline-flex items-center justify-center rounded-full border border-ivy7 bg-white px-5 py-3 text-sm font-bold text-ivy6 shadow-lg transition-all duration-200 hover:bg-ivy6 hover:text-white group-has-[a:hover]/card:bg-ivy6 group-has-[a:hover]/card:text-white"
          href={hrefContent}
        >
          詳しく見る
          <ArrowRightIcon
            aria-hidden="true"
            className="ml-2 size-4 transition-all duration-200 group-hover/button:translate-x-1 group-has-[a:hover]/card:translate-x-1"
          />
        </Link>
      </div>
    </article>
  )
}
