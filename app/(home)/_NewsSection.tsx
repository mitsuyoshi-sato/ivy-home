'use client'

import { SectionHeader } from '@/components/Section'
import { useEffect, useRef } from 'react'
import { motion } from '../motion'
import Image from 'next/image'
import Link from 'next/link'
import { dataNews } from '../data/newsData'
import { format } from 'date-fns'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from 'lucide-react'

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
          title="ニュース"
          subtitle="News"
          description="実際にご利用いただいたお客様から寄せられた感想や体験談をご紹介します。\n
私たちのサービスが、日々の暮らしやお仕事にどのように役立っているのか、リアルな声を通してぜひご覧ください。"
          button={{
            href: '/news',
            text: 'ニュースをみる',
            className: 'hidden md:block',
          }}
        />
      </div>

      <div ref={scrollRef} className="w-full  mt-9" style={{ opacity: 0 }}>
        <div className="flex gap-4 w-fit animate-scroll">
          {dataNews.map((data) => {
            const content = (
              <article
                key={data.id}
                className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="border border-gray-300 w-[300px] h-[200px]  rounded-lg flex-shrink-0">
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <time className="text-sm text-gray-500">
                    {format(data.publishedAt, 'yyyy.M.d')}
                  </time>
                  <h3 className="text-sm text-dark7 font-semibold whitespace-pre-line">
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
                className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="border border-gray-300 w-[300px] h-[200px]  rounded-lg flex-shrink-0">
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2">
                  <time className="text-sm text-gray-500">
                    {format(data.publishedAt, 'yyyy.M.d')}
                  </time>
                  <h3 className="text-sm text-dark7 font-semibold whitespace-pre-line">
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
          className="md:hidden flex justify-end w-full mt-4 wrapper py-0"
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
