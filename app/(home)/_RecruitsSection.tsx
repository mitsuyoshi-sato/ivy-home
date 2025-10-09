'use client'

import { useEffect, useRef } from 'react'

import { SectionHeader } from '@/components/Section'

import { motion } from '../motion'

export const _RecruitsSection = () => {
  const refContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c = refContainer.current

    if (c) {
      const el0 = c.children[0]
      const el1 = c.children[1]
      const el2 = c.children[2]

      const observer = new IntersectionObserver(
        async ([entry]) => {
          if (entry.isIntersecting) {
            motion.to(el0, 1.3, 'out', { opacity: 1, translateY: '0px' })
            await motion.delay(0.2)
            motion.to(el1, 1.3, 'out', { opacity: 1, translateY: '0px' })
            await motion.delay(0.2)
            motion.to(el2, 1.3, 'out', { opacity: 1, translateY: '0px' })
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
      )

      observer.observe(c)

      return () => {
        observer.disconnect()
      }
    }
  }, [])
  return (
    <div className="wrapper flex justify-between" id="recruit">
      <SectionHeader
        button={{
          href: '/recruit',
          text: '採用情報を見る',
        }}
        className=""
        description="私たちIvy-Homeでは、お客様に最適な住まいと暮らしを提案する 営業担当 を募集しています。\n人と話すことが好きな方、住まいやライフスタイルに関心のある方を歓迎します。未経験の方でも先輩スタッフが丁寧にサポートいたしますので、安心してチャレンジいただけます。"
        subtitle="Recuruit"
        title="採用情報"
      />
      {/* <div
        ref={refContainer}
        className="w-[50%] flex flex-col text-sm font-medium gap-4 mt-12"
      >
        <div
          style={{ opacity: 0, transform: 'translateY(30px)' }}
          className="group hover:text-ivy5 cursor-pointer font-semibold w-full flex items-center justify-between border-b border-gray-300 pb-2 pt-4"
        >
          セールス／カスタマーサポート
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 transition-all duration-300 ease-out"
          />
        </div>
        <div
          style={{ opacity: 0, transform: 'translateY(30px)' }}
          className="group hover:text-ivy5 cursor-pointer font-semibold w-full flex items-center justify-between border-b border-gray-300 pb-2 pt-4"
        >
          バックオフィス（経理／その他の事務）
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 transition-all duration-300 ease-out"
          />
        </div>
        <div
          style={{ opacity: 0, transform: 'translateY(30px)' }}
          className="group hover:text-ivy5 cursor-pointer font-semibold w-full flex items-center justify-between border-b border-gray-300 pb-2 pt-4"
        >
          マーケティング
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 transition-all duration-300 ease-out"
          />
        </div>
      </div> */}
    </div>
  )
}
