import { _Benefits } from './_Benefits'
import { _Cta } from './_Cta'
import { _EnergySteps } from './_EnergySteps'
import { _Faq } from './_Faq'
import { _Hero } from './_Hero/_Hero'
import { _InstallationFlow } from './_InstallationFlow'
import { _Reasons } from './_Reasons'
import { _Works } from './_Works'

const Page = () => {
  return (
    <>
      <_Hero />
      <_Benefits />
      <_EnergySteps />
      <_Works />
      <_Reasons />
      <_InstallationFlow />
      <_Faq />
      <_Cta />
    </>
  )
}

export default Page
