import type { Metadata } from 'next'
import { IvyHomeLogo } from '@/components/ui/IvyHomeLogo'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社アイビーホームのプライバシーポリシーページです。',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-center text-xl font-bold text-gray-900">
          プライバシーポリシー
        </h1>

        <div className="prose prose-lg mt-2 max-w-none">
          <p className="text-center text-base text-gray-600">
            「当社」は、お客様の個人情報の保護に関して、以下のとおりプライバシーポリシーを定めます。
          </p>

          <section className="mt-16">
            <h2 className="text-base font-semibold text-gray-900">
              1. 個人情報の収集について
            </h2>
            <p className="mt-2 text-base text-gray-600">
              当社では、お客様からお問い合わせいただく際に、お名前、ご住所、電話番号、メールアドレス等の個人情報をお聞きすることがございます。
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-base font-semibold text-gray-900">
              2. 個人情報の利用目的
            </h2>
            <p className="mt-2 text-base text-gray-600">
              収集した個人情報は、以下の目的で利用いたします。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
              <li>お客様からのお問い合わせへの回答</li>
              <li>サービスの提供・改善</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-base font-semibold text-gray-900">
              3. 個人情報の第三者提供
            </h2>
            <p className="mt-2 text-base text-gray-600">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-base font-semibold text-gray-900">
              4. 個人情報の管理
            </h2>
            <p className="mt-2 text-base text-gray-600">
              当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-base font-semibold text-gray-900">
              5. お問い合わせ
            </h2>
            <p className="mt-2 text-base text-gray-600">
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
            </p>
          </section>
        </div>
        <div className="mt-16 flex w-full justify-end">
          <div className="">
            <IvyHomeLogo className="translate-y-1" />
            <div className="text-gray-900">株式会社アイビーホーム</div>
          </div>
        </div>
      </div>
    </div>
  )
}
