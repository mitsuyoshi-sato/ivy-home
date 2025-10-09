import { Hero } from '../../components/Hero'
import { _CampaignSection } from './_CampanySection'
import { _NewsSection } from './_NewsSection'
import { _RecruitsSection } from './_RecruitsSection'
import { _ServicesSection } from './_ServicesSection'

const Home = () => {
  return (
    <>
      <Hero
        overlayHidden
        description="暮らしを支えるエネルギーづくりを、今から始めよう。"
        title="未来の暮らしを、つくる。"
        video={{
          src: '/videos/home-hero.mp4',
          alt: '屋根にソーラーパネルを設置している住宅',
        }}
      />
      <section className="w-full bg-cleam" id="company">
        <_CampaignSection />
      </section>
      <_ServicesSection />
      <section className="w-full bg-cleam" id="news">
        <_NewsSection />
      </section>
      <_RecruitsSection />
    </>
  )
}

export default Home
