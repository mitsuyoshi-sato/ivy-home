'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../app/motion'

export const Hero = (props: {
  imageSrc: string
  imageAlt?: string
  title: string | React.ReactNode
  subtitle?: string
}) => {
  const refImage = useRef<HTMLDivElement>(null)
  const refText = useRef<HTMLHeadingElement>(null)
  const refSub = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    ;(async () => {
      const i = refImage.current
      const t = refText.current
      const s = refSub.current
      if (i && t && s) {
        motion.to(i, 1.3, 'out', {
          opacity: 1,
          scale: 1,
        })
        await motion.delay(0.2)
        motion.to(t, 2, 'out', {
          opacity: 1,
          translateY: '0px',
        })
        await motion.delay(0.5)
        motion.to(s, 2, 'out', {
          opacity: 1,
          translateY: '0px',
        })
      }
    })()
  }, [])

  return (
    <section className="relative h-[70vh]">
      <div
        ref={refImage}
        style={{
          opacity: 0,
          transform: 'scale(1.05)',
          transformOrigin: 'center',
        }}
        className="absolute inset-0"
      >
        <img
          src={props.imageSrc}
          alt={props.imageAlt || ''}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 h-full">
        <div className="mx-auto h-full flex items-center lg:px-[150px] sm:px-14 px-4">
          <div className="text-white space-y-4">
            <h1
              ref={refText}
              className="text-2xl md:text-5xl font-semibold leading-normal md:leading-[1.3]"
              style={{
                opacity: 0,
                transform: 'translateY(10px)',
              }}
            >
              {props.title}
            </h1>
            {props.subtitle && (
              <p
                ref={refSub}
                className="text-sm md:text-lg font-bold text-white/80"
                style={{
                  opacity: 0,
                  transform: 'translateY(10px)',
                }}
              >
                {props.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
