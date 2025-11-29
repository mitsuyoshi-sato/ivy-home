'use client'
import { useRef } from 'react'

import { Icon } from '@/components/ui/Icon'

import { Hamburger } from './Hamburger'
import { Nav } from './Nav'

export const Header = (props: {
  items: {
    href: string
    label: string
    subs?: { href: string; label: string; icon?: string }[]
  }[]
}) => {
  const refBackground = useRef<HTMLDivElement>(null)
  return (
    <header className="fixed inset-x-0 top-[20px] z-50 mx-auto">
      <nav className="fixed left-1/2 top-0 z-50 mt-4 flex h-[62px] w-[calc(100%-16px-16px)] -translate-x-1/2 items-center rounded-full px-4 py-2">
        <div
          ref={refBackground}
          className="absolute inset-0 rounded-full border border-gray-200 bg-white/40 shadow-lg shadow-white/20 backdrop-blur-md backdrop-saturate-150"
          style={{
            opacity: '1',
          }}
        />
        <div className="flex w-full items-center justify-between pl-6">
          <div className="relative w-[110px] translate-y-[2px]">
            <div>
              <img
                alt="アイビーホームのロゴ"
                className="w-full"
                src="/images/logo-text.svg"
              />
            </div>
            <Icon
              className="absolute left-[-9.9px] top-[-12.4355px]"
              fill="#86EFAC"
              name="leaf"
              size={23.32}
              stroke="#166534"
            />
          </div>

          <Nav items={props.items} />
          <Hamburger items={props.items} refBackground={refBackground} />
        </div>
      </nav>
    </header>
  )
}
