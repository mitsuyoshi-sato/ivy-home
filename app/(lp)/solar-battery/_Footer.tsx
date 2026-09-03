import Link from 'next/link'

import { _Logo } from './_Logo'

export const _Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[1600px] bg-[#102419] px-5 py-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="ml-[11px]">
          <_Logo inverted />
        </div>

        <nav
          aria-label="フッターナビゲーション"
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs font-medium text-white/75"
        >
          <Link className="transition-colors hover:text-white" href="/company">
            会社概要
          </Link>
          <span aria-hidden="true" className="text-white/30">
            |
          </span>
          <Link className="transition-colors hover:text-white" href="/privacy">
            プライバシーポリシー
          </Link>
        </nav>

        <small className="text-xs text-white/65">© IVY HOME Co., Ltd.</small>
      </div>
    </footer>
  )
}
