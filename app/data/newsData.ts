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
  sections: {
    title: string
    description: string
  }[]
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
    sections: [
      {
        title: '会社設立',
        description: '株式会社アイビーホームを設立しました！',
      },
    ],
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
    sections: [
      {
        title: '請求書',
        description: '毎月の請求書をみるのが怖くなくなりました。',
      },
    ],
  },
  {
    id: 3,
    slug: 'termite-checklist',
    image: '/pest-control.jpg',
    publishedAt: '2025-10-07T00:00:00+09:00',
    category: 'シロアリ対策',
    title: '家を守る！\nシロアリを見抜くためのチェックリスト',
    subtitle:
      '家を守る！シロアリの初期症状とチェックリストを解説。小さな穴や木材の変色に気づく方法も紹介。',
    href: '/news/termite-checklist',
    createdByJp: '小西　裕也',
    createdByEn: 'Yuya Konishi',
    createdByImage: '/yuya-konishi.jpg',
    sections: [
      {
        title: '小さなサインを見逃さない 〜シロアリ被害の初期症状〜',
        description:
          '家の柱や床下に潜むシロアリは、表から見えにくいのが厄介なところです。\nしかし、早期発見につながる「小さなサイン」はいくつかあります。\n\n• **床がふかふかして沈む感じがする**\n• **壁や柱に小さな穴がある**\n• **ドアや窓の開け閉めが重くなった**\n• **羽アリを見かけた**\n\nこれらはすべて、シロアリが木材内部を食べ進めている可能性を示すサインです。\n見た目ではわかりにくいため、「少しでもおかしい」と思った時点で点検を依頼することが、被害を最小限に抑える一番のポイントです。',
      },
      {
        title: '自分でできるシロアリ対策',
        description:
          '被害を防ぐには、住まいの環境をシロアリが好まない状態に保つことが大切です。\n以下のような簡単な対策から始めましょう。\n\n1. **床下や外壁まわりを乾燥させる**\n湿気はシロアリの大好物。定期的な換気や除湿を心がけましょう。\n\n2. **木材を地面に直接置かない**\n庭やベランダに木材や段ボールを放置すると、巣作りの原因になります。\n\n3. **定期的に専門業者に点検を依頼する**\n年に一度の点検を習慣にすると安心です。被害が出る前に対策できます。\n\nたとえ築年数が浅い家でも、油断は禁物。\n「被害が出てから」ではなく、「出る前」に対策することが家を守る秘訣です。',
      },
    ],
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
