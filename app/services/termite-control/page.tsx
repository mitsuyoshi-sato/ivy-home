import { Hero } from '@/components/Hero'
import { _TermiteControl } from './_TermiteControl'

export default function TermiteControlPage() {
  return (
    <>
      <Hero
        imageSrc="/family.jpg"
        subtitle="Termite Control"
        title="シロアリ駆除"
      />
      <div className="wrapper">
        <_TermiteControl />
      </div>
    </>
  )
}
