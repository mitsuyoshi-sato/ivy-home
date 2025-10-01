'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../../motion'
import { _InfoCard } from '../_InfoCard'
import { Acordion } from '@/components/ui/Acordion'

export const _SolarPanel = () => {
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
          Solar Panel
        </p>
        <h2
          ref={refTitle}
          className="lg:text-4xl text-2xl font-bold mt-6"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          太陽光パネル
        </h2>
        <p
          ref={refDescription}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4"
        >
          太陽光パネルは、家庭の電気代を抑えるだけでなく、未来のエネルギー問題にもつながる選択肢です。
          <br />
          環境にやさしく、安心できる暮らしを支える仕組みとして注目されています。
          ご家庭の将来に向けた賢い投資として、多くの方に選ばれています。
        </p>
      </div>
      <div ref={refCards} className="flex gap-6 mt-12">
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/solar-panel-detail.jpg"
            alt="solar-panel"
            title="太陽光パネルの仕組み"
            description="太陽の光を電気に変えるクリーンエネルギーシステムです。屋根や敷地に設置したパネルが太陽光を吸収し、家庭で使える電力を供給します。"
          />
        </div>
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            title="太陽光発電のメリット"
            image="/family.jpg"
            alt="solar-panel"
            description="光熱費を削減しながら、電力自給率を高めることができます。余った電力は蓄電池に保存したり、電力会社に売ることも可能です。"
          />
        </div>
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/after-follow.jpg"
            alt="solar-panel"
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
        太陽光パネルに関するよくある疑問
      </h4>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: '雨の日は発電できますか？',
            answer: `はい、発電します。ただし、晴天時に比べて発電量は少なくなります。
天候に左右されるため、蓄電池を組み合わせることで効率的に電力を利用できます`,
          },
          {
            question: '停電時にも電気が使えるのですか？',
            answer: `停電時でも、蓄電池を併用することで電力を供給できます。
特に災害時には非常用電源として活用可能です。`,
          },
          {
            question: '太陽光パネル設置は本当にお得なの？',
            answer: `電気代はここ数年で上がり続けていますよね。
太陽光は「自分で電気をつくる」仕組みなので、今後の電気代高騰への保険としてもお得といえると思います。
実際にどのくらい削減できるかは、電気代の明細を見て具体的に試算いたします。`,
          },
        ]}
      />
    </div>
  )
}
