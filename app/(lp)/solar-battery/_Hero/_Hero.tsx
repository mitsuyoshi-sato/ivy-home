import { ArrowRight, Calculator } from 'lucide-react'

import { _HeroImage } from './_HeroImage'

export const _Hero = () => {
  return (
    <section className="mx-auto grid min-h-[720px] w-full max-w-[1600px] bg-[#f8f9f5] xl:grid-cols-[44%_56%]">
      <div className="relative z-10 flex flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:px-10 lg:pb-16 lg:pt-32 xl:pl-[max(40px,calc((100vw-1440px)/2+40px))]">
        <h1 className="font-serif text-[32px] font-medium leading-[1.45] tracking-[0.06em] text-dark8 sm:text-5xl xl:text-[48px]">
          <span className="block">電気を、</span>
          <span className="block whitespace-nowrap">もっとかしこく使う。</span>
        </h1>
        <p className="mt-5 text-sm font-bold leading-relaxed text-ivy7 sm:text-base">
          太陽光・蓄電池で、これからの電気代をもっと自由に。
        </p>

        <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 sm:gap-6">
          {__itemsFeature.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center"
            >
              <img
                alt=""
                aria-hidden="true"
                className="size-12 sm:size-14"
                height="64"
                src={f.icon}
                width="64"
              />
              <p className="mt-3 whitespace-pre-line text-xs font-bold leading-relaxed text-dark8 sm:text-sm">
                {f.title}
              </p>
              <p className="mt-1 whitespace-pre-line text-[10px] leading-4 text-dark5 sm:text-xs sm:leading-5">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <a
            className="group inline-flex min-h-14 items-center justify-center whitespace-nowrap rounded-md border border-ivy8 bg-ivy8 px-4 py-3 text-xs font-bold text-white shadow-lg transition-colors hover:bg-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6"
            href="#simulation"
          >
            <Calculator aria-hidden="true" className="mr-2 size-4" />
            無料シミュレーションをはじめる
            <ArrowRight
              aria-hidden="true"
              className="ml-2 size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            className="group inline-flex min-h-14 items-center justify-center whitespace-nowrap rounded-md border border-gray-200 bg-white/90 px-4 py-3 text-xs font-bold text-dark8 shadow-lg transition-colors hover:border-ivy7 hover:text-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6"
            href="#contact"
          >
            無料相談・お見積もりはこちら
            <ArrowRight
              aria-hidden="true"
              className="ml-2 size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      <_HeroImage />
    </section>
  )
}

const __itemsFeature = [
  {
    description: '自宅でクリーンな電気を\nつくり電気代を削減',
    icon: '/images/lp/solar-battery/solar-power.svg',
    title: '電気をつくる\n太陽光発電',
  },
  {
    description: '余った電気をためて\n夜間や停電時に活用',
    icon: '/images/lp/solar-battery/battery-storage.svg',
    title: '電気をためる\n蓄電池',
  },
  {
    description: '昼間につくった電気を\n夜間や停電時に活用',
    icon: '/images/lp/solar-battery/light-bulb.svg',
    title: '電気を使う\n自家消費',
  },
] as const
