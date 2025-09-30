'use client'

import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { useEffect, useRef } from 'react'
import { motion } from '../motion'
export default function About() {
  const refTitle = useRef<HTMLHeadingElement>(null)
  const refThema = useRef<HTMLDivElement>(null)
  const refDescription1 = useRef<HTMLParagraphElement>(null)
  const refDescription2 = useRef<HTMLParagraphElement>(null)
  const refDescription3 = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ti = refTitle.current
    const th = refThema.current
    const de1 = refDescription1.current
    const de2 = refDescription2.current
    const de3 = refDescription3.current
    if (ti && th && de1 && de2 && de3) {
      const observer = new IntersectionObserver(async (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          motion.to(ti, 1.8, 'out', { translateY: '0px', opacity: 1 })
          await motion.delay(0.3)

          motion.to(de1, 1.8, 'out', {
            opacity: 1,
            translateY: '0px',
          })
          await motion.delay(0.3)
          motion.to(de2, 1.8, 'out', {
            opacity: 1,
            translateY: '0px',
          })
          await motion.delay(0.3)
          motion.to(de3, 1.8, 'out', {
            opacity: 1,
            translateY: '0px',
          })
          motion.to(th, 1.8, 'out', {
            opacity: 1,
            scale: 1,
          })
        }
      })
      observer.observe(ti)
    }
  }, [])
  return (
    <>
      <Hero
        imageSrc="/hero2.jpg"
        subtitle="Company"
        title="会社情報"
        description=""
      />
      <div className="wrapper flex flex-col items-center">
        <h2
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          ref={refTitle}
          className="text-3xl font-bold"
        >
          会社理念
        </h2>
        <div
          ref={refThema}
          style={{
            opacity: 0,
            scale: 0.8,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
          className="text-2xl mt-8 font-bold"
        >
          "地域の、未来を創る"
        </div>
        <p
          ref={refDescription1}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="text-lg text-dark7 text-center mt-6"
        >
          私たちは、実際にお客様のもとに足を運ぶことを大切にしております。
        </p>
        <p
          ref={refDescription2}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="text-lg mt-4 text-dark7 text-center"
        >
          お客様一人ひとりのお住まいの地域や住宅の特性を踏まえ、
          <br />
          真摯にお話を伺いながら、最適なプランをご提案いたします。
        </p>
        <p
          ref={refDescription3}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="text-lg mt-4 text-dark7 text-center"
        >
          家計にも環境にもやさしい再生可能エネルギーの活用で、持続可能な未来の暮らしを支えます。
        </p>
      </div>
    </>
  )
}
