import { ArrowRight, Phone } from 'lucide-react'

import { _CtaAnimation } from './_Client/_CtaAnimation'

export const _Cta = () => {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1600px] scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10"
    >
      <_CtaAnimation
        button={
          <a
            className="group mt-7 inline-flex min-h-16 w-full max-w-xl items-center justify-center rounded-md border border-ivy8 bg-ivy8 px-5 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 sm:text-base"
            href="tel:0899076504"
          >
            無料相談・シミュレーションをはじめる
            <ArrowRight
              aria-hidden="true"
              className="ml-4 size-5 transition-transform group-hover:translate-x-1"
            />
          </a>
        }
        contact={
          <div className="mt-7">
            <a
              className="inline-flex items-center text-dark8 transition-colors hover:text-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6"
              href="tel:0899076504"
            >
              <Phone aria-hidden="true" className="mr-3 size-5" />
              <span className="mr-3 text-xs font-semibold sm:text-sm">
                お電話でのお問い合わせ
              </span>
              <span className="text-2xl font-semibold tracking-wider sm:text-3xl">
                089-907-6504
              </span>
            </a>
            <p className="mt-3 pl-8 text-xs text-dark5 sm:text-sm">
              受付時間 平日 10:00〜18:00
            </p>
          </div>
        }
        heading={
          <p className="text-xl font-semibold leading-relaxed text-dark8 sm:text-2xl">
            ご相談・お見積もりは無料です。
            <br />
            お気軽にお問い合わせください。
          </p>
        }
        image={
          <figure className="relative min-h-64 overflow-hidden lg:min-h-[390px]">
            <img
              alt="自然光が差し込む明るいダイニング"
              className="absolute inset-0 size-full object-cover object-center"
              decoding="async"
              height="1086"
              loading="lazy"
              src="/images/lp/solar-battery/living.webp"
              width="1448"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-white to-transparent lg:block"
            />
          </figure>
        }
      />
    </section>
  )
}
