'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../app/motion'
import { cn } from '@/lib/utils'
import { useAnimation } from '../app/AnimationContext'

export const Hero = (props: {
  imageSrc: string
  imageAlt?: string
  subtitle?: string
  title: string | React.ReactNode
  description?: string
}) => {
  const { refOpeningAnimation } = useAnimation()
  const refImage = useRef<HTMLDivElement>(null)
  const refText = useRef<HTMLHeadingElement>(null)
  const refDescription = useRef<HTMLParagraphElement>(null)
  const refSubtitle = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    ;(async () => {
      const i = refImage.current
      const t = refText.current
      const d = refDescription.current
      const s = refSubtitle.current
      if (i && t && d && s) {
        if (!refOpeningAnimation.current) {
          await motion.delay(3.5)
        }

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
        await motion.delay(0.5)
        motion.to(d, 2, 'out', {
          opacity: 1,
          translateY: '0px',
        })
      }
    })()
  }, [])

  return (
    <header className="relative h-[70vh]">
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
      <div className="relative z-10 h-full wrapper">
        <div className="mx-auto h-full flex items-center">
          <div className="text-white space-y-4">
            <p
              ref={refSubtitle}
              className={cn(
                'text-sm md:text-lg font-semibold text-white/80',
                !props.subtitle && 'hidden',
              )}
              style={{
                opacity: 0,
                transform: 'translateY(10px)',
              }}
            >
              {props.subtitle}
            </p>

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
            <p
              ref={refDescription}
              className={cn(
                'text-sm md:text-lg font-bold text-white/80',
                !props.description && 'hidden',
              )}
              style={{
                opacity: 0,
                transform: 'translateY(10px)',
              }}
            >
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
