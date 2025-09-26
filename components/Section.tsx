import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { forwardRef } from 'react'

export const Section = forwardRef<
  HTMLDivElement,
  {
    title: string
    subtitle: string
    description: string
    button: { href: string; text: string }
    className?: string
    style?: React.CSSProperties
  }
>((props, ref) => {
  return (
    <div ref={ref} className={props.className} style={props.style}>
      <p className="text-sm text-gray-500 lg:text-lg">{props.subtitle}</p>
      <h2 className="lg:text-4xl text-2xl font-bold lg:mt-6 mt-4">
        {props.title}
      </h2>
      <p className="lg:text-lg text-sm text-gray-600 lg:mt-6 mt-4 whitespace-pre-line">
        {props.description.replace(/\\n/g, '\n')}
      </p>
      <Link href={props.button.href}>
        <Button className="lg:mt-6 mt-4" icon={ArrowRight} iconPosition="right">
          {props.button.text}
        </Button>
      </Link>
    </div>
  )
})
