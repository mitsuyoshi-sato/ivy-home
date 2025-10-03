import { motion } from '@/app/motion'
import { forwardRef, useRef } from 'react'
import { Icon } from './icon'

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
      style={props.style}
      className="flex flex-col mt-6 w-full border-t border-gray-300"
    >
      {props.items.map((item) => (
        <AcordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
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
      className="flex flex-col w-full border-b border-gray-300"
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
      <h4 className="cursor-pointer text-sm flex justify-between items-center py-4 font-semibold">
        Q. {props.question}
        <Icon ref={refIcon} name="chevronDown" size={20} />
      </h4>
      <div
        ref={refAnswer}
        style={{ height: '0px', opacity: 0, display: 'none' }}
        className="text-sm whitespace-pre-line gap-1"
      >
        <span className="flex-shrink-0">A.</span>
        <p className="flex-1">{props.answer}</p>
      </div>
    </article>
  )
}
