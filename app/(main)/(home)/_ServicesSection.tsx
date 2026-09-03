'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { SectionHeader } from '@/components/SectionHeader'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

import { motion } from '../../motion'

export const _ServicesSection = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refButtonMb = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = refContainer.current
    const b = refButtonMb.current
    const observers: IntersectionObserver[] = []

    if (c) {
      const cards = Array.from(c.children)

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        cards.forEach((e) => {
          motion.set(e, { opacity: 1, scale: '1' })
          if (e instanceof HTMLElement) {
            e.style.removeProperty('transform')
          }
        })
        if (b) {
          motion.set(b, { opacity: 1, translateY: '0px' })
        }
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        const observer = new IntersectionObserver(
          async ([entry]) => {
            if (entry.isIntersecting) {
              observer.unobserve(c)
              __showBento(cards[0])
              await motion.delay(0.16)
              __showBento(cards[3])
              await motion.delay(0.08)
              __showBento(cards[1])
              await motion.delay(0.2)
              __showBento(cards[4])
              await motion.delay(0.1)
              __showBento(cards[2])
            }
          },
          { threshold: 0.5 },
        )

        observer.observe(c)
        observers.push(observer)
      } else {
        cards.forEach((e) => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                observer.unobserve(e)
                __showBento(e)
              }
            },
            { threshold: 0.15 },
          )

          observer.observe(e)
          observers.push(observer)
        })

        if (b) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                observer.unobserve(b)
                motion.to(b, 0.8, 'out', {
                  opacity: 1,
                  translateY: '0px',
                })
              }
            },
            { threshold: 0.15 },
          )

          observer.observe(b)
          observers.push(observer)
        }
      }
    }

    return () => observers.forEach((o) => o.disconnect())
  }, [])

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
          image={'/images/website/solar-panel-construction.webp'}
          mdSpan={'12'}
          title={'太陽光パネル'}
        />
        <__Bento
          colSpan={'5'}
          description={
            ' 昼間に発電した電気を貯めて夜間に活用することで、エネルギーの自給自足を実現し、停電時の安心も提供します。'
          }
          href="/services/battery"
          image={'/images/website/battery.webp'}
          mdSpan={'5'}
          title={'蓄電池'}
        />
        <__Bento
          mdTrimAfterNewline
          colSpan={'6'}
          description={
            '空気熱を活用することでガスを使用せずお湯が沸かせます。\n光熱費を抑え、環境負荷の軽減にも貢献します。設置から保守まで、きめ細やかなサポートを提供しています。'
          }
          href="/services/eco-cute"
          image={'/images/website/bathroom.jpg'}
          mdSpan={'7'}
          title={'エコキュート'}
        />
        <__Bento
          colSpan={'3'}
          description={
            '早期発見・早期対応でご自宅を守りましょう！まずはお気軽にご相談ください。'
          }
          href="/services/termite-control"
          image={'/images/website/pest-control.webp'}
          mdSpan={'7'}
          title={'シロアリ駆除'}
        />
        <__Bento
          colSpan={'3'}
          description={
            '様々なご要望に柔軟かつ丁寧にお応えし、ご自宅を理想の住まいへとリフォームいたします。'
          }
          href="/services/reform"
          image={'/images/website/kitchen.jpg'}
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
        'group relative col-span-1 flex items-center justify-center overflow-hidden rounded-xl border border-gray-300 hover:cursor-pointer',
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
      style={{ opacity: 0, transform: 'scale(0.96)' }}
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
                'relative overflow-hidden rounded-xl border-[1px] border-gray-300',
                'h-[80px] md:h-[220px] lg:h-[220px]',
              )}
            >
              <img alt={title} className="size-full object-cover" src={image} />
            </div>
          </header>
          <div className="flex flex-1 flex-col justify-center md:px-3 md:pt-4">
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

const __showBento = (e: Element) => {
  motion.to(e, 1, 'out', { opacity: 1, scale: '1' }).then(() => {
    if (e instanceof HTMLElement) {
      e.style.removeProperty('transform')
    }
  })
}
