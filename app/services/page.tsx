import { Hero } from '@/components/Hero'
import { _SolarPanel } from './_SolarPanel'
export default function ServicesPage() {
  return (
    <>
      <Hero imageSrc="/hero2.jpg" subtitle="Services" title="事業内容" />
      <div id="solar-panel" className="wrapper">
        <_SolarPanel />
      </div>
    </>
  )
}
