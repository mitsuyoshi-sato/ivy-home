import { notFound } from 'next/navigation'

import { _WorkDetail } from '../../../_WorkDetail'
import { data, isWorksPublished } from '../../../works'

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params
  const item = data.find((w) => w.slug === slug)

  if (!isWorksPublished || !item) {
    notFound()
  }

  return <_WorkDetail item={item} heading="h2" />
}

export default Page
