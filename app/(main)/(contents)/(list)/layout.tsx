import type { ReactNode } from 'react'

import { Hero } from '@/components/Hero'

import { _ContentBreadcrumb } from './_ContentBreadcrumb'
import { _ContentTabs } from './_ContentTabs'

const Layout = (props: { children: ReactNode }) => {
  return (
    <>
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
      <_ContentBreadcrumb />
      <_ContentTabs />
      {props.children}
    </>
  )
}

export default Layout
