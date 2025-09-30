'use client'

import { Section } from '@/components/Section'
import { useEffect, useRef, useState } from 'react'
import { motion } from '../motion'
import Image from 'next/image'

export const _NewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const s = scrollRef.current
    if (s) {
      const observer = new IntersectionObserver(
        async (entries) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            await motion.delay(0.5)
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
    {
      id: 1,
      image: '/home.jpg',
      date: '2025.9',
      text: '電気代がここまで下がるなんて！',
    },
    {
      id: 2,
      image: '/light.jpg',
      date: '2025.9',
      text: '毎月の請求書をみるのが怖くなくなりました。',
    },
    {
      id: 3,
      image: '/solar-panel.jpg',
      date: '2025.12',
      text: '自分でエネルギーを作れるようになりました。',
    },
    {
      id: 4,
      image: '/cooking.jpg',
      date: '2025.12',
      text: 'オール電化でガス契約が不要になりました。',
    },
    {
      id: 5,
      image: '/tikudenti.png',
      date: '2025.6',
      text: '停電時も安心です。',
    },
    {
      id: 6,
      image: '/paint.jpeg',
      date: '2025.9',
      text: '生まれ変わりました！',
    },
  ]

  return (
    <div className="flex flex-col pb-[112px]">
      <div className="wrapper pb-0">
        <Section
          title="ニュース"
          subtitle="News"
          description="実際にご利用いただいたお客様から寄せられた感想や体験談をご紹介します。\n
私たちのサービスが、日々の暮らしやお仕事にどのように役立っているのか、リアルな声を通してぜひご覧ください。"
          button={{ href: '/news', text: 'お知らせをみる' }}
        />
      </div>

      <div ref={scrollRef} className="w-full  mt-9" style={{ opacity: 0 }}>
        <div className="flex gap-4 w-fit animate-scroll">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="border border-gray-300 w-[300px] h-[200px]  rounded-lg flex-shrink-0">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
              <div className="flex flex-col p-2">
                <p className="text-sm text-gray-500">{card.date}</p>
                <p className="text-sm text-dark7 font-semibold">{card.text}</p>
              </div>
            </div>
          ))}
          {cards.map((card) => (
            <div
              key={`duplicate-${card.id}`}
              className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="border border-gray-300 w-[300px] h-[200px]  rounded-lg flex-shrink-0">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
              <div className="flex flex-col p-2">
                <p className="text-sm text-gray-500">{card.date}</p>
                <p className="text-sm text-dark7 font-semibold">{card.text}</p>
              </div>
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
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
