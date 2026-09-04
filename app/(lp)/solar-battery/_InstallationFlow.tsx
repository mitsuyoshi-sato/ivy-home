import {
  ChevronDown,
  ChevronRight,
  Ear,
  HardHat,
  HeartHandshake,
  HeartPlus,
  SearchCheck,
} from 'lucide-react'

import { _FlowLineAnimation } from './_Client/_FlowLineAnimation'
import { _RevealItems } from './_Client/_RevealItems'

export const _InstallationFlow = () => {
  return (
    <section
      id="flow"
      className="mx-auto w-full max-w-[1600px] scroll-mt-24 bg-[#fcfcfa] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px] border-t border-[#e8e9e4] pt-16 sm:pt-20">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-ivy7">
          FLOW
        </p>
        <h2 className="mt-3 text-center text-2xl font-semibold tracking-[0.06em] text-dark8 sm:text-3xl">
          ご相談から設置までの流れ
        </h2>

        <_FlowLineAnimation>
          <_RevealItems
            className="grid gap-12 lg:grid-cols-5 lg:gap-5"
            role="list"
          >
            {__itemsFlow.map((i, n) => (
              <article
                key={i.number}
                className="relative text-center"
                role="listitem"
              >
                <div className="relative z-10 mx-auto flex size-20 items-center justify-center rounded-full border border-[#dfe3dc] bg-white text-[#657546] shadow-[0_8px_24px_rgba(21,50,35,0.06)]">
                  <i.icon
                    aria-hidden="true"
                    className="size-8"
                    strokeWidth={1.5}
                  />
                  <span className="absolute -bottom-2 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center rounded-full bg-ivy7 text-[10px] font-semibold text-white">
                    {i.number}
                  </span>
                </div>
                <h3 className="mt-6 text-sm font-semibold text-dark8 sm:text-base">
                  {i.title}
                </h3>
                <p className="mx-auto mt-3 max-w-52 text-xs leading-6 text-dark5">
                  {i.description}
                </p>

                {n < __itemsFlow.length - 1 && (
                  <>
                    <ChevronRight
                      aria-hidden="true"
                      className="absolute -right-4 top-7 hidden size-6 bg-[#fcfcfa] text-[#8fa06b] lg:block"
                      strokeWidth={2}
                    />
                    <ChevronDown
                      aria-hidden="true"
                      className="absolute -bottom-9 left-1/2 size-6 -translate-x-1/2 text-[#8fa06b] lg:hidden"
                      strokeWidth={2}
                    />
                  </>
                )}
              </article>
            ))}
          </_RevealItems>
        </_FlowLineAnimation>
      </div>
    </section>
  )
}

const __itemsFlow = [
  {
    description: 'お問い合わせフォームから、お気軽にご相談ください。',
    icon: Ear,
    number: '01',
    title: '無料相談・ヒアリング',
  },
  {
    description: 'ご自宅を調査し、最適な設備とプランをご提案します。',
    icon: SearchCheck,
    number: '02',
    title: '現地調査・プラン提案',
  },
  {
    description: '内容とお見積もりにご納得いただけましたら、ご契約となります。',
    icon: HeartHandshake,
    number: '03',
    title: 'ご契約',
  },
  {
    description: '経験豊富なスタッフが、安全かつ丁寧に施工・設置します。',
    icon: HardHat,
    number: '04',
    title: '施工・設置',
  },
  {
    description: '設置後の点検やご相談も、万全の体制でサポートします。',
    icon: HeartPlus,
    number: '05',
    title: 'アフターサポート',
  },
] as const
