'use client'

import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'

import { SectionHeader } from '../../components/SectionHeader'

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
        button={{ href: '/company', text: '会社情報をみる' }}
        className="lg:w-full xl:w-[380px] xl:shrink-0"
        description="私たちが大切にしているのは、誠実にお客様と向き合うこと。\n快適な暮らしから生まれる 笑顔や思い出 が、私たちの原点です。"
        subtitle="Campany"
        title="アイビーホームの強み"
      />
      <div
        ref={refImage}
        className="relative z-0 -mr-7 mt-9 h-[300px] overflow-hidden rounded-l-2xl bg-black/10 md:h-[500px] md:w-full md:rounded-3xl lg:mr-0 lg:mt-8 xl:ml-24 xl:mr-0 xl:mt-0 xl:w-[1000px] xl:shrink-0 xl:rounded-3xl"
        style={{ opacity: 0, transform: 'translateY(80px)' }}
      >
        <img
          alt="手を重ねて団結する様子"
          className="size-full object-cover"
          src="/images/unity.jpg"
        />
      </div>
    </div>
  )
}
