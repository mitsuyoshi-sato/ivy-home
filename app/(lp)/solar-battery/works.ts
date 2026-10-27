export type Work = {
  slug: string
  number: string
  title: string
  image: { src: string; alt: string } | null
  overview: {
    customer: string | null
    age: string
    family: string
    area: string
    solar: string | null
    battery: string | null
  }
  challenge: string
  proposal: string
  outcome: string
}

export const data: readonly Work[] = [
  {
    slug: 'example-1',
    number: '01',
    title: '太陽光パネルで、負担が減りました！',
    image: {
      src: '/images/lp/solar-battery/family-sample.png',
      alt: 'family',
    },
    overview: {
      customer: 'T様',
      age: '30代',
      family: '3人家族',
      area: '松山市北条',
      solar: 'エクソル 太陽光パネル 4kW',
      battery: 'エクソル 蓄電池 7kWh',
    },
    challenge: '導入前に伺ったお悩みやご希望を、取材後に掲載します。',
    proposal: '設備の選定理由や施工で工夫した点を、確認後に掲載します。',
    outcome: '設置後の使い心地や暮らしの変化を、取材後に掲載します。',
  },
  {
    slug: 'example-2',
    number: '02',
    title: '施工事例（仮）2',
    image: null,
    overview: {
      customer: null,
      age: '掲載準備中',
      family: '掲載準備中',
      area: '掲載準備中',
      solar: null,
      battery: null,
    },
    challenge: '導入前に伺ったお悩みやご希望を、取材後に掲載します。',
    proposal: '設備の選定理由や施工で工夫した点を、確認後に掲載します。',
    outcome: '設置後の使い心地や暮らしの変化を、取材後に掲載します。',
  },
  {
    slug: 'example-3',
    number: '03',
    title: '施工事例（仮）3',
    image: null,
    overview: {
      customer: null,
      age: '掲載準備中',
      family: '掲載準備中',
      area: '掲載準備中',
      solar: null,
      battery: null,
    },
    challenge: '導入前に伺ったお悩みやご希望を、取材後に掲載します。',
    proposal: '設備の選定理由や施工で工夫した点を、確認後に掲載します。',
    outcome: '設置後の使い心地や暮らしの変化を、取材後に掲載します。',
  },
]
