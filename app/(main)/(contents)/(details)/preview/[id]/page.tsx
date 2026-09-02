import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

import { nameCookieContentPreview } from '@/app/data/content'
import { getContentPreview } from '@/app/data/contentApi'

import { ContentDetail, getContentMetadata } from '../../ContentDetail'

type ContentPreviewPageProps = {
  params: Promise<{ id: string }>
}

export const generateMetadata = async (
  props: ContentPreviewPageProps,
): Promise<Metadata> => {
  const { id } = await props.params
  const data = await __getContentPreviewData(id)
  let metadata: Metadata = {
    description: 'microCMSの記事プレビューです。',
    robots: { follow: false, index: false },
    title: '記事プレビュー',
  }

  if (data) {
    metadata = {
      ...getContentMetadata(data),
      robots: { follow: false, index: false },
    }
  }

  return metadata
}

const Page = async (props: ContentPreviewPageProps) => {
  const { id } = await props.params
  const data = await __getContentPreviewData(id)

  if (!data) {
    notFound()
  }

  return <ContentDetail data={data} />
}

export default Page

const __getContentPreviewData = async (id: string) => {
  const draftKey = (await cookies()).get(nameCookieContentPreview)?.value
  let data = null

  if (draftKey) {
    data = await getContentPreview(id, draftKey)
  }

  return data
}
