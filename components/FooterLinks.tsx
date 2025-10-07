import Link from 'next/link'
import { Icon } from './ui/Icon'

export const FooterLinks = (props: {
  items: { title: string; href: string; icon: string }[]
}) => {
  return (
    <div className="mb-6 flex items-center justify-end gap-2 flex-wrap w-[calc(100%-3vw)] md:w-[calc(100%-80px)] mx-auto max-w-[1200px] px-[5vw] lg:px-[72px]">
      {props.items.map((item, i) => (
        <div key={item.title} className="flex gap-2 shrink-0 text-gray-500">
          <Link
            href={item.href}
            className="flex items-center gap-2 hover:text-gray-900"
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
