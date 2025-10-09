import Link from 'next/link'

import { Icon } from './ui/Icon'

export const FooterLinks = (props: {
  items: { title: string; href: string; icon: string }[]
}) => {
  return (
    <div className="mx-auto mb-6 flex w-[calc(100%-3vw)] max-w-[1200px] flex-wrap items-center justify-end gap-2 px-[5vw] md:w-[calc(100%-80px)] lg:px-[72px]">
      {props.items.map((item, i) => (
        <div
          key={item.title}
          className="flex shrink-0 items-center gap-1 text-gray-500"
        >
          <Link
            className="flex items-center gap-2 hover:text-gray-900"
            href={item.href}
          >
            <Icon name={item.icon} size={16} />
            <div className="text-sm md:text-base">{item.title}</div>
          </Link>
          {props.items.length - 1 !== i && <span>／</span>}
        </div>
      ))}
    </div>
  )
}
