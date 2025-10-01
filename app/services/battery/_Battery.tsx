'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../../motion'
import { _InfoCard } from '../_InfoCard'
import { Acordion } from '@/components/ui/Acordion'

export const _Battery = () => {
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
          Battery
        </p>
        <h2
          ref={refTitle}
          className="lg:text-4xl text-2xl font-bold mt-6"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          蓄電池
        </h2>
        <p
          ref={refDescription}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4"
        >
          蓄電池は、家庭で使う電気を効率よくためて、夜間に有効活用できる装置です。
          <br />
          昼間に太陽光で発電した電力を夜や緊急時に使えるため、電気代の不安を軽減し、災害時にも安心です。
          将来の電力不安に備える賢い選択肢として、多くのご家庭で選ばれています。
        </p>
      </div>
      <div ref={refCards} className="flex gap-6 mt-12">
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/battery.jpg"
            alt="battery"
            title="蓄電池の仕組み"
            description="太陽光発電や深夜電力などで作った電気を蓄えて、必要な時に使えるようにするシステムです。電気の「貯金」のようなイメージです。"
          />
        </div>
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            title="蓄電池のメリット"
            image="/family.jpg"
            alt="battery"
            description="電気代の削減はもちろん、停電時にも電力を供給できるため災害時の備えとしても安心です。太陽光発電と組み合わせることで、より効率的なエネルギー活用が可能になります。"
          />
        </div>
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/after-follow.jpg"
            alt="battery"
            title="安心のアフターフォロー"
            description="設置後も、トラブル時やご不明点に迅速に対応。\n地域に根ざした会社だからこそ、いつでも頼れる安心のサポートをご提供いたします。"
          />
        </div>
      </div>
      <h4
        ref={refAcordionTitle}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-lg font-bold mt-16 text-center"
      >
        蓄電池に関するよくある疑問
      </h4>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: '蓄電池は太陽光パネルがないと使えないの？',
            answer:
              'いいえ、蓄電池だけでも使えます。\n深夜の安い電力を蓄えて昼間に使うことで電気代を削減できます。\nもちろん太陽光パネルと併用すればより効果的です。',
          },
          {
            question: '停電時にはどのくらい使えますか？',
            answer:
              '蓄電池の容量によって異なりますが、一般的な家庭用蓄電池なら、冷蔵庫やテレビ、照明などを数時間～数日使うことが可能です。\n太陽光発電と併用すれば、晴れた日には充電も可能です。',
          },
          {
            question: '蓄電池の寿命はどのくらいですか？',
            answer:
              '一般的に10～15年程度です。メーカーによっては10年保証が付いている製品もあります。\n定期的なメンテナンスで、より長く安心してお使いいただけます。',
          },
        ]}
      />
    </div>
  )
}
