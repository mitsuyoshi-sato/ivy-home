'use client'
import { useRef } from 'react'
import { Hamburger } from './Hamburger'
import { Nav } from './Nav'
import { Icon } from '@/components/ui/icon'

export const Header = (props: {
  items: {
    href: string
    label: string
    subs?: { href: string; label: string; icon?: string }[]
  }[]
}) => {
  const refBackground = useRef<HTMLDivElement>(null)
  return (
    <header className="fixed left-0 right-0 top-[20px] z-50 mx-auto">
      <nav className="flex items-center px-4 py-2 fixed left-1/2 top-0 z-50 mt-4 w-[calc(100%-16px-16px)] h-[62px] -translate-x-1/2 rounded-full">
        <div
          ref={refBackground}
          style={{
            opacity: '1',
          }}
          className="inset-0 absolute rounded-full border border-white/30 bg-white/40 shadow-lg shadow-white/20 backdrop-blur-md backdrop-saturate-150"
        />
        <div className="flex items-center justify-between pl-6 w-full">
          <div className="relative w-[110px] translate-y-[2px]">
            <div>
              <img
                src="/logo-text.svg"
                alt="アイビーホームのロゴ"
                className="w-full"
              />
            </div>
            <Icon
              stroke="#166534"
              fill="#86EFAC"
              name="leaf"
              size={23.32}
              className="absolute -top-[12.4355px] -left-[9.9px]"
            />
          </div>

          <Nav items={props.items} />
          <Hamburger items={props.items} refBackground={refBackground} />
        </div>
      </nav>
    </header>
  )
}
