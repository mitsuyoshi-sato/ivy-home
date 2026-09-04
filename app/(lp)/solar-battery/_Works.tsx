import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

import { _RevealItems } from './_Client/_RevealItems'

export const _Works = () => {
  return (
    <section
      id="works"
      className="mx-auto w-full max-w-[1600px] scroll-mt-24 bg-[linear-gradient(110deg,#091b13_0%,#11271c_52%,#0b1e15_100%)] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex items-center justify-between gap-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#9aa76a]">
              WORKS
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[0.08em] sm:text-3xl">
              施工事例
            </h2>
          </div>
          <Link
            className="group inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-5 py-2 text-xs font-semibold transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:text-sm"
            href="/works"
          >
            すべての施工事例を見る
            <ArrowRight
              aria-hidden="true"
              className="ml-3 size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <_RevealItems className="mt-8 grid gap-5 lg:grid-cols-3" role="list">
          {__itemsWork.map((i) => (
            <article
              key={i.customer}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white text-dark8 shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
              role="listitem"
            >
              <img
                src={i.image}
                alt={i.title}
                className="h-full w-full object-cover object-top"
              />
              <div className="backdrop-blur-xs absolute inset-x-0 bottom-0 flex min-h-[60%] flex-col justify-between bg-white/85 px-6 py-4">
                <div className="absolute left-6 top-0 -translate-y-1/2 rounded-md bg-ivy8 px-4 py-1.5">
                  <p className="text-xs font-semibold tracking-[0.12em] text-[#9aa76a]">
                    {i.customer}
                  </p>
                </div>
                <div className="mt-4 flex flex-col gap-2 md:mt-6 md:gap-3">
                  <div className="font-semibold tracking-[0.08em]">
                    {i.title}
                  </div>
                  <div className="flex gap-2">
                    {i.tags.map((tag) => (
                      <div
                        key={tag}
                        className="rounded-md bg-[#e5f0e8] px-2 py-1 text-xs font-semibold text-ivy8"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div className="text-xs font-semibold tracking-[0.12em] text-gray-500">
                      年間削減費用
                    </div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-gray-800">
                      約
                      <span className="mx-0.5 text-xl text-ivy8 md:text-2xl">
                        {i.saving}
                      </span>
                      円
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-semibold tracking-[0.12em] text-gray-500">
                      CO2削減量
                    </div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-gray-800">
                      約
                      <span className="mx-0.5 text-xl text-ivy8 md:text-2xl">
                        {i.co2}
                      </span>
                      kg-CO2
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </_RevealItems>
      </div>
    </section>
  )
}

const __itemsWork = [
  {
    co2: '1,950',
    customer: '松山市　S様邸',
    saving: '182,000',
    tags: ['太陽光 6.0kW', '蓄電池 9.6kWh'],
    title: '電気代が月々約12,000円削減！',
    image: '/images/lp/solar-battery/house-light.webp',
  },
  {
    co2: '1,680',
    customer: '今治市　K様邸',
    saving: '154,000',
    tags: ['太陽光 5.2kW', '蓄電池 7.4kWh'],
    title: 'FIT終了後の不安を解消！',
    image: '/images/lp/solar-battery/house-dark.webp',
  },
  {
    co2: '1,420',
    customer: '西条市　T様邸',
    saving: '131,000',
    tags: ['太陽光 6.4kW', '蓄電池 9.8kWh'],
    title: '太陽光と蓄電池でさらに快適！',
    image: '/images/lp/solar-battery/house-light.webp',
  },
] as const
