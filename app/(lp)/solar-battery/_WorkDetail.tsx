import {
  ArrowRight,
  House,
  Image as ImageIcon,
  MapPin,
  Sun,
  UsersRound,
} from 'lucide-react'
import Link from 'next/link'

import type { Work } from './works'

export const _WorkDetail = (props: { item: Work; heading: 'h1' | 'h2' }) => {
  const Heading = props.heading
  const SectionHeading = ({ h1: 'h2', h2: 'h3' } as const)[props.heading]

  return (
    <article className="overflow-hidden bg-[#f8f9f5] text-dark8">
      <header className="border-b border-[#e4e9df] bg-white px-6 pb-8 pt-9 sm:px-10 sm:pb-10 sm:pt-12">
        <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-ivy7">
          <span>WORKS</span>
          <span aria-hidden="true" className="h-px w-7 bg-[#a9b391]" />
          <span>{props.item.number}</span>
        </p>
        <Heading className="mt-5 font-serif text-2xl font-medium leading-normal tracking-wider sm:text-4xl">
          {props.item.title}
        </Heading>
      </header>

      <div className="px-5 py-7 sm:p-10">
        <div className="grid gap-5 md:grid-cols-[minmax(0,3fr)_minmax(240px,2fr)]">
          {props.item.image && (
            <figure className="m-0 min-h-56 overflow-hidden rounded-xl">
              <img
                alt={props.item.image.alt}
                className="size-full object-cover"
                src={props.item.image.src}
              />
            </figure>
          )}
          {!props.item.image && (
            <div className="relative flex aspect-[4/3] min-h-56 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#e3ebe1_0%,#f2f4ed_58%,#dce7dd_100%)] text-ivy7">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-48 rounded-full border border-white/70 sm:size-64"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-12 size-64 rounded-full border border-white/60 sm:size-80"
              />
              <div className="relative flex flex-col items-center text-center">
                <div className="flex items-end gap-2 text-ivy7/60">
                  <Sun
                    aria-hidden="true"
                    className="mb-4 size-9"
                    strokeWidth={1.2}
                  />
                  <House
                    aria-hidden="true"
                    className="size-16 sm:size-20"
                    strokeWidth={1.1}
                  />
                </div>
                <p className="mt-5 text-xs font-semibold tracking-[0.16em]">
                  施工写真を準備中
                </p>
              </div>
              <span className="absolute bottom-4 right-5 flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-ivy7/60">
                <ImageIcon aria-hidden="true" className="size-3.5" />
                PHOTO COMING SOON
              </span>
            </div>
          )}

          <aside className="self-start md:pt-1">
            <p className="text-xs font-bold tracking-[0.2em] text-ivy7">
              CUSTOMER PROFILE
            </p>
            <div className="mt-4 flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#edf1e7_0%,#f4f5ef_100%)] px-4 py-3 text-sm font-semibold text-dark8 sm:text-base">
              <UsersRound
                aria-hidden="true"
                className="size-6 shrink-0 text-ivy7"
                strokeWidth={1.8}
              />
              <span>
                {props.item.overview.age}・{props.item.overview.family}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#edf1e7_0%,#f4f5ef_100%)] px-4 py-3 text-sm font-semibold leading-6 text-dark7 sm:text-base">
              <MapPin
                aria-hidden="true"
                className="size-6 shrink-0 text-ivy7"
                strokeWidth={1.8}
              />
              <span>{props.item.overview.area}</span>
            </div>

            {(props.item.overview.solar || props.item.overview.battery) && (
              <>
                <div className="my-6 h-px bg-[#cfd8ca]" />

                <p className="text-xs font-bold tracking-[0.2em] text-ivy7">
                  INSTALLATION
                </p>
                <div className="mt-4 space-y-3">
                  {props.item.overview.solar && (
                    <div className="flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#edf1e7_0%,#f4f5ef_100%)] px-4 py-3 text-sm font-semibold leading-6 text-dark8 sm:text-base">
                      <__SolarIcon strokeWidth={4} />
                      <span>{props.item.overview.solar}</span>
                    </div>
                  )}
                  {props.item.overview.battery && (
                    <div className="flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#edf1e7_0%,#f4f5ef_100%)] px-4 py-3 text-sm font-semibold leading-6 text-dark8 sm:text-base">
                      <__BatteryIcon strokeWidth={4} />
                      <span>{props.item.overview.battery}</span>
                    </div>
                  )}
                </div>
              </>
            )}
          </aside>
        </div>

        <div className="mt-10 space-y-9 border-t border-[#dce4d8] pt-10 sm:mt-12 sm:space-y-11 sm:pt-12">
          {[
            {
              number: '01',
              title: '導入前のお悩み',
              content: props.item.challenge,
            },
            {
              number: '02',
              title: 'ご提案・施工内容',
              content: props.item.proposal,
            },
            {
              number: '03',
              title: '導入後の暮らし',
              content: props.item.outcome,
            },
          ].map((s) => (
            <section
              key={s.number}
              className="grid gap-3 sm:grid-cols-[64px_1fr] sm:gap-5"
            >
              <span
                aria-hidden="true"
                className="font-serif text-3xl text-[#9aa76a]"
              >
                {s.number}
              </span>
              <div>
                <SectionHeading className="text-base font-semibold tracking-wider sm:text-lg">
                  {s.title}
                </SectionHeading>
                <p className="mt-3 text-sm leading-7 text-dark6 sm:leading-8">
                  {s.content}
                </p>
              </div>
            </section>
          ))}
        </div>

        <aside className="mt-12 rounded-xl bg-[linear-gradient(115deg,#0b2418_0%,#1a3a28_100%)] px-6 py-8 text-white sm:mt-14 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#aebd8a]">
              FREE SIMULATION
            </p>
            <p className="mt-2 font-serif text-lg leading-relaxed sm:text-xl">
              ご自宅に合う設備を、一緒に考えませんか。
            </p>
          </div>
          <Link
            className="group mt-6 inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-white/20 bg-white px-6 py-3 text-xs font-semibold text-ivy8 shadow-sm transition-colors hover:bg-[#e8eee2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-0"
            href="/solar-battery#simulation"
          >
            無料シミュレーションへ
            <ArrowRight
              aria-hidden="true"
              className="ml-3 size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </aside>
      </div>
    </article>
  )
}

const __SolarIcon = (props: { strokeWidth: number }) => (
  <svg
    aria-hidden="true"
    className="size-7 shrink-0 text-ivy7"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth}
    viewBox="0 0 64 64"
  >
    <circle cx="32" cy="14" r="7" />
    <path d="M32 2v4M32 22v4M20 14h4M40 14h4M23.5 5.5l2.8 2.8M37.7 19.7l2.8 2.8M40.5 5.5l-2.8 2.8M26.3 19.7l-2.8 2.8" />
    <path d="M16 31h32l6 18H10l6-18Z" />
    <path d="M21 31l-3 18M32 31v18M43 31l3 18M13 40h38" />
    <path d="M28 49v7M36 49v7M24 56h16" />
  </svg>
)

const __BatteryIcon = (props: { strokeWidth: number }) => (
  <svg
    aria-hidden="true"
    className="size-7 shrink-0 text-ivy7"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={props.strokeWidth}
    viewBox="0 0 64 64"
  >
    <path d="M25 10V7h14v3" />
    <rect height="44" rx="4" width="28" x="18" y="10" />
    <path d="M35 20 26 35h7l-3 10 10-16h-7l2-9Z" />
  </svg>
)
