import { ArrowRight, Plus } from 'lucide-react'

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

        <div className="mt-9 grid items-start gap-3 md:grid-cols-2">
          {__itemsFaq.map((i) => (
            <details
              key={i.question}
              className="group overflow-hidden rounded-lg border border-[#ebece8] bg-[#f7f8f5] open:bg-white"
            >
              <summary className="focus-visible:outline-inset flex min-h-16 cursor-pointer list-none items-center gap-4 px-5 py-4 text-sm font-semibold text-dark8 transition-colors hover:text-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ivy6 sm:px-6 sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ivy8 text-xs font-semibold text-white">
                  Q
                </span>
                <span className="flex-1">{i.question}</span>
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-dark5 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <div className="flex gap-4 border-t border-[#ebece8] bg-white px-5 py-5 sm:px-6">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-ivy7 text-xs font-semibold text-ivy7">
                  A
                </span>
                <p className="pt-0.5 text-sm leading-7 text-dark6">
                  {i.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

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
      '電気の使用量や屋根の条件、設置する設備によって効果は異なります。現在の電気代をもとに、導入前に削減効果をシミュレーションしてご案内します。',
    question: '本当に電気代は安くなりますか？',
  },
  {
    answer:
      '現地調査から設置完了までは、通常1〜3か月程度が目安です。設備の在庫状況や申請手続きによって前後するため、詳しい日程は個別にご案内します。',
    question: '設置までどのくらいかかりますか？',
  },
  {
    answer:
      '停電時に使える電気の量や時間は、蓄電池の容量とその時点の残量、使用する家電によって異なります。必要な家電を想定して最適な容量をご提案します。',
    question: '停電時はどのくらい電気が使えますか？',
  },
  {
    answer:
      '太陽光パネルは日常的な操作をほとんど必要としませんが、安全に長く使うためには定期的な点検をおすすめしています。設置後のご相談もサポートします。',
    question: 'メンテナンスは必要ですか？',
  },
] as const
