'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { motion } from '../motion'

const Row = ({ children }: { children: ReactNode }) => {
  const refRow = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const row = refRow.current
    if (!row) return
    const observer = new IntersectionObserver(
      async (entries) => {
        for (let e = 0; e < entries.length; e++) {
          const entry = entries[e]
          if (entry.isIntersecting) {
            const itemNodes = Array.from(
              row.querySelectorAll(':scope > *'),
            ) as HTMLElement[]
            for (let i = 0; i < itemNodes.length; i++) {
              const el =
                (itemNodes[i].firstElementChild as HTMLElement) ?? itemNodes[i]
              await motion.delay(0.15)
              motion.to(el, 1.3, 'out', { opacity: 1, translateY: '0px' })
            }
            observer.unobserve(row)
          }
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(row)
  }, [])

  return (
    <div ref={refRow} className="grid grid-cols-1 gap-6 md:grid-cols-3 js-row">
      {children}
    </div>
  )
}

const __ArticleCard = ({
  imageSrc,
  date,
  title,
  description,
}: {
  imageSrc: string
  date: string
  title: string
  description?: string
}) => {
  return (
    <div
      style={{ opacity: 0, transform: 'translateY(100px)' }}
      className="flex flex-col transition-all duration-300 hover:opacity-80 cursor-pointer"
    >
      <div className="w-full h-[250px] rounded-lg overflow-hidden border border-gray-200">
        <img src={imageSrc} alt={title} className="w-full h-full " />
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-500 mt-2">{date}</p>
        <h2
          className={`text-lg mt-1 font-bold${description ? ' line-clamp-1' : ''}`}
        >
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-gray-500 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export const __ArticlesClient = () => {
  const refContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const c = refContainer.current
    if (c) {
      const observer = new IntersectionObserver(
        async (entries) => {
          for (let e = 0; e < entries.length; e++) {
            const entry = entries[e]
            if (entry.isIntersecting) {
              const row = entry.target as HTMLElement
              const itemNodes = Array.from(
                row.querySelectorAll(':scope > *'),
              ) as HTMLElement[]
              for (let i = 0; i < itemNodes.length; i++) {
                const el =
                  (itemNodes[i].firstElementChild as HTMLElement) ??
                  itemNodes[i]
                await motion.delay(0.15)
                motion.to(el, 1.3, 'out', { opacity: 1, translateY: '0px' })
              }
              observer.unobserve(row)
            }
          }
        },
        { threshold: 0.3 },
      )
      const rows = Array.from(
        c.querySelectorAll(':scope > .js-row'),
      ) as HTMLElement[]
      for (let i = 0; i < rows.length; i++) observer.observe(rows[i])
    }
  }, [])

  return (
    <div className="flex flex-col gap-6" ref={refContainer}>
      {[
        {
          imageSrc: '/battery.jpg',
          date: '2025.09.01',
          title: '電気代の節約に成功。月の負担が軽くなりました',
          description:
            '蓄電システムを導入してからピーク時の使用量が下がり、家計に余裕が生まれました。',
        },
        {
          imageSrc: '/solar-panel.jpg',
          date: '2025.08.21',
          title: '太陽光の自家消費率が向上しました',
          description:
            '発電量の見える化で使い方を調整。日中の家事をシフトして効率的に活用しています。',
        },
        {
          imageSrc: '/cooking.jpg',
          date: '2025.07.15',
          title: 'IHクッキングでキッチンが快適に',
          description:
            '火を使わない安心感と掃除のしやすさで、毎日の料理が楽しくなりました。',
        },
        {
          imageSrc: '/cooking2.jpg',
          date: '2025.06.30',
          title: '家事の時短で家族時間が増えました',
        },
        {
          imageSrc: '/sales.jpg',
          date: '2025.06.12',
          title: '補助金の活用で導入費用を抑制',
          description:
            '申請サポートが手厚く、スムーズに手続きを完了できました。初期費用の不安が解消。',
        },
        {
          imageSrc: '/print.jpg',
          date: '2025.05.28',
          title: '月次レポートで使用状況が一目で把握',
        },
        {
          imageSrc: '/bathroom.jpg',
          date: '2025.05.10',
          title: '給湯の効率化でお風呂がもっと快適に',
        },
      ]
        .reduce(
          (acc, _, i, arr) =>
            i % 3 === 0 ? [...acc, arr.slice(i, i + 3)] : acc,
          [] as (typeof Array.prototype)[],
        )
        .map((row, rIndex) => (
          <Row key={rIndex}>
            {row.map((item, i) => (
              <div key={i}>
                <__ArticleCard
                  imageSrc={item.imageSrc}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </Row>
        ))}
    </div>
  )
}
