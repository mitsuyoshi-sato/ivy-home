import type { Metadata } from 'next'

import { getContentSummaries } from '@/app/data/contentApi'
import { configContent } from '@/app/data/content'
import { SectionHeader } from '@/components/SectionHeader'

import { _ContentList } from '../_ContentList'

export const metadata: Metadata = {
  alternates: { canonical: configContent.work.path },
  description: configContent.work.description,
  openGraph: {
    description: configContent.work.description,
    images: [{ url: '/images/website/ivy-home.png' }],
    title: `${configContent.work.label} / 株式会社アイビーホーム`,
    url: configContent.work.path,
  },
  title: configContent.work.label,
}

const Page = async () => {
  const data = await getContentSummaries('work')

  return (
    <section className="wrapper flex flex-col gap-20">
      <SectionHeader
        description={configContent.work.description}
        subtitle={configContent.work.subtitle}
        title={configContent.work.label}
      />
      <_ContentList
        contents={data}
        emptyMessage={`${configContent.work.label}は現在準備中です。公開までしばらくお待ちください。`}
      />
    </section>
  )
}

export default Page
