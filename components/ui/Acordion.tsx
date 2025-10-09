import { forwardRef, useRef } from 'react'

import { motion } from '@/app/motion'

import { Icon } from './Icon'

export const Acordion = forwardRef<
  HTMLDivElement,
  {
    style?: React.CSSProperties
    items: { question: string; answer: string }[]
  }
>((props, ref) => {
  return (
    <div
      ref={ref}
      className="mt-6 flex w-full flex-col border-t border-gray-300"
      style={props.style}
    >
      {props.items.map((item) => (
        <AcordionItem
          key={item.question}
          answer={item.answer}
          question={item.question}
        />
      ))}
    </div>
  )
})

Acordion.displayName = 'Acordion'

const AcordionItem = (props: { question: string; answer: string }) => {
  const refAnswer = useRef<HTMLDivElement>(null)
  const refOpen = useRef(false)
  const refIcon = useRef<SVGSVGElement>(null)
  return (
    <article
      className="flex w-full flex-col border-b border-gray-300"
      onClick={async () => {
        const a = refAnswer.current
        const i = refIcon.current
        if (a && i && !refOpen.current) {
          motion.set(a, { display: 'flex' })
          await motion.delay(0)
          motion.to(a, 0.2, 'linear', {
            height: `${a.scrollHeight + 16}px`,
          })
          motion.to(i, 0.2, 'out', { rotate: '180deg' })
          await motion.delay(0.1)
          motion.set(a, { opacity: 1 })
          await motion.delay(0.1)
          // アニメーション閉じる際の、opacityのアニメーションを無効にする
          motion.set(a, { transition: 'none' })
          refOpen.current = true
        } else if (a && i && refOpen.current) {
          motion.set(a, { opacity: 0 })
          await motion.delay(0)
          // アニメーション戻す
          motion.set(a, { transition: '' })
          motion.to(i, 0.2, 'out', { rotate: '0deg' })
          await motion.to(a, 0.2, 'linear', { height: '0px' })
          await motion.delay(0)
          motion.set(a, { display: 'none' })
          refOpen.current = false
        }
      }}
    >
      <h4 className="flex cursor-pointer items-center justify-between py-4 text-sm font-semibold">
        Q. {props.question}
        <Icon ref={refIcon} name="chevronDown" size={20} />
      </h4>
      <div
        ref={refAnswer}
        className="gap-1 whitespace-pre-line text-sm"
        style={{ height: '0px', opacity: 0, display: 'none' }}
      >
        <span className="shrink-0">A.</span>
        <p className="flex-1">{props.answer}</p>
      </div>
    </article>
  )
}
