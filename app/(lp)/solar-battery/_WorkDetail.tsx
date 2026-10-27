import { ArrowUpRight, House, Image as ImageIcon, Sun } from 'lucide-react'
import Link from 'next/link'

import type { Work } from './works'

export const _WorkDetail = (props: { work: Work; heading: 'h1' | 'h2' }) => {
  const Heading = props.heading
  const SectionHeading = ({ h1: 'h2', h2: 'h3' } as const)[props.heading]

  return (
    <article className="overflow-hidden bg-[#f8f9f5] text-dark8">
      <header className="border-b border-[#e4e9df] bg-white px-6 pb-8 pt-9 sm:px-10 sm:pb-10 sm:pt-12">
        <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-ivy7">
          <span>WORKS</span>
          <span aria-hidden="true" className="h-px w-7 bg-[#a9b391]" />
          <span>{props.work.number}</span>
        </p>
        <Heading className="mt-5 font-serif text-2xl font-medium leading-normal tracking-wider sm:text-4xl">
          {props.work.title}
        </Heading>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-dark6 sm:text-base sm:leading-8">
          {props.work.description}
        </p>
      </header>

      <div className="px-5 py-7 sm:p-10">
        <div className="relative flex aspect-[16/10] max-h-[440px] min-h-48 items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#e3ebe1_0%,#f2f4ed_58%,#dce7dd_100%)] text-ivy7">
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

        <div className="mt-8 flex flex-wrap gap-2 border-b border-[#dce4d8] pb-8 text-xs font-medium text-ivy7 sm:mt-10">
          <span className="rounded-full border border-[#c9d4c3] bg-white px-4 py-2">
            施工エリア：掲載準備中
          </span>
          <span className="rounded-full border border-[#c9d4c3] bg-white px-4 py-2">
            導入設備：掲載準備中
          </span>
        </div>

        <div className="mt-10 space-y-9 sm:mt-12 sm:space-y-11">
          {[
            {
              number: '01',
              title: '導入前のお悩み',
              content: props.work.challenge,
            },
            {
              number: '02',
              title: 'ご提案・施工内容',
              content: props.work.proposal,
            },
            {
              number: '03',
              title: '導入後の暮らし',
              content: props.work.outcome,
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
            className="mt-6 inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-semibold text-ivy8 transition-colors hover:bg-[#e8eee2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-0"
            href="/solar-battery#simulation"
          >
            無料シミュレーションへ
            <ArrowUpRight aria-hidden="true" className="ml-2 size-4" />
          </Link>
        </aside>
      </div>
    </article>
  )
}
