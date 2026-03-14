'use client'

import { useEffectAsync } from '@soichiro_nitta/motion'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import { useAnimation } from '../app/(layout)/AnimationContext'
import { motion } from '../app/motion'

export const Hero = (props: {
  image?: { src: string; alt: string }
  subtitle?: string
  title: string | React.ReactNode
  description?: string
  overlayHidden?: boolean
  overlayOpacity?: string
  video?: { src: string; alt: string; playbackRate?: number }
}) => {
  const { refOpeningAnimation } = useAnimation()
  const refImage = useRef<HTMLDivElement>(null)
  const refText = useRef<HTMLHeadingElement>(null)
  const refDescription = useRef<HTMLParagraphElement>(null)
  const refSubtitle = useRef<HTMLParagraphElement>(null)
  const refVideo = useRef<HTMLVideoElement>(null)
  const [stateVideoReady, setStateVideoReady] = useState(false)
  const [stateIsAnimetionEnd, setIsAnimetionEnd] = useState(false)

  useEffect(() => {
    if (props.video?.playbackRate && refVideo.current) {
      refVideo.current.playbackRate = props.video.playbackRate
    }
  }, [props.video?.playbackRate])

  useEffect(() => {
    console.log(stateVideoReady)
  }, [stateVideoReady])

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    let stateUnmounted = false

    ;(async () => {
      const v = refVideo.current

      if (v) {
        if (!refOpeningAnimation.current) {
          await motion.delay(3.5)
        }

        if (!stateUnmounted) {
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  void refVideo.current?.play()
                } else {
                  refVideo.current?.pause()
                }
              })
            },
            { threshold: 0.2 },
          )
          observer.observe(v)
        }
      }
    })()

    return () => {
      stateUnmounted = true
      observer?.disconnect()
    }
  }, [refOpeningAnimation])

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
        motion.to(i, 1.5, 'out', {
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
        setIsAnimetionEnd(true)
      }
    })()
  }, [refOpeningAnimation])

  useEffectAsync(async () => {
    const v = refVideo.current
    const i = refImage.current
    if (v && i && stateIsAnimetionEnd && stateVideoReady) {
      void v.play()
      await motion.to(v, 0.5, 'out', { opacity: 1 })
      motion.set(i, { opacity: 0 })
    }
  }, [stateIsAnimetionEnd, stateVideoReady])

  return (
    <header className="relative h-[70vh]">
      <>
        {props.image && (
          <div
            ref={refImage}
            style={{
              opacity: 0,
              transform: 'scale(1.2)',
              transformOrigin: 'center',
            }}
            className="absolute inset-0 z-[-1]"
          >
            <img
              alt={props.image?.alt || ''}
              className="size-full object-cover"
              src={props.image?.src}
            />
          </div>
        )}
        {props.video && (
          <>
            <video
              style={{ opacity: 0 }}
              ref={refVideo}
              loop
              muted
              playsInline
              className="absolute inset-0 size-full object-cover"
              onCanPlay={() => setStateVideoReady(true)}
            >
              <source src={props.video.src} type="video/mp4" />
            </video>
            <p className="sr-only">{props.video.alt}</p>
          </>
        )}
        {!props.overlayHidden && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: parseInt(props.overlayOpacity || '30') / 100 }}
          />
        )}
      </>
      <div className="wrapper relative z-10 h-full">
        <div className="mx-auto flex h-full items-center">
          <div className="space-y-4 text-white">
            <p
              ref={refSubtitle}
              className={cn(
                'text-sm font-semibold text-white/80 md:text-lg',
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
              className="text-2xl font-semibold leading-normal md:text-5xl md:leading-[1.3]"
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
                'text-sm font-bold text-white/80 md:text-lg',
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
