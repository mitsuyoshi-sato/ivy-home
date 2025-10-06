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
          空気中の熱を取り込み、電気でわずかに加熱することでお湯を作るため、少ない電力で大量のお湯をためられます。
          <br />
          作ったお湯はタンクに貯められ、必要なときに家庭内で使用可能です。
          環境にやさしく、経済的な給湯設備として多くのご家庭で選ばれています。
        </p>
      </div>
      <div ref={refCards} className="flex flex-col md:flex-row gap-6 mt-12">
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/eco-cute.jpg"
            alt="エコキュート"
            title="長期的に大きなメリット"
            description={`夜間の安い電力を利用して効率よくお湯を沸かすので、毎月の光熱費を大幅に抑えられます。
              長期的には家計の負担軽減にもつながります。`}
          />
        </article>
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            title="家族みんなが快適に使える"
            image="/hand-wash.jpg"
            alt="子供が手を洗っている様子"
            description={`大量タンクにより、お風呂や洗面所、キッチンなど複数箇所で快適に給湯。
              忙しい朝も家族全員がストレスなく使えます。`}
          />
        </article>
        <article
          className="w-full md:w-1/3"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <_InfoCard
            image="/shower.jpg"
            alt="シャワーヘッドから水が出ている様子"
            title="火を使わずにお湯を沸かす"
            description={`火を使わず安全にお湯を供給できる点や、環境負荷を抑えられる点もメリットとして考慮すると、経済性だけでなく暮らし全体の安心にもつながります。`}
          />
        </article>
      </div>
      <h3
        ref={refAcordionTitle}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-xl font-bold mt-40 text-center"
      >
        エコキュートに関するよくある疑問
      </h3>
      <Acordion
        ref={refAcordion}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        items={[
          {
            question: '	家族4人だとお湯は足りますか？',
            answer: `基本的には充分です。一般的な4人家族用のタンクで1日分の生活用水は十分に確保できます。    
ただし、連続で長時間使用する場合や、家族が多い場合はタンク容量の大きいモデルを選ぶとより安心です`,
          },
          {
            question: '冬でもちゃんとお湯は出ますか？',
            answer: `はい、問題ありません。エコキュートは空気の熱を利用してお湯を作りますが、寒冷地対応モデルであればマイナス25度の環境でも安定して稼働します。  
さらに、タンクにお湯を貯めておく方式なので、寒い冬でも入浴や家事に必要なお湯がすぐに使えます。`,
          },
          {
            question: ' エコキュートって電気代は本当に節約できますか？',
            answer: ` はい。夜間の安い電力を使って効率的にお湯を沸かすため、毎月の光熱費を大幅に抑えられます。長期的には家計の負担軽減にもつながります。`,
          },
          {
            question: '家族が同時にお湯を使っても大丈夫ですか？',
            answer: `お風呂・洗面所・キッチンなど複数箇所で同時に使用しても快適に給湯できます。
            多人数で同時使用すると、わずかに温度や水圧が変わることがあります。`,
          },
          {
            question: 'お手入れは大変ですか？',
            answer: `タンクや給湯器の外装、フィルターなど日常のお手入れは簡単です。
            内部の点検や故障対応は専門スタッフがサポートしますので、安心してご利用いただけます。`,
          },
        ]}
      />
    </div>
  )
}
