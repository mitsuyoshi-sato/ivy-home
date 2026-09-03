import { Leaf } from 'lucide-react'
import Link from 'next/link'

export const _Logo = (props: { inverted?: boolean; onClick?: () => void }) => {
  return (
    <Link
      aria-label="太陽光・蓄電池LPトップへ"
      className="relative z-20 shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6"
      href="/solar-battery"
      onClick={props.onClick}
    >
      <span className="relative block w-[118px] sm:w-[132px]">
        <img
          alt="IVY HOME"
          className={`h-auto w-full ${props.inverted ? 'brightness-0 invert' : ''}`}
          height="21"
          src="/images/logo-text.svg"
          width="107"
        />
        <Leaf
          aria-hidden="true"
          className="absolute -left-[11px] -top-[12px] size-6"
          fill="#86efac"
          stroke="#166534"
        />
      </span>
      <span
        className={`mt-0.5 block whitespace-nowrap text-[6px] font-medium tracking-[0.04em] sm:text-[7px] ${props.inverted ? 'text-white/70' : 'text-dark7'}`}
      >
        太陽光・蓄電池・エコキュートの専門店
      </span>
    </Link>
  )
}
