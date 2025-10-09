'use client'

import { useEffect, useRef } from 'react'

import { SectionHeader } from '@/components/Section'

import { motion } from '../motion'

export const _RecruitSection = () => {
  const refInfo = useRef<HTMLDivElement>(null)
  const refTell = useRef<HTMLDivElement>(null)
  const refMail = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const i = refInfo.current
    if (i) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          motion.to(i, 1.2, 'out', {
            opacity: 1,
            translateY: '0px',
          })
        }
      })
      observer.observe(i)
      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const c = refTell.current
    const m = refMail.current
    if (c && m) {
      const observer = new IntersectionObserver(async (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          motion.to(c, 1.5, 'out', {
            opacity: 1,
            translateY: '0px',
          })
          await motion.delay(0.1)
          motion.to(m, 1.5, 'out', {
            opacity: 1,
            translateY: '0px',
          })
        }
      })
      observer.observe(c)

      return () => observer.disconnect()
    }
  }, [])

  return (
    <>
      <section className="wrapper">
        <SectionHeader
          description=""
          subtitle="Recuruit"
          title="採用情報の詳細"
        />
        <div
          ref={refInfo}
          className="mt-12 flex w-full flex-col"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <article className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold">営業担当</h3>
            <div className="flex w-full items-start border-b border-gray-200 pb-2 sm:mt-4">
              <h4 className="w-1/4 text-sm leading-relaxed text-gray-600 sm:text-base">
                業務内容
              </h4>
              <ul className="w-3/4 shrink-0 list-outside list-disc pl-5 text-sm font-semibold text-dark6 sm:text-base">
                <li>
                  お客様の住まいや暮らしに関するご要望を伺い、最適なプランをご提案します。
                </li>
                <li>
                  新規のお客様対応だけでなく、既存のお客様との関係構築やアフターフォローも行います。
                </li>
              </ul>
            </div>
            <div className="flex w-full items-start border-b border-gray-200 pb-2">
              <h4 className="w-1/4 text-sm leading-relaxed text-gray-600 sm:text-base">
                求める
                <br className="sm:hidden" />
                人物像
              </h4>
              <ul className="w-3/4 shrink-0 list-outside list-disc pl-5 text-sm font-semibold text-dark6 sm:text-base">
                <li>人と話すことが好きな方</li>
                <li>報告・連絡・相談をしっかりできる方</li>
                <li>新しいことに前向きに挑戦できる方</li>
              </ul>
            </div>
            <div className="flex w-full items-start border-b border-gray-200 pb-2">
              <h4 className="w-1/4 text-sm leading-relaxed text-gray-600 sm:text-base">
                応募条件
              </h4>
              <ul className="w-3/4 shrink-0 list-outside list-disc pl-5 text-sm font-semibold text-dark6 sm:text-base">
                <li>学歴不問、未経験歓迎</li>
                <li>普通自動車免許があると望ましい</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section className="wrapper pt-0">
        <SectionHeader description="" subtitle="Entry" title="応募方法" />
        <div className="mt-12 flex flex-col gap-6">
          <div
            ref={refTell}
            className="flex flex-col gap-2"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            <h3 className="text-xl font-semibold">電話でのお問い合わせ</h3>
            <div className="">
              <p className="text-sm sm:text-base">
                <span className="inline-block w-[120px] text-gray-600">
                  TEL
                </span>
                <span className="font-semibold">090-7629-7452</span>
              </p>
              <p className="text-sm sm:text-base">
                <span className="inline-block w-[120px] text-gray-600">
                  受付時間
                </span>
                <span className="font-semibold">平日 10:00～18:00</span>
              </p>
            </div>
          </div>
          <div
            ref={refMail}
            className="mt-6 flex flex-col gap-2"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            <h3 className="text-xl font-semibold">メールでのお問い合わせ</h3>
            <div className="text-sm sm:text-base">
              <p className="flex">
                <span className="inline-block w-[120px] text-gray-600">
                  Email
                </span>
                <span className="font-semibold">
                  ivyhome.corp2025@outlook.jp
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
