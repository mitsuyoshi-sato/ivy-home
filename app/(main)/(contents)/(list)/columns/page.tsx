import type { Metadata } from 'next'

import { getContentSummaries } from '@/app/data/contentApi'
import { configContent } from '@/app/data/contentData'
import { SectionHeader } from '@/components/SectionHeader'

import { _ContentList } from '../_ContentList'

export const metadata: Metadata = {
  alternates: { canonical: configContent.column.path },
  description: configContent.column.description,
  openGraph: {
    description: configContent.column.description,
    images: [{ url: '/images/ivy-home.png' }],
    title: 'お役立ち情報 / 株式会社アイビーホーム',
    url: configContent.column.path,
  },
  title: 'お役立ち情報',
}

const Page = async () => {
  const data = await getContentSummaries('column')

  return (
    <section className="wrapper flex flex-col gap-20">
      <SectionHeader
        description="太陽光発電・蓄電池・リフォームなど、住まいと暮らしに役立つ情報を専門家の視点でお届けします。"
        subtitle="Columns"
        title="お役立ち情報"
      />
      <_ContentList
        contents={data}
        emptyMessage={`${configContent.column.label}は現在準備中です。公開までしばらくお待ちください。`}
      />
    </section>
  )
}

export default Page
