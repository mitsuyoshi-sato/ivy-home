'use client'

import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion } from './motion'
export const TwoColumnSection = (props: {
  title: string
  subtitle: string
  description: string
  image: { src: string; alt: string }
  link: string
  buttonText: string
  reverse?: boolean
}) => {
  const reContainer = useRef<HTMLDivElement>(null)
  const refText = useRef<HTMLDivElement>(null)
  const refImage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      const c = reContainer.current
      const t = refText.current
      const i = refImage.current
      if (c && t && i) {
        const observer = new IntersectionObserver(
          async (entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
              motion.to(i, 1.2, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              await motion.delay(0.3)
              motion.to(t, 1.2, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          },
          { threshold: 0.5 },
        )

        observer.observe(c)

        return () => observer.disconnect()
      }
    })()
  }, [])

  return (
    <div
      ref={reContainer}
      className={`wrapper lg:flex lg:items-center ${props.reverse ? 'flex-row-reverse' : ''}`}
    >
      <div
        ref={refText}
        className="lg:w-[380px] lg:shrink-0"
        style={{ opacity: 0, transform: 'translateY(80px)' }}
      >
        <p className="text-sm text-gray-500 lg:text-lg">{props.subtitle}</p>
        <h2 className="lg:text-4xl text-2xl font-bold lg:mt-6 mt-4">
          {props.title}
        </h2>
        <p className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4">
          {props.description}
        </p>
        <Link href={props.link}>
          <Button
            className="lg:mt-6 mt-4"
            icon={ArrowRightIcon}
            iconPosition="right"
          >
            {props.buttonText}
          </Button>
        </Link>
      </div>
      <div
        ref={refImage}
        className={`relative z-0 mt-9 overflow-hidden bg-black/10 h-[500px] lg:mt-0 lg:w-[1000px] lg:shrink-0 lg:rounded-3xl ${
          props.reverse ? 'lg:mr-24 -ml-6 rounded-r-2xl' : 'lg:ml-24 -mr-6 rounded-l-2xl'
        }`}
        style={{ opacity: 0, transform: 'translateY(80px)' }}
      >
        <img
          src={props.image.src}
          alt={props.image.alt}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
