'use client'

import { useEffect, useRef } from 'react'
import { motion } from '@/app/motion'
import { Section } from '../../components/Section'

export const _CampaignSection = () => {
  const reContainer = useRef<HTMLDivElement>(null)
  const refImage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      const i = refImage.current
      if (i) {
        const observer = new IntersectionObserver(
          async (entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
              // 画像のアニメーション
              motion.to(i, 1.2, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          },
          { threshold: 0.5 },
        )

        observer.observe(i)

        return () => observer.disconnect()
      }
    })()
  }, [])

  return (
    <div ref={reContainer} className="wrapper lg:flex lg:items-center">
      <Section
        className="lg:w-[380px] lg:shrink-0"
        title="アイビーホームの強み"
        subtitle="Campany"
        description="当社は創業以来、住宅用のソーラー・蓄電池・エコキュートの提供を通じて、家計にも環境にも優しい暮らしをサポートしてまいりました。確かな技術と経験に基づき、お客様一人ひとりの生活に寄り添った提案を心がけています。"
        button={{ href: '/company', text: '会社情報をみる' }}
      />
      <div
        ref={refImage}
        className="relative z-0 mt-9 overflow-hidden bg-black/10 h-[500px] lg:mt-0 lg:w-[1000px] lg:shrink-0 lg:rounded-3xl lg:ml-24 -mr-6 rounded-l-2xl"
        style={{ opacity: 0, transform: 'translateY(80px)' }}
      >
        <img
          src="/sales.jpg"
          alt="sales"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
