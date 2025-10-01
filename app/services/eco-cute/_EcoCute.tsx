'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../../motion'
import { _InfoCard } from '../_InfoCard'
import { Acordion } from '@/components/ui/Acordion'

export const _EcoCute = () => {
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
          EcoCute
        </p>
        <h2
          ref={refTitle}
          className="lg:text-4xl text-2xl font-bold mt-6"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          エコキュート
        </h2>
        <p
          ref={refDescription}
          style={{ opacity: 0, transform: 'translateY(100px)' }}
          className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4"
        >
          エコキュートは、空気の熱を利用してお湯を沸かす省エネ給湯システムです。
          <br />
          深夜の安い電力を使ってお湯を作り、光熱費を大幅に削減できます。
          環境にやさしく、経済的な給湯設備として多くのご家庭で選ばれています。
        </p>
      </div>
      <div ref={refCards} className="flex gap-6 mt-12">
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/bathroom.jpg"
            alt="eco-kyuto"
            title="エコキュートの仕組み"
            description="空気中の熱を取り込み、電気でわずかに加熱することでお湯を作るため、従来の電気温水器よりも少ない電力で大量のお湯をためられます。作ったお湯はタンクに貯められ、必要なときに家庭内で使用可能です。"
          />
        </div>
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            title="エコキュートのメリット"
            image="/cooking.jpg"
            alt="eco-kyuto"
            description="従来のガス給湯器と比べて光熱費を大幅に削減できます。深夜の安い電力を使うため、ランニングコストが低く、災害時にはタンクの水を生活用水として利用できます。"
          />
        </div>
        <div
          className="w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/after-follow.jpg"
            alt="eco-kyuto"
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
        エコキュートに関するよくある疑問
      </h4>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: 'エコキュートは本当に電気代が安くなるの？',
            answer: `はい、従来のガス給湯器や電気温水器と比べて、年間の光熱費を約60～70%削減できます。
深夜の安い電力を使ってお湯を作るため、大幅なコスト削減が可能です。`,
          },
          {
            question: '冬でもちゃんとお湯は出ますか？',
            answer: `はい、問題ありません。エコキュートは寒冷地対応モデルもあり、マイナス25度でも稼働します。
北海道などの寒冷地でも多数の導入実績があります。`,
          },
          {
            question: 'エコキュートの寿命はどのくらいですか？',
            answer: `一般的に10～15年程度です。定期的なメンテナンスを行うことで、より長く安心してお使いいただけます。
メーカー保証も充実しており、万が一の故障時も安心です。`,
          },
        ]}
      />
    </div>
  )
}
