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
    image: '/images/unity.jpg',
    publishedAt: '2025-10-07T00:00:00+09:00',
    title: '株式会社アイビーホーム設立',
    subtitle:
      'お客様の未来の暮らしをつくる株式会社アイビーホーム。太陽光発電や住宅リフォームで安心と快適を提供します。',
    href: '/news/ivy-home-establishment',
    category: '事務連絡',
    createdByJp: '小西 裕也',
    createdByEn: 'Yuya Konishi',
    createdByImage: '/images/yuya-konishi.jpg',
    sections: [
      {
        title: '設立のご報告',
        description:
          'これまで個人事業として行ってまいりました住宅リフォーム・太陽光発電事業を、より多くのお客様へ安定的に提供するため、法人化いたしました。\nこれを機に、社員一同さらなるサービス向上と信頼性の高い施工を目指してまいります。',
      },
      {
        title: '今後の展望',
        description:
          '今後は、太陽光発電や蓄電池の導入支援をはじめ、住宅の快適性と省エネを両立するトータルサポートを展開していく予定です。\n地域の皆さまに寄り添い、「安心して長く暮らせる住まいづくり」に貢献してまいります。\nこれからのサービス向上にご期待ください。',
      },
    ],
  },
  {
    id: 2,
    slug: 'monthly-bill',
    image: '/images/news-battery.jpg',
    publishedAt: '2025-10-07T00:00:00+09:00',
    title: '太陽光と蓄電池の組み合わせで家の電力活用効率アップ！',
    subtitle:
      '太陽光発電で作った電気を蓄電池に貯め、昼は自家消費、夜や停電時にも安心して使える家庭向けの新しいエネルギーライフをご提案します。',
    href: '/news/monthly-bill',
    category: '蓄電池・太陽光パネル',
    createdByJp: '小西 裕也',
    createdByEn: 'Yuya Konishi',
    createdByImage: '/images/yuya-konishi.jpg',
    sections: [
      {
        title: '太陽光パネルで作って、蓄電池で貯める！',
        description:
          '太陽光パネルで昼間に電気を作り、蓄電池に貯めることで、夜や停電時にも安心して使用できます。\nこの組み合わせにより、家庭の電力自給率が高まり、電気代の節約や災害時のバックアップとしても効果的です。\nさらに、作った電気を無駄なく使えるため、環境にもやさしく、家庭でのエネルギーライフを快適に楽しめます。',
      },
      {
        title: '停電時に冷蔵庫が無事だった！',
        description:
          '太陽光パネルで昼間に電気を作り、蓄電池に貯めることで、夜や停電時でも家電を安心して使用できます。\n実際に停電が起きた際も、蓄電池に貯めた電気で照明や冷蔵庫を使え、「家族全員安心して過ごせた」という声もあります。\n昼間の余剰電力を無駄なく活用できるため、家庭の電力自給率が高まり、電気代の節約や災害時のバックアップとしても効果的です。\n太陽光と蓄電池の組み合わせで、快適で安心な家庭のエネルギーライフを実現できます。\nぜひ皆さまも導入を検討してみてはいかがでしょうか。',
      },
    ],
  },
  {
    id: 3,
    slug: 'termite-checklist',
    image: '/images/pest-control.jpg',
    publishedAt: '2025-10-07T00:00:00+09:00',
    category: 'シロアリ対策',
    title: '家を守る！シロアリを見抜くためのチェックリスト',
    subtitle:
      '家を守る！シロアリの初期症状とチェックリストを解説。小さな穴や木材の変色など、見逃しやすいサインに気づく方法も紹介します。',
    href: '/news/termite-checklist',
    createdByJp: '小西 裕也',
    createdByEn: 'Yuya Konishi',
    createdByImage: '/images/yuya-konishi.jpg',
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
]
