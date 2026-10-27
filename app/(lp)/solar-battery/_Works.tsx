import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

import { _RevealItems } from './components/_RevealItems'
import { data } from './works'

export const _Works = () => {
  return (
    <section
      id="works"
      className="mx-auto w-full max-w-[1600px] scroll-mt-24 bg-[linear-gradient(110deg,#091b13_0%,#11271c_52%,#0b1e15_100%)] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#9aa76a]">
            WORKS
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[0.08em] sm:text-3xl">
            施工事例
          </h2>
        </div>

        <_RevealItems className="mt-8 grid gap-5 lg:grid-cols-3" role="list">
          {data.map((w) => (
            <article
              key={w.slug}
              className="overflow-hidden rounded-xl border border-white/10 bg-white text-dark8 shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
              role="listitem"
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
              <div className="p-5 sm:p-6">
                <h3 className="text-base font-semibold leading-relaxed sm:text-lg">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-dark6">
                  {w.description}
                </p>
                <Link
                  aria-label={`${w.title}の詳細を見る`}
                  className="group mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-ivy8 px-5 py-2 text-xs font-semibold text-ivy8 transition-colors hover:bg-ivy8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy8 sm:px-7 sm:text-sm"
                  href={`/solar-battery/works/${w.slug}`}
                  scroll={false}
                >
                  詳細を見る
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-3 size-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </_RevealItems>
      </div>
    </section>
  )
}
