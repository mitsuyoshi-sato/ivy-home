'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import type { ContentSummary } from '@/app/data/content'
import { configContent, getContentHref } from '@/app/data/content'
import { SectionHeader } from '@/components/SectionHeader'
import { Button } from '@/components/ui/Button'

import { motion } from '../../motion'

export const _ContentsSection = (props: { contents: ContentSummary[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const refButtonMb = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const s = scrollRef.current
    if (s) {
      const observer = new IntersectionObserver(
        async (entries) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            await motion.delay(0.5)
            motion.to(s, 1.5, 'out', {
              opacity: 1,
            })
            if (refButtonMb.current) {
              await motion.delay(0.8)
              motion.to(refButtonMb.current, 0.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          }
        },
        { threshold: 0.7 },
      )

      observer.observe(s)

      return () => observer.disconnect()
    }
  }, [])

  return (
    <section className="flex flex-col pb-[112px]">
      <div className="wrapper pb-0">
        <SectionHeader
          button={{
            href: configContent.news.path,
            text: 'コンテンツをみる',
            className: 'hidden md:block',
          }}
          description="会社からのニュース、住まいと暮らしのお役立ち情報、実際の施工事例をご紹介します。"
          subtitle="Contents"
          title="ニュース・お役立ち情報・施工事例"
        />
      </div>

      <div ref={scrollRef} className="mt-9 w-full" style={{ opacity: 0 }}>
        <div className="flex w-fit animate-scroll gap-4">
          {props.contents.map((data) => {
            const content = (
              <article
                key={data.id}
                className="flex cursor-pointer flex-col transition-all duration-300 hover:scale-105"
              >
                <div className="h-[200px] w-[300px] shrink-0 rounded-lg border border-gray-300">
                  <div className="relative size-full overflow-hidden rounded-lg">
                    <img
                      alt={data.title}
                      className="size-full object-cover"
                      src={data.image}
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <time
                    className="text-sm text-gray-500"
                    dateTime={data.publishedAt}
                  >
                    {data.formattedDate}
                  </time>
                  <h3 className="whitespace-pre-line text-sm font-semibold text-dark7">
                    {data.title}
                  </h3>
                </div>
              </article>
            )
            return (
              <Link key={data.id} href={getContentHref(data)}>
                {content}
              </Link>
            )
          })}
          {props.contents.map((data) => {
            const content = (
              <article
                key={`duplicate-${data.id}`}
                className="flex cursor-pointer flex-col transition-all duration-300 hover:scale-105"
              >
                <div className="h-[200px] w-[300px] shrink-0 rounded-lg border border-gray-300">
                  <div className="relative size-full overflow-hidden rounded-lg">
                    <img
                      alt={data.title}
                      className="size-full object-cover"
                      src={data.image}
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <time
                    className="text-sm text-gray-500"
                    dateTime={data.publishedAt}
                  >
                    {data.formattedDate}
                  </time>
                  <h3 className="whitespace-pre-line text-sm font-semibold text-dark7">
                    {data.title}
                  </h3>
                </div>
              </article>
            )
            return (
              <Link key={`duplicate-${data.id}`} href={getContentHref(data)}>
                {content}
              </Link>
            )
          })}
        </div>
        <div
          ref={refButtonMb}
          className="wrapper mt-4 flex w-full justify-end py-0 md:hidden"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <Link href="/news">
            <Button icon={ArrowRightIcon} iconPosition="right">
              コンテンツをみる
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(
                -300px * ${props.contents.length} - 16px *
                  ${props.contents.length}
              )
            );
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
