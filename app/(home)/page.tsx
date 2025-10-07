import { Hero } from '../../components/Hero'
import { _CampaignSection } from './_CampanySection'
import { _ServicesSection } from './_ServicesSection'
import { _NewsSection } from './_NewsSection'
import { _RecruitsSection } from './_RecruitsSection'

const Home = () => {
  return (
    <>
      <Hero
        title="未来の暮らしを、つくる。"
        description="暮らしを支えるエネルギーづくりを、今から始めよう。"
        video={{
          src: 'home-hero.mp4',
          alt: '屋根にソーラーパネルを設置している住宅',
        }}
        overlayHidden
      />
      <section id="company" className="w-full bg-cleam">
        <_CampaignSection />
      </section>
      <_ServicesSection />
      <section id="news" className="w-full bg-cleam">
        <_NewsSection />
      </section>
      <_RecruitsSection />
    </>
  )
}

export default Home
