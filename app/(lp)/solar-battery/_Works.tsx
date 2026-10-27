import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

import { _RevealItems } from './components/_RevealItems'
import { data, isWorksPublished } from './works'

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

        {!isWorksPublished && (
          <_RevealItems className="mt-8">
            <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-12 text-center sm:min-h-72">
              <ImageIcon
                aria-hidden="true"
                className="size-10 text-[#9aa76a]"
                strokeWidth={1.5}
              />
              <p className="mt-5 text-lg font-semibold tracking-[0.08em] sm:text-xl">
                施工事例を準備しています
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                公開まで今しばらくお待ちください。
              </p>
            </div>
          </_RevealItems>
        )}

        {isWorksPublished && (
          <_RevealItems className="mt-8 grid gap-5 lg:grid-cols-3" role="list">
            {data.map((w) => (
              <article
                key={w.slug}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white text-dark8 shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
                role="listitem"
              >
                <div className="flex h-40 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#e7ebe7_0%,#f6f7f4_100%)] text-dark4">
                  {w.image && (
                    <img
                      alt={w.image.alt}
                      className="size-full object-cover"
                      loading="lazy"
                      src={w.image.src}
                    />
                  )}
                  {!w.image && (
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
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-[0.08em] text-ivy7">
                    {w.overview.customer && <>{w.overview.customer}・</>}
                    {w.overview.area}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-relaxed sm:text-lg">
                    {w.title}
                  </h3>
                  {(w.overview.solar || w.overview.battery) && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {w.overview.solar && (
                        <span className="rounded-full border border-ivy7/50 bg-[#edf1e7] px-3 py-1 text-xs font-semibold text-ivy7">
                          太陽光パネル
                        </span>
                      )}
                      {w.overview.battery && (
                        <span className="rounded-full border border-ivy7/50 bg-[#edf1e7] px-3 py-1 text-xs font-semibold text-ivy7">
                          蓄電池
                        </span>
                      )}
                    </div>
                  )}
                  <div className="mt-4 flex justify-end">
                    <Link
                      aria-label={`${w.title}の詳細を見る`}
                      className="group inline-flex min-h-11 items-center justify-center rounded-full border border-ivy8 px-5 py-2 text-xs font-semibold text-ivy8 transition-colors hover:bg-ivy8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy8 sm:px-7 sm:text-sm"
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
                </div>
              </article>
            ))}
          </_RevealItems>
        )}
      </div>
    </section>
  )
}
