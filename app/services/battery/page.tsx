import { Hero } from '@/components/Hero'
import { _Battery } from './_Battery'

export default function BatteryPage() {
  return (
    <>
      <Hero imageSrc="/battery.jpg" subtitle="Battery" title="蓄電池" />
      <div className="wrapper">
        <_Battery />
      </div>
    </>
  )
}
