import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社アイビーホームのプライバシーポリシーページです。',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          プライバシーポリシー
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-6 text-gray-600">
            株式会社アイビーホーム（以下「当社」）は、お客様の個人情報の保護に関して、以下のとおりプライバシーポリシーを定めます。
          </p>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              1. 個人情報の収集について
            </h2>
            <p className="text-gray-600">
              当社では、お客様からお問い合わせいただく際に、お名前、ご住所、電話番号、メールアドレス等の個人情報をお聞きすることがございます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              2. 個人情報の利用目的
            </h2>
            <p className="text-gray-600">
              収集した個人情報は、以下の目的で利用いたします：
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>お客様からのお問い合わせへの回答</li>
              <li>サービスの提供・改善</li>
              <li>重要なお知らせの配信</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              3. 個人情報の第三者提供
            </h2>
            <p className="text-gray-600">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              4. 個人情報の管理
            </h2>
            <p className="text-gray-600">
              当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              5. お問い合わせ
            </h2>
            <p className="text-gray-600">
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">株式会社アイビーホーム</p>
              <p className="text-gray-600">個人情報保護担当者</p>
              <p className="text-gray-600">
                メール: privacy@ivyho.me
              </p>
            </div>
          </section>

          <div className="mt-12 text-right text-gray-500">
            <p>制定日：2024年1月1日</p>
          </div>
        </div>
      </div>
    </div>
  )
}
