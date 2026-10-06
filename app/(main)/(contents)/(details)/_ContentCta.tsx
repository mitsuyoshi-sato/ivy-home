import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export const _ContentCta = () => {
  return (
    <section
      aria-labelledby="content-cta-title"
      className="wrapper py-0 pb-20 lg:px-6 lg:pb-24"
    >
      <article className="relative min-h-[320px] overflow-hidden rounded-xl border border-ivy5/30 shadow-sm md:min-h-[360px]">
        <Link
          className="group/button peer/button absolute bottom-8 left-6 z-20 inline-flex min-h-12 items-center justify-center rounded-full border border-ivy7 bg-ivy6 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 sm:bottom-10 sm:left-10 md:left-14"
          href="/solar-battery"
        >
          太陽光・蓄電池について詳しく見る
          <ArrowRightIcon
            aria-hidden="true"
            className="ml-2 size-4 transition-transform duration-200 group-hover/button:translate-x-1"
          />
        </Link>
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-right transition-transform duration-500 peer-hover/button:scale-[1.02] peer-focus-visible/button:scale-[1.02]"
          src="/images/website/cta-optimized.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/70 md:via-white/80 md:to-transparent" />
        <div className="relative flex min-h-[320px] max-w-2xl flex-col justify-center px-6 pb-28 pt-10 sm:px-10 md:min-h-[360px] md:px-14">
          <p className="text-sm font-semibold tracking-wider text-ivy7">
            Solar &amp; Battery
          </p>
          <h2
            className="mt-3 text-2xl font-bold leading-relaxed text-dark8 md:text-3xl"
            id="content-cta-title"
          >
            太陽光・蓄電池をご検討中の方へ
          </h2>
          <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-dark5 md:text-base">
            電気代やご家庭の状況に合わせて、最適な設備をご提案します。
          </p>
        </div>
      </article>
    </section>
  )
}
