import { Hero } from '@/components/Hero'
import { _Reform } from './_Reform'

export default function ReformPage() {
  return (
    <>
      <Hero imageSrc="/cooking2.jpg" subtitle="Reform" title="リフォーム" />
      <div className="wrapper">
        <_Reform />
      </div>
    </>
  )
}
