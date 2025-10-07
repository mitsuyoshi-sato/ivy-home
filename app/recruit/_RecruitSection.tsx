'use client'

import { useEffect, useRef } from 'react'
import { motion } from '../motion'
import { SectionHeader } from '@/components/Section'
import { Hero } from '@/components/Hero'
import { Breadcrumb } from '@/components/Breadcrumb'

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
      <Hero
        image={{ src: 'walk.jpg', alt: '' }}
        subtitle="Recuruit"
        title="採用情報"
      />
      <Breadcrumb
        items={[
          { title: 'ホーム', href: '/', icon: 'home' },
          { title: '採用情報', href: '/recruit', icon: 'users', current: true },
        ]}
      />
      <section className="wrapper">
        <SectionHeader
          title="採用情報の詳細"
          subtitle="Recuruit"
          description=""
        />
        <div
          ref={refInfo}
          className="mt-12 flex flex-col w-full"
          style={{ opacity: 0, transform: 'translateY(100px)' }}
        >
          <article className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold">営業担当</h3>
            <div className="flex w-full items-start border-b border-gray-200 pb-2 sm:mt-4">
              <h4 className="text-sm sm:text-base w-1/4 text-gray-600 leading-relaxed">
                業務内容
              </h4>
              <ul className="text-sm sm:text-base text-dark6 font-semibold shrink-0 w-3/4 list-disc list-outside pl-5">
                <li>
                  お客様の住まいや暮らしに関するご要望を伺い、最適なプランをご提案します。
                </li>
                <li>
                  新規のお客様対応だけでなく、既存のお客様との関係構築やアフターフォローも行います。
                </li>
              </ul>
            </div>
            <div className="flex w-full items-start border-b border-gray-200 pb-2">
              <h4 className="text-sm sm:text-base w-1/4 text-gray-600 leading-relaxed">
                求める
                <br className="sm:hidden" />
                人物像
              </h4>
              <ul className="text-sm sm:text-base text-dark6 font-semibold shrink-0 w-3/4 list-disc list-outside pl-5">
                <li>人と話すことが好きな方</li>
                <li>報告・連絡・相談をしっかりできる方</li>
                <li>新しいことに前向きに挑戦できる方</li>
              </ul>
            </div>
            <div className="flex w-full items-start border-b border-gray-200 pb-2">
              <h4 className="text-sm sm:text-base w-1/4 text-gray-600 leading-relaxed">
                応募条件
              </h4>
              <ul className="text-sm sm:text-base text-dark6 font-semibold shrink-0 w-3/4 list-disc list-outside pl-5">
                <li>学歴不問、未経験歓迎</li>
                <li>普通自動車免許があると望ましい</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section className="wrapper pt-0">
        <SectionHeader title="応募方法" subtitle="Entry" description="" />
        <div className="mt-12 flex flex-col gap-6">
          <div
            ref={refTell}
            style={{ opacity: 0, transform: 'translateY(100px)' }}
            className="flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold">電話でのお問い合わせ</h3>
            <div className="">
              <p className="text-sm sm:text-base font-semibold">
                <span className="text-gray-600 w-[120px] inline-block">
                  TEL
                </span>{' '}
                090-7629-7452
              </p>
              <p className="text-sm sm:text-base font-semibold">
                <span className="text-gray-600 w-[120px] inline-block">
                  受付時間
                </span>{' '}
                平日 10:00～18:00
              </p>
            </div>
          </div>
          <div
            ref={refMail}
            style={{ opacity: 0, transform: 'translateY(100px)' }}
            className="flex flex-col gap-2 mt-6"
          >
            <h3 className="text-xl font-semibold">メールでのお問い合わせ</h3>
            <div className="text-sm sm:text-base">
              <p className="font-semibold flex">
                <span className="w-[120px] inline-block text-gray-600">
                  Email
                </span>
                ivyhome.corp2025@outlook.jp
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
