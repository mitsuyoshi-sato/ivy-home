import { _Hero } from './_Hero'
import { TwoColumnSection } from '../../components/TwoColumnSection'

const Home = () => {
  return (
    <>
      <_Hero />
      <TwoColumnSection
        title="アイビーホームとは"
        subtitle="strength"
        description="当社は創業以来、住宅用のソーラー・蓄電池・エコキュートの提供を通じて、家計にも環境にも優しい暮らしをサポートしてまいりました。確かな技術と経験に基づき、お客様一人ひとりの生活に寄り添った提案を心がけています。"
        image={{ src: '/sales.jpg', alt: '' }}
        button={{ href: '/company', text: '詳しく見る' }}
      />
      <TwoColumnSection
        title="会社概要"
        subtitle="company"
        description="当社は創業以来、住宅用のソーラー・蓄電池・エコキュートの提供を通じて、家計にも環境にも優しい暮らしをサポートしてまいりました。確かな技術と経験に基づき、お客様一人ひとりの生活に寄り添った提案を心がけています。"
        image={{ src: '/sales.jpg', alt: '' }}
        button={{ href: '/company', text: '詳しく見る' }}
        reverse
      />
    </>
  )
}

export default Home
