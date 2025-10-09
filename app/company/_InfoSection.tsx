'use client'

import { useEffect, useRef } from 'react'

import { motion } from '@/app/motion'

export const _InfoSection = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refSubtitle = useRef<HTMLParagraphElement>(null)
  const refTitle = useRef<HTMLHeadingElement>(null)
  const refInfo = useRef<HTMLDivElement>(null)
  const refDescription = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    ;(async () => {
      const container = refContainer.current
      const s = refSubtitle.current
      const h = refTitle.current
      const i = refInfo.current
      const d = refDescription.current
      if (container && s && h && i && d) {
        const observer = new IntersectionObserver(
          async (entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
              motion.to(s, 1.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              await motion.delay(0.3)
              motion.to(h, 1.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              await motion.delay(0.3)
              motion.to(d, 1.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              await motion.delay(0.3)
              motion.to(i, 1.8, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          },
          { threshold: 0.5 },
        )

        observer.observe(container)

        return () => observer.disconnect()
      }
    })()
  }, [])

  return (
    <div className="wrapper" id="info">
      <div ref={refContainer} className="flex flex-col gap-20">
        <div className="flex flex-col">
          <p
            ref={refSubtitle}
            className="text-sm text-ivy5/80 lg:text-lg"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            Overview
          </p>
          <h2
            ref={refTitle}
            className="mt-6 text-2xl font-bold lg:text-4xl"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            会社概要
          </h2>
        </div>
      </div>
      <p
        ref={refDescription}
        className="mt-6 hidden text-base text-dark6 sm:block"
        style={{ opacity: 0, transform: 'translateY(100px)' }}
      >
        当社は、太陽光発電やエコキュート、蓄電池、シロアリ駆除、リフォームといった住まいに関わる設備の販売・施工を行っております。
        <br />
        環境にやさしく、安心して長くお使いいただける住まいづくりをサポートしています。
      </p>
      <div
        ref={refInfo}
        className="mt-8 flex w-full flex-col sm:mt-16"
        style={{ opacity: 0, transform: 'translateY(100px)' }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex w-full items-stretch border-b border-gray-200">
            <h3 className="w-1/4 py-2 leading-6 text-gray-600">会社名</h3>
            <p className="w-3/4 shrink-0 py-2 text-base font-semibold leading-6 text-dark6">
              株式会社アイビーホーム
            </p>
          </div>
          <div className="flex w-full items-stretch border-b border-gray-200">
            <h3 className="w-1/4 py-2 leading-6 text-gray-600">所在地</h3>
            <p className="w-3/4 shrink-0 py-2 text-base font-semibold leading-6 text-dark6">
              愛媛県松山市朝生田町7丁目2-22大興ビル201
            </p>
          </div>
          <div className="flex w-full items-stretch border-b border-gray-200">
            <h3 className="w-1/4 py-2 leading-6 text-gray-600">設立</h3>
            <p className="w-3/4 shrink-0 py-2 text-base font-semibold leading-6 text-dark6">
              2025年10月
            </p>
          </div>
          <div className="flex w-full items-stretch border-b border-gray-200">
            <h3 className="w-1/4 py-2 leading-6 text-gray-600">代表取締役</h3>
            <p className="w-3/4 shrink-0 py-2 text-base font-semibold leading-6 text-dark6">
              小西 裕也
            </p>
          </div>
          <div className="flex w-full items-stretch border-b border-gray-200">
            <h3 className="w-1/4 py-2 leading-6 text-gray-600">資本金</h3>
            <p className="w-3/4 shrink-0 py-2 text-base font-semibold leading-6 text-dark6">
              300万円
            </p>
          </div>
          <div className="flex w-full items-stretch border-b border-gray-200">
            <h3 className="w-1/4 py-2 leading-6 text-gray-600">事業内容</h3>
            <p className="w-3/4 shrink-0 py-2 text-base font-semibold leading-6 text-dark6">
              太陽光パネル、蓄電池、エコキュート、シロアリ駆除、リフォーム
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
