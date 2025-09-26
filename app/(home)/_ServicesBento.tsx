import { cn } from '@/lib/utils'

export const _ServicesBento = () => {
  return (
    <div className="grid grid-cols-12 gap-3 my-9">
      {
        <>
          <__Bento
            title={'太陽光パネル'}
            description={
              ' 住宅向けに太陽光パネルの販売・設置・メンテナンスを行っています。\nお客様のライフスタイルや設備に合わせた最適なプランをご提案し、省エネと電気料金の削減をサポートします。'
            }
            image={'/hero.jpg'}
            colSpan={'7'}
          />
          <__Bento
            title={'蓄電池'}
            description={
              ' 昼間に発電した電気を貯めて夜間に活用することで、エネルギーの自給自足を実現し、停電時の安心も提供します。'
            }
            image={'/tikudenti.png'}
            colSpan={'5'}
          />
          <__Bento
            title={'エコキュート'}
            description={
              '空気熱を活用することで光熱費を抑え、環境負荷の軽減にも貢献します。設置から保守まで、きめ細やかなサポートを提供しています。'
            }
            image={'/eco-cute.jpg'}
            colSpan={'6'}
          />
          <__Bento
            title={'オール家電'}
            description={
              '太陽光発電や蓄電池との連携で効率的なエネルギー利用を実現し、快適な暮らしをサポートします。'
            }
            image={'/all-kaden.jpeg'}
            colSpan={'3'}
          />
          <__Bento
            title={'外壁塗装'}
            description={
              '建物の外壁塗装・補修工事を通じて、美観の維持と耐久性の向上を提供しています。'
            }
            image={'/hero.jpg'}
            colSpan={'3'}
          />
        </>
      }
    </div>
  )
}

function __Bento({
  title,
  description,
  image,
  colSpan,
}: {
  title: string
  description: string
  image: string
  colSpan: string
}) {
  return (
    <div
      className={`hover:opacity-80 duration-300 hover:cursor-pointer relative overflow-hidden border-[2px] border-gray-300 flex items-center justify-center rounded-lg col-span-${colSpan} `}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover absolute inset-0 rounded-lg"
      />
      <div className="relative w-full h-full bg-white/80 backdrop-blur-3xl p-3">
        <div
          className={cn(
            'relative rounded-lg overflow-hidden border-[1px] border-gray-300',
            colSpan === '3' || colSpan === '6' ? 'h-[150px]' : 'h-[200px]',
          )}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="py-6 px-3">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-gray-600 mt-2 font-semibold leading-[1.82] break-words whitespace-pre-line text-sm">
            {description.replace(/\\n/g, '\n')}
          </p>
        </div>
      </div>
    </div>
  )
}
