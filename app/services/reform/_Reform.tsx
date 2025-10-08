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
    if (!c) return
    const isMd =
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 768px)').matches
    if (isMd) {
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
        { threshold: 0.3 },
      )
      observer.observe(c)
      return () => observer.disconnect()
    }
    const children = Array.from(c.children) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            motion.to(entry.target as HTMLElement, 1.8, 'out', {
              opacity: 1,
              translateY: '0px',
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    children.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
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
          リフォームは、住み慣れた家を快適で長持ちする住まいに生まれ変わらせる選択です。
          <br />
          内装・水回り・外装など幅広く対応し、ライフスタイルや将来の安心まで考えたご提案をさせていただきます。
        </p>
      </div>
      <div ref={refCards} className="flex flex-col md:flex-row gap-6 mt-12">
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/images/shink.jpg"
            alt="シンク"
            title="多様なリフォームに対応"
            description="キッチン、浴室、トイレなどの水回りから、外壁塗装、屋根工事まで、住まいのあらゆるリフォームに対応します。"
          />
        </article>
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/images/ih-cooking.jpg"
            alt="IHで料理をしている"
            title="コストを抑えつつ理想の住まいを"
            description={`建て替えより費用を抑えつつ、ライフスタイルに合わせた理想の住まいを実現します。無駄を減らしたプランで、予算も安心です。`}
          />
        </article>
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            title="省エネ・快適な暮らしへ"
            image="/images/family.jpg"
            alt="家族団欒の様子"
            description="断熱や設備改善で光熱費削減。長期的には省エネによるコスト削減と住まいの資産価値向上にもつながります。"
          />
        </article>
      </div>
      <h3
        ref={refAcordionTitle}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-xl font-bold mt-40 text-center"
      >
        リフォームに関するよくある質問
      </h3>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: 'リフォームできる範囲は？',
            answer: `キッチン・浴室・トイレなどの水回りはもちろん、外壁塗装や屋根補修まで幅広く対応可能です。
            ライフスタイルに合わせた間取り変更もご相談ください。`,
          },
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
          {
            question: '施工後のサポートはありますか？',
            answer: `はい。トラブルや不明点には迅速に対応し、地域に根ざした会社ならではの安心のアフターフォローをご提供いたします。`,
          },
        ]}
      />
    </div>
  )
}
