import { Image as ImageIcon } from 'lucide-react'

import { _RevealItems } from './components/_RevealItems'

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

        <_RevealItems className="mt-8">
          <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-12 text-center shadow-[0_16px_36px_rgba(0,0,0,0.18)]">
            <span className="flex size-14 items-center justify-center rounded-full border border-white/15 bg-white/10">
              <ImageIcon aria-hidden="true" className="size-6 text-[#9aa76a]" />
            </span>
            <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-[#9aa76a]">
              COMING SOON
            </p>
            <p className="mt-3 text-xl font-semibold tracking-[0.08em] sm:text-2xl">
              施工事例は現在準備中です
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
              公開まで今しばらくお待ちください。
            </p>
          </div>
        </_RevealItems>
      </div>
    </section>
  )
}
