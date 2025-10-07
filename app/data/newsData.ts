export type News = {
  id: number
  slug: string
  image: string
  publishedAt: string
  title: string
  subtitle: string
  href: string
  category: string
  createdByJp: string
  createdByEn: string
  createdByImage: string
}

export const dataNews: News[] = [
  {
    id: 1,
    slug: 'ivy-home-establishment',
    image: '/home.jpg',
    publishedAt: '2025-09-01T00:00:00+09:00',
    title: '株式会社アイビーホームを設立しました！',
    subtitle: '株式会社アイビーホームを設立しました！',
    href: '/news/ivy-home-establishment',
    category: '会社設立',
    createdByJp: '小西　裕也',
    createdByEn: 'Yuya Konishi',
    createdByImage: '/yuya-konishi.jpg',
  },
  {
    id: 2,
    slug: 'monthly-bill',
    image: '/light.jpg',
    publishedAt: '2025-09-15T00:00:00+09:00',
    title: '毎月の請求書をみるのが怖くなくなりました。',
    subtitle: '毎月の請求書をみるのが怖くなくなりました。',
    href: '/news/monthly-bill',
    category: '請求書',
    createdByJp: '小西　裕也',
    createdByEn: 'Yuya Konishi',
    createdByImage: '/yuya-konishi.jpg',
  },
  {
    id: 3,
    slug: 'termite-checklist',
    image: '/pest-control.jpg',
    publishedAt: '2025-10-07T00:00:00+09:00',
    category: 'シロアリ対策',
    title: '家を守る！シロアリを見抜くチェックリスト',
    subtitle:
      '家を守る！シロアリの初期症状とチェックリストを解説。小さな穴や木材の変色に気づく方法も紹介。',
    href: '/news/termite-checklist',
    createdByJp: '小西　裕也',
    createdByEn: 'Yuya Konishi',
    createdByImage: '/yuya-konishi.jpg',
  },
  // {
  //   id: 4,
  //   slug: 'self-generated-energy',
  //   image: '/solar-panel.jpg',
  //   publishedAt: '2025-12-01T00:00:00+09:00',
  //   title: '自分でエネルギーを作れるようになりました。',
  //   subtitle: '自分でエネルギーを作れるようになりました。',
  //   href: '/news/self-generated-energy',
  //   category: 'エネルギー',
  //   createdByJp: '小西　裕也',
  //   createdByEn: 'Yuya Konishi',
  // },
  // {
  //   id: 5,
  //   slug: 'gas-contract-free',
  //   image: '/cooking.jpg',
  //   publishedAt: '2025-12-10T00:00:00+09:00',
  //   title: 'ガス契約が不要になりました。',
  //   subtitle: 'ガス契約が不要になりました。',
  //   href: '/news/gas-contract-free',
  // },
  // {
  //   id: 5,
  //   image: '/tikudenti.png',
  //   date: '2025.6',
  //   text: '停電時も安心です。',
  // },
  // {
  //   id: 6,
  //   image: '/paint.jpeg',
  //   date: '2025.9',
  //   text: '生まれ変わりました！',
  // },
]
