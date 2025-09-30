import { Section } from '@/components/Section'
import { ArrowRightIcon } from 'lucide-react'

export const _RecruitsSection = () => {
  return (
    <div className="wrapper flex justify-between">
      <Section
        className=""
        title="採用情報"
        subtitle="Recuruit"
        description=""
      />
      <div className="w-[50%] flex flex-col text-sm font-medium gap-4 mt-12">
        <div className="group hover:text-ivy5 cursor-pointer font-semibold w-full flex items-center justify-between border-b border-gray-300 pb-2 pt-4">
          セールス／カスタマーサポート
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 transition-all duration-300 ease-out"
          />
        </div>
        <div className="group hover:text-ivy5 cursor-pointer font-semibold w-full flex items-center justify-between border-b border-gray-300 pb-2 pt-4">
          バックオフィス（経理／その他の事務）
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 transition-all duration-300 ease-out"
          />
        </div>
        <div className="group hover:text-ivy5 cursor-pointer font-semibold w-full flex items-center justify-between border-b border-gray-300 pb-2 pt-4">
          マーケティング
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 transition-all duration-300 ease-out"
          />
        </div>
      </div>
    </div>
  )
}
