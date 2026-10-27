import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { _WorkDetail } from '../../_WorkDetail'
import { data } from '../../works'

export const dynamicParams = false

export const generateStaticParams = () => data.map((w) => ({ slug: w.slug }))

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await props.params
  const item = data.find((w) => w.slug === slug)

  return {
    title: item?.title ?? '施工事例',
    robots: { index: false, follow: false },
  }
}

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params
  const item = data.find((w) => w.slug === slug)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-[70vh] bg-[#eef2e9] px-4 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ivy8 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy8"
          href="/solar-battery#works"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          施工事例一覧に戻る
        </Link>
        <div className="overflow-hidden rounded-2xl shadow-[0_20px_70px_rgba(17,46,28,0.1)]">
          <_WorkDetail item={item} heading="h1" />
        </div>
      </div>
    </div>
  )
}

export default Page
