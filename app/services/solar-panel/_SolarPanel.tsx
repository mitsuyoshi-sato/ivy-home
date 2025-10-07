'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../../motion'
import { _InfoCard } from '../_InfoCard'
import { Acordion } from '@/components/ui/Acordion'

export const _SolarPanel = (props: { className?: string }) => {
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
        { threshold: 0.3 },
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
        { threshold: 0.5 },
      )
      observer.observe(c)
      return () => observer.disconnect()
    }
    const children = Array.from(c.children) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
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
    <div className={props.className}>
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
          電気代、最近どんどん上がってますよね…。
          <br />
          そんな今だからこそ、太陽光パネルで将来の家計を守る賢い投資としておすすめです。
          <br />
          さらに、環境にもやさしく、安心できる暮らしを支える仕組みとして、多くのご家庭で選ばれています。
        </p>
      </div>
      <div ref={refCards} className="flex flex-col md:flex-row gap-6 mt-12">
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/solar-panel-construction.jpg"
            alt="ソーラーパネルの設置工事"
            title="太陽光パネルの仕組み"
            description="太陽の光を電気に変えるクリーンエネルギーシステムです。屋根や敷地に設置したパネルが太陽光を吸収し、家庭で使える電力を供給します。"
          />
        </article>
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/houses.jpg"
            alt="ソーラーパネルが設置された住宅街"
            title="家計を助ける投資"
            description="光熱費を削減しながら、電力自給率を高めることができます。余った電力は蓄電池に保存したり、電力会社に売ることも可能です。"
          />
        </article>
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/afterfollow.jpg"
            alt="営業担当者が自宅でお客様の話を聞く様子"
            title="安心のアフターフォロー"
            description={`設置後も、トラブル時やご不明点に迅速に対応。
地域に根ざした会社だからこそ、いつでも頼れる安心のサポートをご提供いたします。`}
          />
        </article>
      </div>
      <h3
        ref={refAcordionTitle}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-xl font-bold mt-40 text-center"
      >
        太陽光パネルに関するよくある質問
      </h3>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: '太陽光パネル設置は本当にお得なの？',
            answer: `太陽光は「自分で電気をつくる」仕組みなので、今後の電気代高騰への保険としてもお得といえると思います。
実際にどのくらい削減できるかは、電気代の明細を見て具体的に試算いたします。`,
          },
          {
            question: '雨の日は発電できますか？',
            answer: `はい、発電します。ただし、晴天時に比べて発電量は少なくなります。
天候に左右されるため、蓄電池を組み合わせることで効率的に電力を利用できます`,
          },
          {
            question: '設置に向いている屋根はありますか？',
            answer: `南向きで日当たりの良い屋根が最適です。
            北向きや影が多い場合でも設置は可能ですが、南向きと比較すると発電効率はやや下がります。`,
          },
          {
            question: '停電時にも電気が使えるのですか？',
            answer: `停電時でも、蓄電池を併用することで電力を供給できます。
特に災害時には非常用電源として活用可能です。`,
          },
          {
            question: 'メンテナンスは必要ですか？',
            answer: `日常的な掃除や簡単な確認だけで十分です。
            内部の点検や故障対応は専門スタッフがサポートするため、手間はほとんどかかりません。`,
          },
        ]}
      />
    </div>
  )
}
