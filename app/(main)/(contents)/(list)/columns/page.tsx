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
        description={configContent[data.kind].description}
        subtitle={configContent[data.kind].subtitle}
        title={configContent[data.kind].label}
      />
      <_ContentList
        contents={data.contents}
        emptyMessage={`${configContent[data.kind].label}は現在準備中です。公開までしばらくお待ちください。`}
      />
    </section>
  )
}

export default Page
