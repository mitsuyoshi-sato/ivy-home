import { SectionHeader } from '@/components/SectionHeader'

export const _MessageSection = () => {
  return (
    <section className="overflow-hidden bg-white" id="message">
      <div className="wrapper">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-24">
          <div className="relative mx-auto w-full max-w-[380px]">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 size-full rounded-2xl bg-ivy7/10 lg:-bottom-6 lg:-left-6 lg:rounded-3xl"
            />
            <img
              alt="代表取締役 小西 裕也"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-[0_18px_50px_rgba(21,74,48,0.12)] lg:rounded-3xl"
              src="/images/website/yuya-konishi.jpg"
            />
          </div>

          <div>
            <SectionHeader
              description=""
              subtitle="Message"
              title="社長メッセージ"
            />

            <p className="mt-6 text-xl font-bold leading-relaxed tracking-[0.04em] text-ivy7 sm:text-2xl lg:mt-8 lg:text-[26px]">
              地域の皆さまに、
              <br className="hidden sm:block" />
              いちばん身近な住まいの相談相手へ。
            </p>

            <div className="mt-7 space-y-5 text-sm leading-loose text-dark6 sm:text-base lg:mt-8">
              <p>
                私たちアイビーホームは、愛媛・高知の地域に根ざし、太陽光発電・蓄電池・エコキュートをはじめ、住まいに関わるご提案と施工を行っています。
              </p>
              <p>
                住まいは、ご家族の毎日を支え、未来へ受け継がれていく大切な場所です。だからこそ、目先の便利さだけではなく、安心して長く暮らせる選択肢を、分かりやすく誠実にお届けしたいと考えています。
              </p>
              <p>
                これからも、地域の皆さまのすぐそばで、住まいのちょっとした困りごとにも気軽に声をかけていただける存在でありたいと考えています。お客様一人ひとりに寄り添い、顔の見える関係を大切にしながら、末永く歩んでまいります。
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-7 border-t border-ivy7/15 pt-7 sm:flex-row sm:items-end sm:gap-16 lg:gap-24">
              <div className="border-l-4 border-ivy6 pl-4">
                <p className="text-sm font-medium text-dark6">
                  株式会社アイビーホーム
                </p>
                <p className="mt-2 text-base font-bold tracking-[0.08em] text-dark8 sm:text-lg">
                  代表取締役 小西 裕也
                </p>
              </div>
              <div className="w-fit pb-2">
                <img
                  alt=""
                  className="h-auto w-40 sm:w-52"
                  height={202}
                  src="/images/website/ceo-name.png"
                  width={753}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
