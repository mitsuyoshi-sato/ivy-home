'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../../motion'
import { _InfoCard } from '../_InfoCard'
import { Acordion } from '@/components/ui/Acordion'

export const _TermiteControl = () => {
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
          Termite Control
        </p>
        <h2
          ref={refTitle}
          className="lg:text-4xl text-2xl font-bold mt-6"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          シロアリ駆除
        </h2>
        <p
          ref={refDescription}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4"
        >
          シロアリは家の土台や柱を食い荒らし、建物の耐震性を著しく低下させます。
          <br />
          早期発見・早期対処が、大切な住まいを守る鍵となります。
          経験豊富な専門スタッフが、最新の駆除技術でお住まいを守ります。
        </p>
      </div>
      <div ref={refCards} className="flex gap-6 mt-12">
        <article
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/family.jpg"
            alt="termite-control"
            title="早期発見が重要！"
            description="早期発見・早期対処が、大切な住まいを守ります。まずはお気軽にご相談ください。"
          />
        </article>
        <article
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            title="ペットや家族にも安心"
            image="/sales.jpg"
            alt="termite-control"
            description="当社の使用するシロアリ薬剤は、人体やペットへの毒性が低いものが選択しています。"
          />
        </article>
        <article
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/after-follow.jpg"
            alt="termite-control"
            title="５年保証"
            description={`5年間の保証付きで、施工後も定期的な点検を実施いたします。`}
          />
        </article>
      </div>
      <h3
        ref={refAcordionTitle}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-xl font-bold mt-40 text-center"
      >
        シロアリ駆除に関するよくある疑問
      </h3>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: 'シロアリがいるかどうか、どうやって分かるの？',
            answer: `床がきしむ、柱を叩くと空洞音がする、羽アリを見かけた、などのサインがあります。
無料点検も実施しておりますので、少しでも気になる場合はお気軽にご相談ください。`,
          },
          {
            question: '施工中は家にいても大丈夫ですか？',
            answer: `はい、問題ありません。使用する薬剤は人やペットに安全性の高いものを使用しています。
施工時間は建物の大きさによりますが、通常は半日～1日程度です。`,
          },
          {
            question: '駆除後の保証はありますか？',
            answer: `はい、施工後5年間の保証をお付けしています。
保証期間中に万が一シロアリが再発した場合は、無償で再施工いたします。`,
          },
          {
            question: '相談だけでも対応してもらえますか？',
            answer: `はい。まずは現状の確認やアドバイスだけでも大丈夫です。強引な駆除勧誘は行いませんので、お気軽にお問い合わせください`,
          },
          {
            question: '駆除にかかる費用はどのくらいですか？',
            answer: `家の規模や被害状況、選ぶ駆除方法によって異なります。まずは無料見積もり・相談をおすすめしています。`,
          },
        ]}
      />
    </div>
  )
}
