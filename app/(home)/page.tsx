import { _Hero } from './_Hero'
import { _CampaignSection } from './_CampanySection'

import { Section } from '@/components/Section'
import { _ServicesBento } from './_ServicesBento'

const Home = () => {
  return (
    <>
      <_Hero />
      <_CampaignSection />

      <_ServicesBento />
    </>
  )
}

export default Home
