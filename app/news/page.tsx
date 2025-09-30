import { Hero } from '@/components/Hero'
import { __ArticlesClient } from './_ArticlesClient'

export default function Articles() {
  return (
    <>
      <Hero imageSrc="/hero2.jpg" subtitle="News" title="お知らせ" />
      <div className="wrapper flex flex-col gap-20">
        <__ArticlesClient />
      </div>
    </>
  )
}

// クライアントに切り出し
