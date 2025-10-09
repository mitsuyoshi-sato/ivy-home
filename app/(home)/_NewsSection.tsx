'use client'

import { format } from 'date-fns'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { SectionHeader } from '@/components/Section'
import { Button } from '@/components/ui/Button'

import { dataNews } from '../data/newsData'
import { motion } from '../motion'

export const _NewsSection = () => {
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
            href: '/news',
            text: 'ニュースをみる',
            className: 'hidden md:block',
          }}
          description="実際にご利用いただいたお客様から寄せられた感想や体験談をご紹介します。\n私たちのサービスが、日々の暮らしやお仕事にどのように役立っているのか、リアルな声を通してぜひご覧ください。"
          subtitle="News"
          title="ニュース"
        />
      </div>

      <div ref={scrollRef} className="mt-9  w-full" style={{ opacity: 0 }}>
        <div className="animate-scroll flex w-fit gap-4">
          {dataNews.map((data) => {
            const content = (
              <article
                key={data.id}
                className="flex cursor-pointer flex-col transition-all duration-300 hover:scale-105"
              >
                <div className="h-[200px] w-[300px] shrink-0 rounded-lg  border border-gray-300">
                  <div className="relative size-full overflow-hidden rounded-lg">
                    <Image
                      fill
                      alt={data.title}
                      className="object-cover"
                      sizes="300px"
                      src={data.image}
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <time className="text-sm text-gray-500">
                    {format(data.publishedAt, 'yyyy.M.d')}
                  </time>
                  <h3 className="whitespace-pre-line text-sm font-semibold text-dark7">
                    {data.title}
                  </h3>
                </div>
              </article>
            )
            return data.href ? (
              <Link key={data.id} href={data.href}>
                {content}
              </Link>
            ) : (
              content
            )
          })}
          {dataNews.map((data) => {
            const content = (
              <article
                key={`duplicate-${data.id}`}
                className="flex cursor-pointer flex-col transition-all duration-300 hover:scale-105"
              >
                <div className="h-[200px] w-[300px] shrink-0 rounded-lg  border border-gray-300">
                  <div className="relative size-full overflow-hidden rounded-lg">
                    <Image
                      fill
                      alt={data.title}
                      className="object-cover"
                      sizes="300px"
                      src={data.image}
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <time className="text-sm text-gray-500">
                    {format(data.publishedAt, 'yyyy.M.d')}
                  </time>
                  <h3 className="whitespace-pre-line text-sm font-semibold text-dark7">
                    {data.title}
                  </h3>
                </div>
              </article>
            )
            return data.href ? (
              <Link key={`duplicate-${data.id}`} href={data.href}>
                {content}
              </Link>
            ) : (
              content
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
              ニュース一覧をみる
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
              calc(-300px * ${dataNews.length} - 16px * ${dataNews.length})
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
