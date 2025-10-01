import { Hero } from '@/components/Hero'
import { _SolarPanel } from './_SolarPanel'

export default function SolarPanelPage() {
  return (
    <>
      <Hero
        imageSrc="/solar-panel.jpg"
        subtitle="Solar Panel"
        title="太陽光パネル"
      />
      <div className="wrapper">
        <_SolarPanel />
      </div>
    </>
  )
}
