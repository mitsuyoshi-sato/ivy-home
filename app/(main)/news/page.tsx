import type { Metadata } from 'next'

import { configContent } from '@/app/data/contentData'

import { ContentArchive } from '../_Contents/ContentArchive'

export const metadata: Metadata = {
  alternates: { canonical: configContent.news.path },
  description: configContent.news.description,
  openGraph: {
    description: configContent.news.description,
    images: [{ url: '/images/ivy-home.png' }],
    title: 'ニュース / 株式会社アイビーホーム',
    url: configContent.news.path,
  },
  title: 'ニュース',
}

const Page = () => <ContentArchive kind="news" />

export default Page
