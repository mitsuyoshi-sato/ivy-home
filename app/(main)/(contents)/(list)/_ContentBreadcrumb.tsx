'use client'

import { usePathname } from 'next/navigation'

import { configContent } from '@/app/data/contentData'
import { Breadcrumb } from '@/components/Breadcrumb'

export const _ContentBreadcrumb = () => {
  const pathname = usePathname()
  const kind = __kinds.find((k) => pathname.startsWith(configContent[k].path))
  const config = configContent[kind ?? 'news']

  return (
    <>
      <script
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
                name: config.label,
                item: `https://www.ivyho.me${config.path}`,
              },
            ],
          }).replace(/</g, '\\u003c'),
        }}
        id={`breadcrumb-${kind ?? 'news'}`}
        type="application/ld+json"
      />
      <Breadcrumb
        items={[
          { title: 'ホーム', href: '/', icon: 'home' },
          {
            title: config.label,
            href: config.path,
            icon: config.icon,
            current: true,
          },
        ]}
      />
    </>
  )
}

const __kinds = ['news', 'column', 'work'] as const
