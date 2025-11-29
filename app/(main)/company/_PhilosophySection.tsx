'use client'

import { useEffect, useRef } from 'react'

import { motion } from '../../motion'

export const _PhilosophySection = () => {
  const refDescription1 = useRef<HTMLParagraphElement>(null)
  const refDescription2 = useRef<HTMLParagraphElement>(null)
  const refDescription3 = useRef<HTMLParagraphElement>(null)
  const refDescription4 = useRef<HTMLParagraphElement>(null)
  const refLogo = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const d1 = refDescription1.current
    const d2 = refDescription2.current
    const d3 = refDescription3.current
    const d4 = refDescription4.current
    const l = refLogo.current
    if (d1 && d2 && d3 && d4 && l) {
      const observer = new IntersectionObserver(
        async (entries) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            motion.to(l, 1.8, 'out', { translateY: '0px', opacity: 1 })
            await motion.delay(0.5)

            motion.to(d1, 1.3, 'out', {
              opacity: 1,
              translateY: '0px',
            })
            await motion.delay(0.1)

            motion.to(d2, 1.3, 'out', {
              opacity: 1,
              translateY: '0px',
            })
            await motion.delay(0.1)

            motion.to(d3, 1.3, 'out', {
              opacity: 1,
              translateY: '0px',
            })
            await motion.delay(0.1)

            motion.to(d4, 1.3, 'out', {
              opacity: 1,
              translateY: '0px',
            })
          }
        },
        {
          threshold: 0.5,
        },
      )
      observer.observe(l)
    }
  }, [])

  return (
    <div className="wrapper">
      <div className="py-8 xl:flex xl:items-center xl:gap-40">
        <div
          ref={refLogo}
          className="flex shrink-0 flex-col items-center"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <img
            alt="アイビーホームのロゴ"
            className="w-60 sm:w-[300px]"
            src="/images/ivy-home.svg"
          />
          <h2 className="text-2xl font-bold leading-relaxed sm:text-4xl">
            未来の暮らしを、つくる。
          </h2>
        </div>
        <div className="mt-8 text-center text-sm leading-6 text-dark7 sm:text-base xl:mt-0 xl:text-left">
          <p
            ref={refDescription1}
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            社名 &quot;Ivy-Home&quot; には、植物のアイビーの花言葉である
            <br className="hidden sm:block" />
            <strong className="text-xl">誠実</strong> や{' '}
            <strong className="text-xl">絆</strong> といった意味を込めています。
          </p>

          <p
            ref={refDescription2}
            className="mt-8 text-xl font-bold text-ivy5"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            &quot;未来の暮らしを、つくる&quot;
          </p>

          <p
            ref={refDescription3}
            className="mt-8"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            私たちはこの言葉を大切に、お客様との{' '}
            <strong className="text-xl">絆</strong> を育みながら、
            未来の暮らしをつくることを使命としています。
          </p>
          <p
            ref={refDescription4}
            className="mt-8"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            Ivy-Homeは <strong className="text-xl">誠実</strong>{' '}
            な姿勢でお客様一人ひとりに寄り添い、理想の暮らしを実現するパートナーであり続けます。
          </p>
        </div>
      </div>
    </div>
  )
}
