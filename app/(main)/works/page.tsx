import type { Metadata } from 'next'

import { configContent, getContents } from '@/app/data/contentData'

import { ContentArchive } from '../_Contents/ContentArchive'

export const metadata: Metadata = {
  alternates: { canonical: configContent.work.path },
  description: configContent.work.description,
  openGraph: {
    description: configContent.work.description,
    images: [{ url: '/images/ivy-home.png' }],
    title: '施工事例一覧 / 株式会社アイビーホーム',
    url: configContent.work.path,
  },
  ...(getContents('work').length === 0 && {
    robots: { follow: true, index: false },
  }),
  title: '施工事例一覧',
}

const Page = () => <ContentArchive kind="work" />

export default Page
