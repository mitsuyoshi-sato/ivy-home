import { Hero } from '@/components/Hero'
import { _EcoKyuto } from './_EcoKyuto'

export default function EcoKyutoPage() {
  return (
    <>
      <Hero imageSrc="/bathroom.jpg" subtitle="EcoCute" title="エコキュート" />
      <div className="wrapper">
        <_EcoKyuto />
      </div>
    </>
  )
}
