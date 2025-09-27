'use client'

import { Section } from '@/components/Section'
import { useEffect, useRef, useState } from 'react'
import { motion } from '../motion'

export const _ArticlesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const s = scrollRef.current
    if (s) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            motion.to(s, 1.5, 'out', {
              opacity: 1,
            })
          }
        },
        { threshold: 0.7 },
      )

      observer.observe(s)

      return () => observer.disconnect()
    }
  }, [])

  const cards = [
    { id: 1, content: 'card1' },
    { id: 2, content: 'card2' },
    { id: 3, content: 'card3' },
    { id: 4, content: 'card4' },
    { id: 5, content: 'card5' },
    { id: 6, content: 'card6' },
  ]

  return (
    <div className="flex flex-col">
      <div className="wrapper pb-0">
        <Section
          title="お客様の声"
          subtitle="Articles"
          description="実際にご利用いただいたお客様から寄せられた感想や体験談をご紹介します。\n
私たちのサービスが、日々の暮らしやお仕事にどのように役立っているのか、リアルな声を通してぜひご覧ください。"
          button={{ href: '/articles', text: 'Articles' }}
        />
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-hidden mt-9"
        style={{ opacity: 0 }}
      >
        <div className="flex gap-4 w-fit animate-scroll">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[300px] h-[300px] border border-gray-300 rounded-lg p-4 flex-shrink-0"
            >
              {card.content}
            </div>
          ))}
          {cards.map((card) => (
            <div
              key={`duplicate-${card.id}`}
              className="w-[300px] h-[300px] border border-gray-300 rounded-lg p-4 flex-shrink-0"
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 6 - 16px * 6));
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  )
}
