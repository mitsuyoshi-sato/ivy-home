import type { Metadata } from 'next'

import { _Benefits } from './_Benefits'
import { _Cta } from './_Cta/_Cta'
import { _EnergySteps } from './_EnergySteps'
import { _Faq } from './_Faq/_Faq'
import { _Hero } from './_Hero/_Hero'
import { _InstallationFlow } from './_InstallationFlow/_InstallationFlow'
import { _Reasons } from './_Reasons'
import { _Works } from './_Works'

const title =
  '太陽光・蓄電池なら愛媛県松山市のアイビーホーム｜無料シミュレーション受付中'
const description =
  '愛媛県松山市で太陽光発電・蓄電池をご検討ならアイビーホームへ。現在の電気代や住まいの状況をもとに、導入後の電気代削減効果を無料でシミュレーションします。無料相談受付中です。'

export const metadata: Metadata = {
  alternates: { canonical: '/solar-battery' },
  description,
  openGraph: {
    description,
    images: [
      {
        alt: '株式会社アイビーホームの太陽光・蓄電池サービス',
        height: 630,
        url: '/images/website/ivy-home.png',
        width: 1200,
      },
    ],
    title,
    type: 'website',
    url: '/solar-battery',
  },
  title: { absolute: title },
}

const Page = () => {
  return (
    <>
      <_Hero />
      <_Benefits />
      <_EnergySteps />
      <_Works />
      <_Reasons />
      <_InstallationFlow />
      <_Faq />
      <_Cta />
    </>
  )
}

export default Page
