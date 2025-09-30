import { Hero } from '@/components/Hero'
import { _PhilosophySection } from './_PhilosophySection'
import { _InfoSection } from './_InfoSection'

export default function Company() {
  return (
    <>
      <Hero
        imageSrc="/hero2.jpg"
        subtitle="Company"
        title="会社情報"
        description=""
      />
      <div id="philosophy" className="bg-cleam">
        <_PhilosophySection />
      </div>
      <_InfoSection />
    </>
  )
}
