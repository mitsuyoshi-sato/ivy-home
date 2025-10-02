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
        description="私たちが大切にしているのは、誠実にお客様と向き合うこと。\n快適な暮らしから生まれる 笑顔や思い出 が、私たちの原点です。"
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
