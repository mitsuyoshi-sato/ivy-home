'use client'

import { useEffect, useRef } from 'react'
import { motion } from '@/app/motion'
import { SectionHeader } from '../../components/Section'

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
              motion.to(i, 1.2, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          },
          { threshold: 0.3 },
        )

        observer.observe(i)

        return () => observer.disconnect()
      }
    })()
  }, [])

  return (
    <div
      ref={reContainer}
      className="wrapper lg:flex lg:flex-col xl:flex-row xl:items-center"
    >
      <SectionHeader
        className="lg:w-full xl:w-[380px] xl:shrink-0"
        title="アイビーホームの強み"
        subtitle="Campany"
        description="私たちが大切にしているのは、誠実にお客様と向き合うこと。\n快適な暮らしから生まれる 笑顔や思い出 が、私たちの原点です。"
        button={{ href: '/company', text: '会社情報をみる' }}
      />
      <div
        ref={refImage}
        className="relative z-0 mt-9 overflow-hidden bg-black/10 h-[300px] md:h-[500px] lg:mt-8 md:w-full md:rounded-3xl lg:mr-0 xl:mt-0 xl:w-[1000px] xl:shrink-0 xl:rounded-3xl xl:ml-24 xl:mr-0 -mr-7 rounded-l-2xl"
        style={{ opacity: 0, transform: 'translateY(80px)' }}
      >
        <img
          src="/images/unity.jpg"
          alt="手を重ねて団結する様子"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
