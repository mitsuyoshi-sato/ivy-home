import { _Hero } from './_Hero'
import { Button } from '../components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <_Hero />
      <div className="wrapper lg:flex lg:items-center">
        <div className="lg:w-[380px] lg:shrink-0">
          <p className="text-sm text-gray-500 lg:text-lg">strength</p>
          <h2 className="lg:text-4xl text-2xl font-bold lg:mt-6 mt-4">
            アイビーホームとは
          </h2>
          <p className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4">
            当社は創業以来、住宅用のソーラー・蓄電池・エコキュートの提供を通じて、家計にも環境にも優しい暮らしをサポートしてまいりました。確かな技術と経験に基づき、お客様一人ひとりの生活に寄り添った提案を心がけています。
          </p>
          <Link href="/about">
            <Button
              className="lg:mt-6 mt-4"
              icon={ArrowRightIcon}
              iconPosition="right"
            >
              詳しく見る
            </Button>
          </Link>
        </div>
        <div className="relative z-0 mt-9 -mr-6 overflow-hidden rounded-l-2xl bg-black/10 lg:mt-0 lg:ml-24 lg:w-[1000px] lg:shrink-0 lg:rounded-3xl h-[500px]">
          <img src="/sales.jpg" alt="" className="object-cover w-full h-full" />
        </div>
      </div>
    </>
  )
}

export default Home
