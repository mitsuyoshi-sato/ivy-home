import type { Metadata } from 'next'

import { configContent } from '@/app/data/contentData'

import { ContentArchive } from '../_Contents/ContentArchive'

export const metadata: Metadata = {
  alternates: { canonical: configContent.column.path },
  description: configContent.column.description,
  openGraph: {
    description: configContent.column.description,
    images: [{ url: '/images/ivy-home.png' }],
    title: 'コラム一覧 / 株式会社アイビーホーム',
    url: configContent.column.path,
  },
  title: 'コラム一覧',
}

const Page = () => <ContentArchive kind="column" />

export default Page
