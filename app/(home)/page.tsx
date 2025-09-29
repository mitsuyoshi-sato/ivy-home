import { _Hero } from './_Hero'
import { _CampaignSection } from './_CampanySection'
import { _ServicesSection } from './_ServicesSection'
import { _ArticlesSection } from './_ArticlesSection'
import { _RecruitsSection } from './_RecruitsSection'

const Home = () => {
  return (
    <>
      <_Hero />
      <div className="w-full bg-cleam">
        <_CampaignSection />
      </div>
      <_ServicesSection />
      <div className="w-full bg-cleam">
        <_ArticlesSection />
      </div>
      <_RecruitsSection />
    </>
  )
}

export default Home
