'use client'

import { Plus } from 'lucide-react'
import { useId, useState } from 'react'

import { cn } from '@/lib/utils'

export const _FaqList = (props: {
  items: readonly { answer: string; question: string }[]
}) => {
  const idFaq = useId()
  const [stateOpen, setOpen] = useState<number[]>([])

  return (
    <div className="mt-9 flex flex-col gap-3 md:grid md:grid-cols-2 md:items-start">
      {[0, 1].map((c) => (
        <div key={c} className="contents md:flex md:flex-col md:gap-3">
          {props.items.map(
            (i, n) =>
              n % 2 === c && (
                <__FaqItem
                  key={i.question}
                  answer={i.answer}
                  idFaq={idFaq}
                  index={n}
                  isOpen={stateOpen.includes(n)}
                  question={i.question}
                  onToggle={() => {
                    setOpen((s) => __getIndexesOpen(s, n))
                  }}
                />
              ),
          )}
        </div>
      ))}
    </div>
  )
}

const __FaqItem = (props: {
  answer: string
  idFaq: string
  index: number
  isOpen: boolean
  question: string
  onToggle: () => void
}) => {
  return (
    <div
      className="overflow-hidden rounded-lg border border-[#ebece8] bg-[#f7f8f5]"
      style={{ order: props.index }}
    >
      <button
        id={`${props.idFaq}-question-${props.index}`}
        aria-controls={`${props.idFaq}-answer-${props.index}`}
        aria-expanded={props.isOpen}
        className="flex min-h-16 w-full cursor-pointer items-center gap-4 px-5 py-4 text-left text-sm font-semibold text-dark8 transition-colors hover:text-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ivy6 sm:px-6 sm:text-base"
        type="button"
        onClick={props.onToggle}
      >
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ivy8 text-xs font-semibold text-white">
          Q
        </span>
        <span className="flex-1">{props.question}</span>
        <Plus
          aria-hidden="true"
          className={cn(
            'size-5 shrink-0 text-dark5 transition-transform duration-300',
            props.isOpen && 'rotate-45',
          )}
        />
      </button>

      <div
        id={`${props.idFaq}-answer-${props.index}`}
        aria-hidden={!props.isOpen}
        aria-labelledby={`${props.idFaq}-question-${props.index}`}
        className={cn(
          'grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out',
          props.isOpen && 'grid-rows-[1fr] opacity-100',
        )}
        role="region"
      >
        <div className="overflow-hidden">
          <div className="flex gap-4 border-t border-[#ebece8] bg-white p-5 sm:px-6">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-ivy7 text-xs font-semibold text-ivy7">
              A
            </span>
            <p className="pt-0.5 text-sm leading-7 text-dark6">
              {props.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const __getIndexesOpen = (indexes: number[], index: number) => {
  const indexesNext = indexes.filter((i) => i !== index)

  if (!indexes.includes(index)) {
    indexesNext.push(index)
  }

  return indexesNext
}
