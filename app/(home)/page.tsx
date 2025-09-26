import { _Hero } from './_Hero'
import { _CampaignSection } from './_CampanySection'

import { Section } from '@/components/Section'
import { _ServicesBento } from './_ServicesBento'

const Home = () => {
  return (
    <>
      <_Hero />
      <_CampaignSection />
      <div className="flex flex-col wrapper py-0">
        <Section
          title="私たちの提供する価値"
          subtitle="Services"
          description="私たちは、快適で安心な暮らしを支える住宅設備の設計・施工を行っています。\nオール電化や蓄電池、エコキュートなど、家庭の暮らしをより便利にするサービスを提供しています。"
          button={{ href: '/services', text: '詳しく見る' }}
        />
        <_ServicesBento />
      </div>
    </>
  )
}

export default Home
