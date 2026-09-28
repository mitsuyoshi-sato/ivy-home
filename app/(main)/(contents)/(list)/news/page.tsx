import type { Metadata } from 'next'

import { getContentSummaries } from '@/app/data/contentApi'
import { configContent } from '@/app/data/content'
import { SectionHeader } from '@/components/SectionHeader'

import { _ContentList } from '../_ContentList'

export const metadata: Metadata = {
  alternates: { canonical: configContent.news.path },
  description: configContent.news.description,
  openGraph: {
    description: configContent.news.description,
    images: [{ url: '/images/website/ivy-home.png' }],
    title: `${configContent.news.label} / 株式会社アイビーホーム`,
    url: configContent.news.path,
  },
  title: configContent.news.label,
}

const Page = async () => {
  const data = await getContentSummaries('news')

  return (
    <section className="wrapper flex flex-col gap-20">
      <SectionHeader
        description={configContent.news.description}
        subtitle={configContent.news.subtitle}
        title={configContent.news.label}
      />
      <_ContentList
        contents={data}
        emptyMessage={`${configContent.news.label}は現在準備中です。公開までしばらくお待ちください。`}
      />
    </section>
  )
}

export default Page
