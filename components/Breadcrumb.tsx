import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Icon } from './ui/Icon'

export const Breadcrumb = (props: {
  items: { title: string; href: string; icon: string; current?: boolean }[]
  className?: string
}) => {
  return (
    <div
      className={cn(
        'pt-4 flex items-center gap-2 flex-wrap w-[calc(100%-3vw)] md:w-[calc(100%-80px)] mx-auto max-w-[1200px] px-[5vw] lg:px-[72px]',
        props.className,
      )}
    >
      {props.items.map((item, i) => (
        <div key={item.title} className="flex shrink-0 items-center gap-2">
          <Link
            aria-disabled={item.current}
            className={cn(
              'text-sm md:text-base flex gap-1 items-center',
              item.current &&
                'text-gray-900 font-bold pointer-events-none cursor-default',
              !item.current && 'text-gray-500 hover:text-gray-900',
            )}
            href={item.href}
          >
            <Icon name={item.icon} size={16} />
            <div className={cn(!item.current && 'text-sm md:text-base')}>
              {item.title}
            </div>
          </Link>
          {i !== props.items.length - 1 && (
            <ChevronRight className="size-4 text-gray-500" />
          )}
        </div>
      ))}
    </div>
  )
}
