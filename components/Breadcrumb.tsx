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
        'mx-auto flex w-[calc(100%-3vw)] max-w-[1200px] flex-wrap items-center gap-2 px-[5vw] pt-4 md:w-[calc(100%-80px)] lg:px-[72px]',
        props.className,
      )}
    >
      {props.items.map((item, i) => (
        <div key={item.title} className="flex shrink-0 items-center gap-2">
          <Link
            aria-disabled={item.current}
            className={cn(
              'flex items-center gap-1 text-sm md:text-base',
              item.current &&
                'pointer-events-none cursor-default font-bold text-gray-900',
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
