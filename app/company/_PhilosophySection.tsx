'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../motion'

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
      <div className="flex gap-40 items-center py-8">
        <div
          ref={refLogo}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="flex flex-col items-center shrink-0"
        >
          <img src="/ivy-home.svg" alt="ivy-home" className="w-[300px]" />
          <h2 className="leading-relaxed text-4xl mt-8 font-bold">
            未来の暮らしを、つくる。
          </h2>
        </div>
        <div className="text-dark7 leading-6 ">
          <p
            ref={refDescription1}
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            社名 "Ivy-Home" には、植物のアイビーの花言葉である
            <br />
            <strong className="text-xl">誠実</strong> や{' '}
            <strong className="text-xl">絆</strong> といった意味を込めています。
          </p>

          <p
            ref={refDescription2}
            className="mt-8 text-xl text-ivy5 font-bold"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            未来の暮らしを、つくる。
          </p>

          <p
            ref={refDescription3}
            className="mt-8"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            私たちはこの言葉を大切に、お客様との{' '}
            <strong className="text-xl">絆</strong> を育みながら、
            未来の暮らしを創ることを使命としています。
          </p>
          <p
            ref={refDescription4}
            className="mt-8"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            Ivy-Homeは、 <strong className="text-xl ">誠実</strong>{' '}
            な姿勢でお客様一人ひとりに寄り添い、暮らしの豊かさを実現するパートナーであり続けます。
          </p>
        </div>
      </div>
    </div>
  )
}
