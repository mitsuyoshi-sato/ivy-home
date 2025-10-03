'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'
import { motion } from '../motion'
import { Section } from '@/components/Section'
import Link from 'next/link'

export const _ServicesSection = () => {
  const refContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = refContainer.current
    if (c) {
      const observer = new IntersectionObserver(
        async (entries) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            motion.to(c.children[1], 1.5, 'out', {
              opacity: 1,
              scale: 1,
            })
            motion.to(c.children[2], 1.5, 'out', {
              opacity: 1,
              scale: 1,
            })
            await motion.delay(0.2)
            motion.to(c.children[4], 1.5, 'out', {
              opacity: 1,
              scale: 1,
            })

            motion.to(c.children[3], 1.5, 'out', {
              opacity: 1,
              scale: 1,
            })
            await motion.delay(0.2)
            motion.to(c.children[0], 1.5, 'out', {
              opacity: 1,
              scale: 1,
            })

            await motion.delay(0.5)
            Array.from(c.children).forEach(async (child, index) => {
              const element = child as HTMLElement
              const textContainer = element.querySelector(
                '.text-container',
              ) as HTMLElement
              if (textContainer) {
                await motion.delay(index * 0.1)

                const title = textContainer.querySelector(
                  'p:first-child',
                ) as HTMLElement
                if (title) {
                  motion.to(title, 1.3, 'out', {
                    opacity: 1,
                    translateY: '0px',
                  })
                }

                await motion.delay(0.2)
                const description = textContainer.querySelector(
                  'p:last-child',
                ) as HTMLElement
                if (description) {
                  motion.to(description, 1.3, 'out', {
                    opacity: 1,
                    translateY: '0px',
                  })
                }
              }
            })
          }
        },
        { threshold: 0.5 },
      )
      observer.observe(c)
      return () => observer.disconnect()
    }
  }, [])

  return (
    <div id="services" className="flex flex-col wrapper">
      <Section
        title="私たちの提供する価値"
        subtitle="Services"
        description="私たちは、快適で安心な暮らしを支える住宅設備の設計・施工を行っています。\nオール電化や蓄電池、エコキュートなど、家庭の暮らしをより便利にするサービスを提供しています。"
        button={{ href: '/services', text: '事業内容をみる' }}
      />
      <div ref={refContainer} className="grid grid-cols-12 gap-3 mt-9">
        <__Bento
          href="/services/solar-panel"
          title={'太陽光パネル'}
          description={
            ' 住宅向けに太陽光パネルの販売・設置・メンテナンスを行っています。\nお客様のライフスタイルや設備に合わせた最適なプランをご提案し、省エネと電気料金の削減をサポートします。'
          }
          image={'/solar-panel.jpg'}
          colSpan={'7'}
        />
        <__Bento
          href="/services/battery"
          title={'蓄電池'}
          description={
            ' 昼間に発電した電気を貯めて夜間に活用することで、エネルギーの自給自足を実現し、停電時の安心も提供します。'
          }
          image={'/battery.jpg'}
          colSpan={'5'}
        />
        <__Bento
          href="/services/eco-cute"
          title={'エコキュート'}
          description={
            '空気熱を活用することで光熱費を抑え、環境負荷の軽減にも貢献します。設置から保守まで、きめ細やかなサポートを提供しています。'
          }
          image={'/bathroom.jpg'}
          colSpan={'6'}
        />
        <__Bento
          href="/services/termite-control"
          title={'シロアリ駆除'}
          description={''}
          image={'/cooking.jpg'}
          colSpan={'3'}
        />
        <__Bento
          href="/services/reform"
          title={'リフォーム'}
          description={''}
          image={'/print.jpg'}
          colSpan={'3'}
        />
      </div>
    </div>
  )
}

function __Bento({
  title,
  description,
  image,
  colSpan,
  href,
}: {
  title: string
  description: string
  image: string
  colSpan: string
  href: string
}) {
  return (
    <Link
      href={href}
      className={`group transition-all duration-300 ease-out hover:cursor-pointer hover:scale-[1.02] relative overflow-hidden border border-gray-300 flex items-center justify-center rounded-xl col-span-${colSpan}`}
    >
      <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-out rounded-xl z-10 pointer-events-none" />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover absolute inset-0 rounded-xl"
      />
      <div className="relative w-full h-full bg-white/80 backdrop-blur-3xl p-3 z-0">
        <div
          className={cn(
            'relative rounded-xl overflow-hidden border-[1px] border-gray-300',
            colSpan === '3' || colSpan === '6' ? 'h-[150px]' : 'h-[200px]',
          )}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="text-container py-6 px-3">
          <p
            className="text-lg font-bold"
            // style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            {title}
          </p>
          <p
            className="text-gray-600 mt-2 font-semibold leading-[1.82] break-words whitespace-pre-line text-sm"
            // style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            {description.replace(/\\n/g, '\n')}
          </p>
        </div>
      </div>
    </Link>
  )
}
