import {
  Check,
  HandCoins,
  MapPin,
  ShieldCheck,
  TrendingDown,
} from 'lucide-react'

export const _Benefits = () => {
  return (
    <>
      <section
        aria-label="Ivy Homeの実績とサポート"
        className="mx-auto w-full max-w-[1600px] bg-[linear-gradient(110deg,#091b13_0%,#11271c_52%,#0b1e15_100%)] text-white"
      >
        <div className="mx-auto grid w-full max-w-[1240px] px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {__itemsTrust.map((i) => (
            <div
              key={i.label}
              className="relative flex min-h-36 flex-col items-center justify-center border-b border-white/15 px-5 py-6 text-center last:border-b-0 lg:min-h-[158px] lg:border-b-0 lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-16 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-white/20 lg:last:after:hidden"
            >
              <div className="flex items-center justify-center gap-3">
                <i.icon
                  aria-hidden="true"
                  className="size-6 shrink-0 text-[#8e9b55]"
                  strokeWidth={1.6}
                />
                <p className="text-xs font-semibold tracking-[0.08em] text-white/80">
                  {i.label}
                </p>
              </div>
              <p className="mt-2 flex items-baseline justify-center whitespace-nowrap font-semibold tracking-[0.02em]">
                {i.prefix && <span className="mr-1 text-xl">{i.prefix}</span>}
                <span className={i.classValue}>{i.value}</span>
                {i.suffix && <span className="ml-1 text-lg">{i.suffix}</span>}
              </p>
              <p className="mt-2 text-[10px] text-white/60 sm:text-xs">
                {i.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="simulation"
        className="scroll-mt-24 bg-[#fcfcfa] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-ivy7">
              BETTER LIVING
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-relaxed tracking-[0.06em] text-dark8 sm:text-3xl">
              導入すると、暮らしはこんなに変わります
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
            <div className="rounded-xl border border-[#ecebe5] bg-white px-6 py-8 text-center shadow-[0_14px_40px_rgba(21,50,35,0.06)] sm:px-10">
              <p className="text-sm font-semibold text-dark7">
                年間の電気代削減シミュレーション（例）
              </p>
              <div className="mt-4">
                <p className="text-xs text-dark5">導入前の年間電気代</p>
                <p className="mt-1 text-3xl font-semibold tracking-[0.04em] text-dark8">
                  <span className="mr-1 text-sm font-normal text-dark5">
                    約
                  </span>
                  286,000
                  <span className="ml-1 text-sm">円</span>
                </p>
              </div>

              <TrendingDown
                aria-hidden="true"
                className="mx-auto my-3 size-6 text-ivy7"
                strokeWidth={2}
              />

              <div>
                <p className="text-xs text-dark5">導入後の年間電気代</p>
                <p className="mt-1 text-3xl font-semibold tracking-[0.04em] text-dark8">
                  <span className="mr-1 text-sm font-normal text-dark5">
                    約
                  </span>
                  112,000
                  <span className="ml-1 text-sm">円</span>
                </p>
              </div>

              <p className="mt-3 rounded-md bg-[#fff4c9]/70 px-4 py-3 text-sm font-semibold text-dark8 sm:text-base">
                年間 約
                <strong className="mx-1 text-2xl font-semibold">174,000</strong>
                円の削減に！
              </p>
              <p className="mt-3 text-[10px] leading-relaxed text-dark4">
                ※4人家族・戸建て・オール電化の一般的なケース
              </p>
            </div>

            <ul className="overflow-hidden rounded-xl border border-[#ecebe5] bg-white shadow-[0_14px_40px_rgba(21,50,35,0.06)]">
              {__itemsBenefit.map((i) => (
                <li
                  key={i}
                  className="flex min-h-[88px] items-center gap-4 border-b border-[#ecebe5] px-6 py-5 text-sm font-medium leading-relaxed text-dark7 last:border-b-0 sm:px-8 sm:text-base"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ivy7 text-white">
                    <Check
                      aria-hidden="true"
                      className="size-4"
                      strokeWidth={3}
                    />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

const __itemsTrust = [
  {
    icon: HandCoins,
    classValue: 'text-[34px] leading-none sm:text-[38px]',
    label: '施工実績',
    note: '※2024年9月時点',
    prefix: '',
    suffix: '件以上',
    value: '1,200',
  },
  {
    icon: MapPin,
    classValue: 'text-[27px] leading-none sm:text-[30px]',
    label: '対応エリア',
    note: '四国エリアもご相談可能',
    prefix: '',
    suffix: '',
    value: '愛媛県・高知県',
  },
  {
    icon: ShieldCheck,
    classValue: 'text-[34px] leading-none sm:text-[38px]',
    label: '安心の保証・サポート',
    note: '充実のアフターサポート',
    prefix: '最長',
    suffix: '年保証',
    value: '20',
  },
] as const

const __itemsBenefit = [
  '電気を自宅でつくるから、電気代が大幅に削減',
  '停電時も電気が使えて安心',
  '売電・節約のダブル効果で家計にゆとり',
  '環境にやさしい暮らしで、未来に貢献',
] as const
