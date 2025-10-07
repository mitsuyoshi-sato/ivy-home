import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Icon } from './ui/Icon'

export const Breadcrumb = (props: {
  items: { title: string; href: string; icon: string; current?: boolean }[]
}) => {
  return (
    <div className="mt-4 flex items-center gap-2 flex-wrap w-[calc(100%-3vw)] md:w-[calc(100%-80px)] mx-auto max-w-[1200px] px-[5vw] lg:px-[72px]">
      {props.items.map((item, i) => (
        <div key={item.title} className="flex gap-2 shrink-0 items-center">
          <Link
            href={item.href}
            className={cn(
              'text-sm md:text-base flex gap-1 items-center',
              item.current &&
                'text-gray-900 font-bold pointer-events-none cursor-default',
              !item.current && 'text-gray-500 hover:text-gray-900',
            )}
            aria-disabled={item.current}
          >
            <Icon name={item.icon} size={16} />
            <div className={cn(!item.current && 'text-sm md:text-base')}>
              {item.title}
            </div>
          </Link>
          {i !== props.items.length - 1 && (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </div>
      ))}
    </div>
  )
}
