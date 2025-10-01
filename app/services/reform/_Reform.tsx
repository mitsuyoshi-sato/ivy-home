'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../../motion'
import { _InfoCard } from '../_InfoCard'
import { Acordion } from '@/components/ui/Acordion'

export const _Reform = () => {
  const refCards = useRef<HTMLDivElement>(null)
  const refSubtitle = useRef<HTMLParagraphElement>(null)
  const refTitle = useRef<HTMLHeadingElement>(null)
  const refDescription = useRef<HTMLParagraphElement>(null)
  const refAcordionTitle = useRef<HTMLHeadingElement>(null)
  const refAcordion = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const s = refSubtitle.current
    const t = refTitle.current
    const d = refDescription.current
    if (s && t && d) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
              await motion.delay(0.3)
              motion.to(s, 1.3, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              await motion.delay(0.3)
              motion.to(t, 1.3, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              await motion.delay(0.3)
              motion.to(d, 1.3, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          })
        },
        { threshold: 0.5 },
      )
      observer.observe(s)
      return () => observer.disconnect()
    }
  })

  useEffect(() => {
    const c = refCards.current
    if (c) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
              const children = Array.from(c.children) as HTMLElement[]
              for (let i = 0; i < children.length; i++) {
                await motion.delay(0.3)
                motion.to(children[i], 1.8, 'out', {
                  opacity: 1,
                  translateY: '0px',
                })
              }
            }
          })
        },
        { threshold: 0.5 },
      )
      observer.observe(c)
      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const a = refAcordionTitle.current
    const c = refAcordion.current
    if (a && c) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
              motion.to(a, 1.3, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.3)
              motion.to(c, 1.3, 'out', { opacity: 1, translateY: '0px' })
            }
          })
        },
        { threshold: 0.8 },
      )
      observer.observe(a)
      observer.observe(c)
      return () => observer.disconnect()
    }
  }, [])

  return (
    <div>
      <div className="flex flex-col">
        <p
          ref={refSubtitle}
          className="text-sm text-ivy5/80 lg:text-lg"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          Reform
        </p>
        <h2
          ref={refTitle}
          className="lg:text-4xl text-2xl font-bold mt-6"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          リフォーム
        </h2>
        <p
          ref={refDescription}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4"
        >
          リフォームは、住み慣れた家を新築同様に蘇らせる賢い選択です。
          <br />
          キッチン、浴室、トイレなどの水回りから、外壁塗装まで幅広く対応します。
          <br />
          建て替えよりもコストを抑えながら、快適性や省エネ性能を向上させることが可能です。
        </p>
      </div>
      <div ref={refCards} className="flex gap-6 mt-12">
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/bathroom.jpg"
            alt="reform"
            title="多様なリフォームに対応"
            description="キッチン、浴室、トイレなどの水回りから、外壁塗装、屋根工事まで、住まいのあらゆるリフォームに対応します。小さな修繕から大規模改修まで、お気軽にご相談ください。"
          />
        </div>
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            title="リフォームのメリット"
            image="/cooking2.jpg"
            alt="reform"
            description="住み慣れた家を新築同様に蘇らせることができます。建て替えよりもコストを抑えながら、快適性や省エネ性能を向上させることが可能です。"
          />
        </div>
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/after-follow.jpg"
            alt="reform"
            title="安心のアフターフォロー"
            description={`設置後も、トラブル時やご不明点に迅速に対応。
地域に根ざした会社だからこそ、いつでも頼れる安心のサポートをご提供いたします。`}
          />
        </div>
      </div>
      <h4
        ref={refAcordionTitle}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-xl font-bold mt-16 text-center"
      >
        リフォームに関するよくある疑問
      </h4>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: 'リフォーム中も住みながら工事できますか？',
            answer: `はい、可能です。工事内容や規模によりますが、多くの場合は住みながらのリフォームが可能です。
生活への影響を最小限に抑えるよう、工程を調整いたします。`,
          },
          {
            question: 'どのくらいの予算が必要ですか？',
            answer: `リフォーム内容によって大きく異なります。
無料でお見積もりを作成いたしますので、まずはご希望の内容をお聞かせください。予算に合わせたプランもご提案いたします。`,
          },
          {
            question: '工事期間はどのくらいかかりますか？',
            answer: `工事内容によって異なりますが、水回り単体なら1週間程度、全面改修なら1～2ヶ月程度が目安です。
事前に詳細なスケジュールをご説明いたします。`,
          },
        ]}
      />
    </div>
  )
}
