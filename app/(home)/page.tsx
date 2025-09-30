import { Hero } from '../../components/Hero'
import { _CampaignSection } from './_CampanySection'
import { _ServicesSection } from './_ServicesSection'
import { _NewsSection } from './_NewsSection'
import { _RecruitsSection } from './_RecruitsSection'

const Home = () => {
  return (
    <>
      <Hero
        imageSrc="/hero2.jpg"
        title={
          <>
            今、つくるエネルギーが
            <br />
            明日の暮らしを豊かにする。
          </>
        }
        description="ソーラーパネル・蓄電池・エコキュートの導入をトータルサポートします。"
      />
      <div id="company" className="w-full bg-cleam">
        <_CampaignSection />
      </div>
      <_ServicesSection />
      <div id="news" className="w-full bg-cleam">
        <_NewsSection />
      </div>
      <_RecruitsSection />
    </>
  )
}

export default Home
