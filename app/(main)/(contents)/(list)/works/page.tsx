import type { Metadata } from 'next'

import { getContentSummaries } from '@/app/data/contentApi'
import { configContent } from '@/app/data/contentData'
import { SectionHeader } from '@/components/SectionHeader'

import { _ContentList } from '../_ContentList'

export const metadata: Metadata = {
  alternates: { canonical: configContent.work.path },
  description: configContent.work.description,
  openGraph: {
    description: configContent.work.description,
    images: [{ url: '/images/ivy-home.png' }],
    title: '施工事例 / 株式会社アイビーホーム',
    url: configContent.work.path,
  },
  title: '施工事例',
}

const Page = async () => {
  const data = await getContentSummaries('work')

  return (
    <section className="wrapper flex flex-col gap-20">
      <SectionHeader
        description="株式会社アイビーホームが手がけた太陽光発電・蓄電池・リフォームなどの施工事例をご紹介します。"
        subtitle="Works"
        title="施工事例"
      />
      <_ContentList
        contents={data}
        emptyMessage={`${configContent.work.label}は現在準備中です。公開までしばらくお待ちください。`}
      />
    </section>
  )
}

export default Page
