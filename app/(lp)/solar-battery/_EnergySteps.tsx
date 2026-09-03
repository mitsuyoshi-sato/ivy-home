import { ChevronDown, ChevronRight } from 'lucide-react'

export const _EnergySteps = () => {
  return (
    <section
      id="energy-flow"
      className="mx-auto w-full max-w-[1600px] scroll-mt-24 bg-[linear-gradient(180deg,#f8f8f5_0%,#ffffff_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-ivy7">
          SMART ENERGY FLOW
        </p>
        <h2 className="mt-3 text-center text-2xl font-semibold leading-relaxed tracking-[0.06em] text-dark8 sm:text-3xl">
          エネルギーを、スマートにつなぐ3つのステップ
        </h2>

        <ol className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-7">
          {__itemsStep.map((i, n) => (
            <li
              key={i.number}
              className="relative rounded-xl border border-[#ecebe5] bg-white p-5 shadow-[0_12px_34px_rgba(21,50,35,0.06)] sm:p-6"
            >
              <div className="flex min-h-28 items-start gap-4">
                <span
                  aria-hidden="true"
                  className="font-sans text-[48px] font-light leading-none tracking-[-0.06em] text-[#939a92] sm:text-[54px]"
                >
                  {i.number}
                </span>
                <div className="pt-1">
                  <h3 className="flex items-center text-base font-semibold text-dark8 sm:text-lg">
                    {i.title}
                    <span className="ml-2 text-sm font-semibold text-dark8">
                      {i.label}
                    </span>
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-dark6 sm:text-sm">
                    {i.description}
                  </p>
                </div>
              </div>

              <img
                alt={i.alt}
                className="mt-5 aspect-[3/1.35] w-full rounded-lg object-cover"
                decoding="async"
                height="1024"
                loading="lazy"
                src={i.image}
                width="1536"
              />

              {n < __itemsStep.length - 1 && (
                <>
                  <ChevronRight
                    aria-hidden="true"
                    className="absolute -right-[34px] top-1/2 hidden size-10 -translate-y-1/2 text-gray-600 lg:block"
                    strokeWidth={2}
                  />
                  <ChevronDown
                    aria-hidden="true"
                    className="absolute -bottom-11 left-1/2 size-10 -translate-x-1/2 text-gray-600 lg:hidden"
                    strokeWidth={2}
                  />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const __itemsStep = [
  {
    alt: '住宅の屋根に設置された太陽光パネル',
    description: '太陽の光で電気をつくり、家庭内でかしこく使います。',
    image: '/images/lp/solar-battery/solar-panel.webp',
    label: '(太陽光発電)',
    number: '01',
    title: 'つくる',
  },
  {
    alt: '家庭用蓄電池',
    description:
      '昼間につくった余剰電力を蓄電池にためて、必要な時間に備えます。',
    image: '/images/lp/solar-battery/battery.webp',
    label: '(蓄電池)',
    number: '02',
    title: 'ためる',
  },
  {
    alt: '蓄電池にためた電気を夜に使う家族',
    description:
      '昼間にためた電気を夜の暮らしに使い、電力会社から買う電気を減らします。',
    image: '/images/lp/solar-battery/smart-energy-living.webp',
    label: '(自家消費)',
    number: '03',
    title: 'かしこく使う',
  },
] as const
