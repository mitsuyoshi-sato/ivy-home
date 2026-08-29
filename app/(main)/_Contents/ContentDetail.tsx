import { format } from 'date-fns'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'

import type { ContentKind } from '@/app/data/contentData'
import {
  configContent,
  getContentHref,
  getContents,
} from '@/app/data/contentData'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

import { _ContentArticle } from './_ContentArticle'

export type ContentPageProps = {
  params: Promise<{ slug: string }>
}

export const getContentMetadata = async (
  kind: ContentKind,
  params: ContentPageProps['params'],
): Promise<Metadata> => {
  const { slug } = await params
  const data = getContents(kind).find((c) => c.slug === slug)
  let metadata: Metadata = {
    title: '記事が見つかりません',
    description: '指定された記事は見つかりませんでした。',
  }

  if (data) {
    metadata = {
      alternates: { canonical: getContentHref(data) },
      description: data.subtitle,
      openGraph: {
        description: data.subtitle,
        images: [{ url: data.image }],
        title: data.title,
        type: 'article',
        url: getContentHref(data),
      },
      title: data.title,
    }
  }

  return metadata
}

export const getContentStaticParams = (kind: ContentKind) =>
  getContents(kind).map((c) => ({ slug: c.slug }))

export const ContentDetail = async (props: {
  kind: ContentKind
  params: ContentPageProps['params']
}) => {
  const { slug } = await props.params
  const data = getContents(props.kind).find((c) => c.slug === slug)

  if (!data) {
    notFound()
  }

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://www.ivyho.me/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: configContent[props.kind].label,
                item: `https://www.ivyho.me${configContent[props.kind].path}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: data.title,
                item: `https://www.ivyho.me${getContentHref(data)}`,
              },
            ],
          }),
        }}
        id={`breadcrumb-${props.kind}-${slug}`}
        type="application/ld+json"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': configContent[props.kind].schemaType,
            author: {
              '@type': 'Person',
              image: `https://www.ivyho.me${data.createdByImage}`,
              name: data.createdByJp,
            },
            dateModified: data.publishedAt,
            datePublished: data.publishedAt,
            description: data.subtitle,
            headline: data.title,
            image: `https://www.ivyho.me${data.image}`,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.ivyho.me${getContentHref(data)}`,
            },
            publisher: {
              '@type': 'Organization',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.ivyho.me/images/ivy-home.svg',
              },
              name: '株式会社アイビーホーム',
            },
          }),
        }}
        id={`${props.kind}-${slug}`}
        type="application/ld+json"
      />
      <div className="bg-cleam pt-24">
        <Breadcrumb
          className="lg:!px-6"
          items={[
            { title: 'ホーム', href: '/', icon: 'home' },
            {
              title: `${configContent[props.kind].label}一覧`,
              href: configContent[props.kind].path,
              icon: configContent[props.kind].icon,
            },
            {
              title: data.title,
              href: getContentHref(data),
              icon: 'newspaper',
              current: true,
            },
          ]}
        />
      </div>
      <_ContentArticle
        data={{
          ...data,
          formattedDate: format(data.publishedAt, 'yyyy.MM.dd'),
        }}
      />
      <FooterLinks
        items={[
          {
            title: `${configContent[props.kind].label}一覧に戻る`,
            href: configContent[props.kind].path,
            icon: configContent[props.kind].icon,
          },
        ]}
      />
    </>
  )
}
