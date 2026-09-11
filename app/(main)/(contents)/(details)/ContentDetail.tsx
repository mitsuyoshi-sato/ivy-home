import { format } from 'date-fns'
import type { Metadata } from 'next'

import type { ContentDetailData } from '@/app/data/content'
import { configContent, getContentHref } from '@/app/data/content'
import { serializeJsonLd } from '@/app/data/jsonLd'
import { idOrganization, nameOrganization } from '@/app/data/organization'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterLinks } from '@/components/FooterLinks'

import { _ContentArticle } from './_ContentArticle'

export type ContentPageProps = {
  params: Promise<{ slug: string }>
}

export const getContentMetadata = (
  data: ContentDetailData | null,
): Metadata => {
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
        images: [{ url: data.imageOpenGraph }],
        title: data.title,
        type: 'article',
        url: getContentHref(data),
      },
      title: data.title,
    }
  }

  return metadata
}

export const ContentDetail = (props: { data: ContentDetailData }) => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
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
                name: configContent[props.data.kind].label,
                item: `https://www.ivyho.me${configContent[props.data.kind].path}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: props.data.title,
                item: `https://www.ivyho.me${getContentHref(props.data)}`,
              },
            ],
          }),
        }}
        id={`breadcrumb-${props.data.kind}-${props.data.slug}`}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': configContent[props.data.kind].schemaType,
            author:
              props.data.author === nameOrganization
                ? {
                    '@id': idOrganization,
                    '@type': 'Organization',
                  }
                : {
                    '@type': 'Person',
                    name: props.data.author,
                  },
            dateModified: props.data.revisedAt,
            datePublished: props.data.publishedAt,
            description: props.data.subtitle,
            headline: props.data.title,
            image: __getAbsoluteUrl(props.data.imageOpenGraph),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.ivyho.me${getContentHref(props.data)}`,
            },
            publisher: {
              '@id': idOrganization,
            },
          }),
        }}
        id={`${props.data.kind}-${props.data.slug}`}
        type="application/ld+json"
      />
      <div className="bg-cleam pt-24">
        <Breadcrumb
          className="lg:!px-6"
          items={[
            { title: 'ホーム', href: '/', icon: 'home' },
            {
              title: `${configContent[props.data.kind].label}一覧`,
              href: configContent[props.data.kind].path,
              icon: configContent[props.data.kind].icon,
            },
            {
              title: props.data.title,
              href: getContentHref(props.data),
              icon: 'newspaper',
              current: true,
            },
          ]}
        />
      </div>
      <_ContentArticle
        data={{
          ...props.data,
          formattedDate: format(props.data.publishedAt, 'yyyy.MM.dd'),
        }}
      />
      <FooterLinks
        items={[
          {
            title: `${configContent[props.data.kind].label}一覧に戻る`,
            href: configContent[props.data.kind].path,
            icon: configContent[props.data.kind].icon,
          },
        ]}
      />
    </>
  )
}

const __getAbsoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `https://www.ivyho.me${path}`
