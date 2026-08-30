import { notFound } from 'next/navigation'

import { getContentDetail, getContentSummaries } from '@/app/data/contentApi'

import type { ContentPageProps } from '../../ContentDetail'
import { ContentDetail, getContentMetadata } from '../../ContentDetail'

export const generateMetadata = async (props: ContentPageProps) => {
  const { slug } = await props.params
  const data = await getContentDetail('column', slug)

  return getContentMetadata(data)
}

export const generateStaticParams = async () => {
  const data = await getContentSummaries('column')

  return data.map((c) => ({ slug: c.slug }))
}

const Page = async (props: ContentPageProps) => {
  const { slug } = await props.params
  const data = await getContentDetail('column', slug)

  if (!data) {
    notFound()
  }

  return <ContentDetail data={data} />
}

export default Page
