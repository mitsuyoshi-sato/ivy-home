import { ArrowRight } from 'lucide-react'

import { _FaqList } from './_FaqList'

export const _Faq = () => {
  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-[1600px] scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-ivy7">
              FAQ
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0.06em] text-dark8 sm:text-3xl">
              よくあるご質問
            </h2>
          </div>
          <a
            className="group hidden min-h-11 items-center justify-center rounded-full border border-dark8/20 px-6 py-2 text-xs font-semibold text-dark8 transition-colors hover:border-ivy7 hover:text-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 sm:inline-flex"
            href="#contact"
          >
            その他の質問を相談する
            <ArrowRight
              aria-hidden="true"
              className="ml-3 size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <_FaqList items={__itemsFaq} />

        <a
          className="group mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-dark8/20 px-6 py-3 text-sm font-semibold text-dark8 transition-colors hover:border-ivy7 hover:text-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 sm:hidden"
          href="#contact"
        >
          その他の質問を相談する
          <ArrowRight
            aria-hidden="true"
            className="ml-3 size-4 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  )
}

const __itemsFaq = [
  {
    answer:
      'ご家庭によっては、電気代を大きく抑えられるケースもあります。事前に削減効果をシミュレーションし、メリットが少ない場合も正直にお伝えします。',
    question: '本当に電気代は安くなりますか？',
  },
  {
    answer:
      '現地調査から設置完了までは、通常1〜3か月程度が目安です。設備の在庫状況や申請手続きによって前後するため、詳しい日程は個別にご案内します。',
    question: '設置までどのくらいかかりますか？',
  },
  {
    answer:
      '蓄電池の容量や使用する家電によって異なりますが、10kWh程度なら、必要最低限の家電に絞ることで1日程度、使い方によってはそれ以上使用できる場合もあります。 停電時に使いたい家電に合わせて、最適な容量をご提案します。',
    question: '停電時はどのくらい電気が使えますか？',
  },
  {
    answer:
      '太陽光パネルは日常的な操作をほとんど必要としませんが、安全に長く使うためには定期的な点検をおすすめしています。設置後のご相談もサポートします。',
    question: 'メンテナンスは必要ですか？',
  },
] as const
