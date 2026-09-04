import {
  Headset,
  PiggyBank,
  ShieldCheck,
  ShieldUser,
  Wrench,
} from 'lucide-react'

import { _RevealItems } from './_Client/_RevealItems'

export const _Reasons = () => {
  return (
    <section
      id="strengths"
      className="mx-auto w-full max-w-[1600px] scroll-mt-24 bg-[#fcfcfa] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-ivy7">
          WHY IVY HOME
        </p>
        <h2 className="mt-3 text-center text-2xl font-semibold tracking-[0.06em] text-dark8 sm:text-3xl">
          アイビーホームが選ばれる理由
        </h2>

        <_RevealItems
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          order="center-out"
          role="list"
        >
          {__itemsReason.map((i) => (
            <article
              key={i.title}
              className="rounded-xl border border-[#ecebe5] bg-white px-5 py-7 text-center shadow-[0_12px_32px_rgba(21,50,35,0.05)]"
              role="listitem"
            >
              <i.icon
                aria-hidden="true"
                className="mx-auto size-12 text-[#657546]"
                strokeWidth={1.4}
              />
              <h3 className="mt-5 text-sm font-semibold text-dark8 sm:text-base">
                {i.title}
              </h3>
              <p className="mt-3 text-xs leading-6 text-dark5">
                {i.description}
              </p>
            </article>
          ))}
        </_RevealItems>
      </div>
    </section>
  )
}

const __itemsReason = [
  {
    description:
      'ご家庭の電気使用量や暮らし方に合わせて、最適なプランをご提案します。',
    icon: ShieldUser,
    title: '最適なご提案',
  },
  {
    description: '複雑な補助金の申請も、分かりやすく丁寧にサポートします。',
    icon: PiggyBank,
    title: '補助金申請サポート',
  },
  {
    description: '経験豊富な自社スタッフが、責任をもって丁寧に施工します。',
    icon: Wrench,
    title: '自社施工の安心品質',
  },
  {
    description: '設置後も点検やトラブル対応など、末永くサポートします。',
    icon: Headset,
    title: '充実のアフターサポート',
  },
  {
    description:
      '製品保証と施工保証で、設置後も長く安心してお使いいただけます。',
    icon: ShieldCheck,
    title: '長期保証で安心',
  },
] as const
