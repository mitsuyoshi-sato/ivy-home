import { Phone } from 'lucide-react'

import { _ContactForm } from './_Client/_ContactForm'
import { _RevealItems } from './_Client/_RevealItems'

export const _Cta = () => {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1600px] scroll-mt-24 bg-cover bg-center pb-16 shadow-[0_28px_72px_rgba(21,50,35,0.18)] sm:pb-20"
      style={{
        backgroundImage: "url('/images/lp/solar-battery/living.webp')",
      }}
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold leading-relaxed text-dark8 sm:text-2xl">
            ご相談・お見積もりは無料です。
            <br />
            お気軽にお問い合わせください。
          </h2>
        </div>

        <_RevealItems className="mt-8 w-full">
          <div className="rounded-2xl border border-white/80 bg-white/95 px-5 py-7 shadow-[0_22px_64px_rgba(21,50,35,0.2)] backdrop-blur-sm sm:px-8 sm:py-9 lg:px-10">
            <_ContactForm />
            <div className="mt-8 border-t border-[#e5e7e1] pt-7">
              <p className="mb-4 text-xs font-semibold tracking-[0.08em] text-dark4">
                お電話でのご相談はこちら
              </p>
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
          </div>
        </_RevealItems>
      </div>
    </section>
  )
}
