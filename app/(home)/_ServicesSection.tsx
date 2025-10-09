'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { SectionHeader } from '@/components/Section'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

import { motion } from '../motion'

export const _ServicesSection = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refButtonMb = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = refContainer.current
    if (c) {
      const observer = new IntersectionObserver(
        async ([entry]) => {
          if (entry.isIntersecting) {
            const card0 = c.children[0]
            const card1 = c.children[1]
            const card2 = c.children[2]
            const card3 = c.children[3]
            const card4 = c.children[4]

            const isMobile = !window.matchMedia('(min-width: 768px)').matches

            if (isMobile) {
              const b = refButtonMb.current
              motion.to(card0, 1.8, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.2)
              motion.to(card1, 1.8, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.2)
              motion.to(card2, 1.8, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.2)
              motion.to(card3, 1.8, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.2)
              motion.to(card4, 1.8, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.2)
              motion.to(b, 1.8, 'out', { opacity: 1, translateY: '0px' })
            } else {
              motion.to(card0, 1.8, 'out', { opacity: 1, translateY: '0px' })
              motion.to(card1, 1.8, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.8)
              motion.to(card2, 1.8, 'out', { opacity: 1, translateY: '0px' })
              motion.to(card3, 1.8, 'out', { opacity: 1, translateY: '0px' })
              motion.to(card4, 1.8, 'out', { opacity: 1, translateY: '0px' })
            }
          }
        },
        {
          threshold: 0.3,
        },
      )
      observer.observe(c)
    }
  }, [refContainer])

  return (
    <div className="wrapper flex flex-col" id="services">
      <SectionHeader
        button={{
          href: '/services',
          text: '事業内容一覧をみる',
          className: 'hidden md:block',
        }}
        description="私たちは、快適で安心な暮らしを支える住宅設備の販売・施工を行っています。\n太陽光パネルや蓄電池、エコキュートなど、家庭の暮らしをより便利にするサービスを提供しています。"
        subtitle="Services"
        title="私たちの提供する価値"
      />
      <div
        ref={refContainer}
        className="mt-9 grid grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:grid-cols-12"
      >
        <__Bento
          colSpan={'7'}
          description={
            ' 住宅向けに太陽光パネルの販売・設置・メンテナンスを行っています。\nお客様のライフスタイルや設備に合わせた最適なプランをご提案し、省エネと電気料金の削減をサポートします。'
          }
          href="/services/solar-panel"
          image={'/images/solar-panel-construction.jpg'}
          mdSpan={'12'}
          title={'太陽光パネル'}
        />
        <__Bento
          colSpan={'5'}
          description={
            ' 昼間に発電した電気を貯めて夜間に活用することで、エネルギーの自給自足を実現し、停電時の安心も提供します。'
          }
          href="/services/battery"
          image={'/images/battery.jpg'}
          mdSpan={'5'}
          title={'蓄電池'}
        />
        <__Bento
          mdTrimAfterNewline
          colSpan={'6'}
          description={
            '空気熱を活用することでガズを使用せずお湯が沸かせます。\n光熱費を抑え、環境負荷の軽減にも貢献します。設置から保守まで、きめ細やかなサポートを提供しています。'
          }
          href="/services/eco-cute"
          image={'/images/bathroom.jpg'}
          mdSpan={'7'}
          title={'エコキュート'}
        />
        <__Bento
          colSpan={'3'}
          description={
            '早期発見・早期対応でご自宅を守りましょう！まずはお気軽にご相談ください。'
          }
          href="/services/termite-control"
          image={'/images/pest-control.jpg'}
          mdSpan={'7'}
          title={'シロアリ駆除'}
        />
        <__Bento
          colSpan={'3'}
          description={
            '様々なご要望に柔軟かつ丁寧にお応えし、ご自宅を理想の住まいへとリフォームいたします。'
          }
          href="/services/reform"
          image={'/images/kitchen.jpg'}
          mdSpan={'5'}
          title={'リフォーム'}
        />
      </div>
      <div
        ref={refButtonMb}
        className="mt-4 flex w-full justify-end md:hidden"
        style={{ opacity: 0, transform: 'translateY(20px)' }}
      >
        <Link href="/services">
          <Button icon={ArrowRightIcon} iconPosition="right">
            事業内容一覧をみる
          </Button>
        </Link>
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
  mdSpan,
  mdTrimAfterNewline,
}: {
  title: string
  description: string
  image: string
  colSpan: string
  href: string
  mdSpan?: '12' | '8' | '7' | '6' | '5' | '4' | '3' | '2' | '1'
  mdTrimAfterNewline?: boolean
}) {
  return (
    <article
      className={cn(
        'group transition-all duration-300 ease-out hover:cursor-pointer hover:scale-[1.02] relative overflow-hidden border border-gray-300 flex items-center justify-center rounded-xl col-span-1',
        'md:h-auto',
        mdSpan === '12' && 'md:col-span-12',
        mdSpan === '8' && 'md:col-span-8',
        mdSpan === '7' && 'md:col-span-7',
        mdSpan === '6' && 'md:col-span-6',
        mdSpan === '5' && 'md:col-span-5',
        mdSpan === '4' && 'md:col-span-4',
        mdSpan === '3' && 'md:col-span-3',
        mdSpan === '2' && 'md:col-span-2',
        mdSpan === '1' && 'md:col-span-1',
        colSpan === '7' && 'lg:col-span-7',
        colSpan === '6' && 'lg:col-span-6',
        colSpan === '5' && 'lg:col-span-5',
        colSpan === '4' && 'lg:col-span-4',
        colSpan === '3' && 'lg:col-span-3',
        colSpan === '2' && 'lg:col-span-2',
        colSpan === '1' && 'lg:col-span-1',
      )}
      style={{ opacity: 0, transform: 'translateY(100px)' }}
    >
      <Link className="absolute inset-0 z-20" href={href}>
        <span className="sr-only">{title}の詳細を見る</span>
      </Link>
      <div className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-white/30 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-80" />
      <img
        alt=""
        className="absolute inset-0 size-full rounded-xl object-cover opacity-80"
        src={image}
      />
      <div className="relative z-0 size-full bg-cleam/80 p-2 md:p-3 md:backdrop-blur-3xl">
        <div className="flex h-full flex-row gap-3 md:flex-col">
          <header className="w-[80px] shrink-0 md:w-full">
            <div
              className={cn(
                'relative rounded-xl overflow-hidden border-[1px] border-gray-300',
                'h-[80px] md:h-[220px] lg:h-[220px]',
              )}
            >
              <img alt={title} className="size-full object-cover" src={image} />
            </div>
          </header>
          <div className="text-container flex flex-1 flex-col justify-center md:px-3 md:pt-4">
            <h3 className="text-lg font-bold">{title}</h3>
            {!mdTrimAfterNewline && (
              <p className="mt-2 hidden whitespace-pre-line break-words text-sm font-semibold leading-[1.82] text-gray-600 md:block">
                {description}
              </p>
            )}
            {mdTrimAfterNewline && (
              <p className="mt-2 hidden break-words text-sm font-semibold leading-[1.82] text-gray-600 md:block">
                {description.split('\n')[0]}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
