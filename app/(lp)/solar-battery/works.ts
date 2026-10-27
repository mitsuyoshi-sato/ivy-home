export type Work = {
  slug: string
  number: string
  title: string
  description: string
  challenge: string
  proposal: string
  outcome: string
}

export const data = [
  {
    slug: 'example-1',
    number: '01',
    title: '施工事例（仮）1',
    description: 'ここに施工事例1の紹介文を記載します。',
    challenge: '導入前に伺ったお悩みやご希望を、取材後に掲載します。',
    proposal: '設備の選定理由や施工で工夫した点を、確認後に掲載します。',
    outcome: '設置後の使い心地や暮らしの変化を、取材後に掲載します。',
  },
  {
    slug: 'example-2',
    number: '02',
    title: '施工事例（仮）2',
    description: 'ここに施工事例2の紹介文を記載します。',
    challenge: '導入前に伺ったお悩みやご希望を、取材後に掲載します。',
    proposal: '設備の選定理由や施工で工夫した点を、確認後に掲載します。',
    outcome: '設置後の使い心地や暮らしの変化を、取材後に掲載します。',
  },
  {
    slug: 'example-3',
    number: '03',
    title: '施工事例（仮）3',
    description: 'ここに施工事例3の紹介文を記載します。',
    challenge: '導入前に伺ったお悩みやご希望を、取材後に掲載します。',
    proposal: '設備の選定理由や施工で工夫した点を、確認後に掲載します。',
    outcome: '設置後の使い心地や暮らしの変化を、取材後に掲載します。',
  },
] as const satisfies readonly Work[]
