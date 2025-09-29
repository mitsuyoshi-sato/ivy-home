import { Section } from '@/components/Section'

export const _RecruitsSection = () => {
  return (
    <div className="wrapper">
      <Section
        className=""
        title="一緒に働きませんか？"
        subtitle="Recuruit"
        description="•	フレックスタイム制で自由な働き方\n•	成長できる環境とサポート体制\n•	チームワークを大切にするカルチャー"
        button={{ href: '/recruit', text: '採用情報をみる' }}
      />
    </div>
  )
}
