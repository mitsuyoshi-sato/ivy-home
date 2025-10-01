import { Hero } from '@/components/Hero'

export default function ServicesPage() {
  return (
    <>
      <Hero imageSrc="/hero2.jpg" subtitle="Services" title="事業内容" />
      <div className="wrapper">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">私たちのサービス</h2>
          <p className="text-lg text-gray-600 mb-12">
            お客様の暮らしをより快適で安心なものにするため、様々なサービスを提供しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">太陽光パネル</h3>
            <p className="text-gray-600 mb-4">
              クリーンなエネルギーで電気代を削減し、環境に優しい暮らしを実現します。
            </p>
            <a
              href="/services/solar-panel"
              className="text-blue-600 hover:text-blue-800"
            >
              詳しく見る →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">蓄電池</h3>
            <p className="text-gray-600 mb-4">
              発電した電力を蓄えて、必要な時に使用。災害時にも安心です。
            </p>
            <a
              href="/services/battery"
              className="text-blue-600 hover:text-blue-800"
            >
              詳しく見る →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">エコキュート</h3>
            <p className="text-gray-600 mb-4">
              深夜電力を活用した環境に優しい給湯システムです。
            </p>
            <a
              href="/services/eco-kyuto"
              className="text-blue-600 hover:text-blue-800"
            >
              詳しく見る →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">シロアリ防除</h3>
            <p className="text-gray-600 mb-4">
              お住まいをシロアリから守る専門的な防除サービスです。
            </p>
            <a
              href="/services/termite-control"
              className="text-blue-600 hover:text-blue-800"
            >
              詳しく見る →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">リフォーム</h3>
            <p className="text-gray-600 mb-4">
              お客様のご要望に合わせた住まいのリフォームサービスです。
            </p>
            <a
              href="/services/reform"
              className="text-blue-600 hover:text-blue-800"
            >
              詳しく見る →
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
