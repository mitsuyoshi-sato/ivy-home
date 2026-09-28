import type { Metadata } from 'next'

import { getContentSummaries } from '@/app/data/contentApi'
import { configContent } from '@/app/data/content'
import { SectionHeader } from '@/components/SectionHeader'

import { _ContentList } from '../_ContentList'

export const metadata: Metadata = {
  alternates: { canonical: configContent.column.path },
  description: configContent.column.description,
  openGraph: {
    description: configContent.column.description,
    images: [{ url: '/images/website/ivy-home.png' }],
    title: `${configContent.column.label} / 株式会社アイビーホーム`,
    url: configContent.column.path,
  },
  title: configContent.column.label,
}

const Page = async () => {
  const data = await getContentSummaries('column')

  return (
    <section className="wrapper flex flex-col gap-20">
      <SectionHeader
        description={configContent.column.description}
        subtitle={configContent.column.subtitle}
        title={configContent.column.label}
      />
      <_ContentList
        contents={data}
        emptyMessage={`${configContent.column.label}は現在準備中です。公開までしばらくお待ちください。`}
      />
    </section>
  )
}

export default Page
