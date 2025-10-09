'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'
import { motion } from '../motion'
import { SectionHeader } from '@/components/Section'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from 'lucide-react'

export const _ServicesSection = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refButtonMb = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const c = refContainer.current
    if (!c) return
    const items = Array.from(c.children) as HTMLElement[]
    let completedCount = 0
    const observer = new IntersectionObserver(
      async (entries) => {
        await Promise.all(
          entries
            .filter((e) => e.isIntersecting)
            .map(async (entry) => {
              const el = entry.target as HTMLElement
              motion.to(el, 1.2, 'out', { opacity: 1, scale: 1 })
              const textContainer = el.querySelector(
                '.text-container',
              ) as HTMLElement | null
              if (!textContainer) return
              await motion.delay(0.2)
              const title = textContainer.querySelector(
                'h3:first-child',
              ) as HTMLElement | null
              if (title)
                motion.to(title, 1.0, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.15)
              const description = textContainer.querySelector(
                'p:last-child',
              ) as HTMLElement | null
              if (description && description.offsetParent !== null)
                await motion.to(description, 1.0, 'out', {
                  opacity: 1,
                  translateY: '0px',
                })

              completedCount++
              if (completedCount === items.length && refButtonMb.current) {
                motion.to(refButtonMb.current, 0.8, 'out', {
                  opacity: 1,
                  translateY: '0px',
                })
              }

              observer.unobserve(el)
            }),
        )
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="services" className="flex flex-col wrapper">
      <SectionHeader
        title="私たちの提供する価値"
        subtitle="Services"
        description="私たちは、快適で安心な暮らしを支える住宅設備の販売・施工を行っています。\n太陽光パネルや蓄電池、エコキュートなど、家庭の暮らしをより便利にするサービスを提供しています。"
        button={{
          href: '/services',
          text: '事業内容一覧をみる',
          className: 'hidden md:block',
        }}
      />
      <div
        ref={refContainer}
        className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 md:gap-3 mt-9"
      >
        <__Bento
          href="/services/solar-panel"
          title={'太陽光パネル'}
          description={
            ' 住宅向けに太陽光パネルの販売・設置・メンテナンスを行っています。\nお客様のライフスタイルや設備に合わせた最適なプランをご提案し、省エネと電気料金の削減をサポートします。'
          }
          image={'/images/solar-panel-construction.jpg'}
          colSpan={'7'}
          mdSpan={'12'}
        />
        <__Bento
          href="/services/battery"
          title={'蓄電池'}
          description={
            ' 昼間に発電した電気を貯めて夜間に活用することで、エネルギーの自給自足を実現し、停電時の安心も提供します。'
          }
          image={'/images/battery.jpg'}
          colSpan={'5'}
          mdSpan={'5'}
        />
        <__Bento
          href="/services/eco-cute"
          title={'エコキュート'}
          description={
            '空気熱を活用することでガズを使用せずお湯が沸かせます。\n光熱費を抑え、環境負荷の軽減にも貢献します。設置から保守まで、きめ細やかなサポートを提供しています。'
          }
          image={'/images/bathroom.jpg'}
          colSpan={'6'}
          mdSpan={'7'}
          mdTrimAfterNewline
        />
        <__Bento
          href="/services/termite-control"
          title={'シロアリ駆除'}
          description={
            '早期発見・早期対応でご自宅を守りましょう！まずはお気軽にご相談ください。'
          }
          image={'/images/pest-control.jpg'}
          colSpan={'3'}
          mdSpan={'7'}
        />
        <__Bento
          href="/services/reform"
          title={'リフォーム'}
          description={
            '様々なご要望に柔軟かつ丁寧にお応えし、ご自宅を理想の住まいへとリフォームいたします。'
          }
          image={'/images/kitchen.jpg'}
          colSpan={'3'}
          mdSpan={'5'}
        />
      </div>
      <div
        ref={refButtonMb}
        className="md:hidden flex justify-end w-full mt-4"
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
      style={{ opacity: 0, transform: 'scale(0.8)' }}
    >
      <Link href={href} className="absolute inset-0 z-20">
        <span className="sr-only">{title}の詳細を見る</span>
      </Link>
      <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-out rounded-xl z-10 pointer-events-none" />
      <img
        src={image}
        alt=""
        className="opacity-80 w-full h-full object-cover absolute inset-0 rounded-xl"
      />
      <div className="relative w-full h-full bg-cleam/80 p-2 md:p-3 md:backdrop-blur-3xl z-0">
        <div className="flex flex-row md:flex-col gap-3 h-full">
          <header className="shrink-0 w-[80px] md:w-full">
            <div
              className={cn(
                'relative rounded-xl overflow-hidden border-[1px] border-gray-300',
                'h-[80px] md:h-[220px] lg:h-[220px]',
              )}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>
          <div className="text-container flex-1 flex flex-col justify-center md:pt-4 md:px-3">
            <h3 className="text-lg font-bold">{title}</h3>
            {!mdTrimAfterNewline && (
              <p className="text-gray-600 mt-2 font-semibold leading-[1.82] break-words whitespace-pre-line text-sm hidden md:block">
                {description}
              </p>
            )}
            {mdTrimAfterNewline && (
              <p className="text-gray-600 mt-2 font-semibold leading-[1.82] break-words text-sm hidden md:block">
                {description.split('\n')[0]}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
