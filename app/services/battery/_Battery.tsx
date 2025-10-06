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
          蓄電池は太陽光発電や深夜電力などで作った電気を蓄えて、必要な時に使える「電気の貯金」のような仕組みです。
          <br />
          昼間に太陽光で発電した電力を夜や緊急時に使えるため、電気代の不安を軽減し、災害時にも安心です。
          将来の電力不安に備える賢い選択肢として、多くのご家庭で選ばれています。
        </p>
      </div>
      <div ref={refCards} className="flex flex-col md:flex-row gap-6 mt-12">
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/battery.jpg"
            alt="屋外に設置された蓄電池"
            title="蓄電池の仕組み"
            description="太陽光発電や深夜電力などで作った電気を蓄えて、必要なとき、緊急時に使用できます。電気を「賢くためて使う」ことで、経済的に生活をサポートします。"
          />
        </article>
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/kettle.jpg"
            alt="電気ケトル"
            title="賢くエネルギーを節約"
            description={`電気代を削減するだけでなく、将来の電力価格変動にも備えられます。
              賢いエネルギー管理を実現できます。`}
          />
        </article>
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/room-light.jpg"
            alt="室内照明"
            title="停電時に大活躍！"
            description={`停電時でも冷蔵庫や照明、テレビなど必要な家電を数時間安心して使えます。
              災害時も家族の生活を守るバックアップ電源です。`}
          />
        </article>
      </div>
      <h3
        ref={refAcordionTitle}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-xl font-bold mt-40 text-center"
      >
        蓄電池に関するよくある疑問
      </h3>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: '蓄電池は太陽光パネルがないと使えないの？',
            answer: `いいえ、蓄電池だけでも使えます。深夜の安い電力を蓄えて昼間に使うことで電気代を削減できます。
もちろん！太陽光パネルと併用すればより効果的です。`,
          },
          {
            question: '停電時にはどのくらい使えますか？',
            answer: `蓄電池の容量によって異なりますが、一般的な家庭用蓄電池なら、冷蔵庫やテレビ、照明などを数時間～数日使うことが可能です。
太陽光発電と併用すれば、晴れた日には充電も可能です。`,
          },
          {
            question: '蓄電池の寿命はどのくらいですか？',
            answer: `一般的に10～15年程度です。メーカーによっては10年保証が付いている製品もあります。
定期的なメンテナンスで、より長く安心してお使いいただけます。`,
          },
          {
            question: '本当に電気代が節約できますか？',
            answer: `夜間電力や太陽光の余剰電力を効率的に蓄えることで、毎月の電気代を節約できます。
            家庭の使用状況や蓄電容量によって差はありますが、無料でお見積もり可能です。`,
          },
          {
            question: '設置スペースはどのくらい必要ですか？',
            answer: `家庭用の蓄電池は比較的コンパクトで、屋外壁面や屋内の空きスペースに設置可能です。
            設置場所の条件に合わせて最適なプランをご提案します。`,
          },
        ]}
      />
    </div>
  )
}
