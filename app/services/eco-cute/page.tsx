import { Hero } from '@/components/Hero'
import { _EcoCute } from './_EcoCute'

export default function EcoCutePage() {
  return (
    <>
      <Hero imageSrc="/bathroom.jpg" subtitle="EcoCute" title="エコキュート" />
      <div className="wrapper">
        <_EcoCute />
      </div>
    </>
  )
}
