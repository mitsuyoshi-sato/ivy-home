import { notFound } from 'next/navigation'

import { _WorkModal } from '../../../_WorkModal'
import { data } from '../../../works'

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params
  const item = data.find((w) => w.slug === slug)

  if (!item) {
    notFound()
  }

  return <_WorkModal item={item} />
}

export default Page
