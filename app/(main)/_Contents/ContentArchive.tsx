import { format } from 'date-fns'
import Script from 'next/script'

import type { ContentKind } from '@/app/data/contentData'
import { configContent, getContents } from '@/app/data/contentData'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'

import { _ContentList } from './_ContentList'
import { _ContentTabs } from './_ContentTabs'

export const ContentArchive = (props: { kind: ContentKind }) => {
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
            ],
          }),
        }}
        id={`breadcrumb-${props.kind}`}
        type="application/ld+json"
      />
      <Hero
        image={{
          src: '/news-poster.jpg',
          alt: 'コンテンツのメインビジュアル',
        }}
        overlayOpacity="50"
        subtitle="Contents"
        title="コンテンツ"
        video={{ src: '/videos/newspaper.mp4', alt: '', playbackRate: 0.5 }}
      />
      <Breadcrumb
        items={[
          { title: 'ホーム', href: '/', icon: 'home' },
          {
            title: configContent[props.kind].label,
            href: configContent[props.kind].path,
            icon: configContent[props.kind].icon,
            current: true,
          },
        ]}
      />
      <div className="mt-12">
        <_ContentTabs />
      </div>
      <section className="wrapper flex flex-col gap-20">
        <SectionHeader
          description={configContent[props.kind].description}
          subtitle={configContent[props.kind].subtitle}
          title={configContent[props.kind].label}
        />
        <_ContentList
          contents={getContents(props.kind).map((c) => ({
            formattedDate: format(c.publishedAt, 'yyyy.MM.dd'),
            id: c.id,
            image: c.image,
            kind: c.kind,
            publishedAt: c.publishedAt,
            slug: c.slug,
            subtitle: c.subtitle,
            title: c.title,
          }))}
          emptyMessage={`${configContent[props.kind].label}は現在準備中です。公開までしばらくお待ちください。`}
        />
      </section>
    </>
  )
}
