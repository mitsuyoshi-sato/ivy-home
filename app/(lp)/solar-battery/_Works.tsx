import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

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

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {__itemsWork.map((i) => (
            <article
              key={i.customer}
              className="overflow-hidden rounded-xl border border-white/10 bg-white text-dark8 shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
            >
              <div className="flex h-32 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#e7ebe7_0%,#f6f7f4_100%)] text-dark4">
                <div className="text-center">
                  <ImageIcon
                    aria-hidden="true"
                    className="mx-auto size-7 opacity-60"
                    strokeWidth={1.5}
                  />
                  <p className="mt-2 text-[10px] tracking-[0.12em]">
                    施工写真を準備中
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                <p className="bg-ivy9 relative -mt-5 inline-flex rounded-sm px-3 py-2 text-[10px] font-semibold text-white shadow-md">
                  {i.customer}
                </p>
                <h3 className="mt-4 text-base font-semibold leading-relaxed sm:text-lg">
                  {i.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {i.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-[#eef1ec] px-2.5 py-1 text-[10px] font-medium text-dark6"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <dl className="mt-6 grid grid-cols-2 gap-5 border-t border-gray-100 pt-5">
                  <div>
                    <dt className="text-[10px] font-medium text-dark4">
                      年間削減額
                    </dt>
                    <dd className="mt-1 whitespace-nowrap text-sm font-medium text-dark8">
                      約
                      <strong className="mx-1 text-xl font-semibold">
                        {i.saving}
                      </strong>
                      円
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium text-dark4">
                      CO₂削減量（年間）
                    </dt>
                    <dd className="mt-1 whitespace-nowrap text-sm font-medium text-dark8">
                      約
                      <strong className="mx-1 text-xl font-semibold">
                        {i.co2}
                      </strong>
                      <span className="text-[10px]">kg-CO₂</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
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
  },
  {
    co2: '1,680',
    customer: '今治市　K様邸',
    saving: '154,000',
    tags: ['太陽光 5.2kW', '蓄電池 7.4kWh'],
    title: 'FIT終了後の不安を解消！',
  },
  {
    co2: '1,420',
    customer: '西条市　T様邸',
    saving: '131,000',
    tags: ['太陽光 6.4kW', '蓄電池 9.8kWh'],
    title: '太陽光と蓄電池でさらに快適！',
  },
] as const
