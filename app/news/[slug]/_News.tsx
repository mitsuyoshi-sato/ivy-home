'use client'
import { News } from '@/app/data/newsData'
import { motion } from '@/app/motion'
import { SectionHeader } from '@/components/Section'
import { format } from 'date-fns'
import { useEffect, useRef } from 'react'

const parseText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-black">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export const _News = (props: { data: News }) => {
  const refCreatedBy = useRef<HTMLDivElement>(null)
  const refImage = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ;(async () => {
      const cb = refCreatedBy.current
      const i = refImage.current
      await motion.delay(1)
      if (cb && i) {
        motion.to(cb, 1.3, 'out', {
          opacity: 1,
          translateY: '0px',
        })
        await motion.delay(0.3)
        motion.to(i, 1.3, 'out', {
          opacity: 1,
          translateY: '0px',
        })
      }
    })()
  }, [])

  return (
    <article>
      <header className="bg-cleam">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="w-full md:w-[50%]">
              <SectionHeader
                title={props.data.title}
                subtitle={props.data.category}
                // description={props.data.subtitle}
                description=""
              />
              <div
                ref={refCreatedBy}
                className="flex items-center lg:justify-end gap-2 mt-4"
                style={{ opacity: 0, transform: 'translateY(100px)' }}
              >
                <time dateTime={props.data.publishedAt} className="text-sm">
                  {format(props.data.publishedAt, 'yyyy.MM.dd')}
                </time>
                <span className="text-gray-500 text-sm">created by</span>
                <div className="w-7 h-7 rounded-full overflow-hidden">
                  <img
                    src={props.data.createdByImage}
                    alt={props.data.createdByJp}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-bold">{props.data.createdByJp}</p>
              </div>
            </div>
            <figure
              ref={refImage}
              className="w-full md:w-[50%] rounded-lg overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(100px)' }}
            >
              <img
                src={props.data.image}
                alt={props.data.title}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
      </header>
      <div className="wrapper pt-0">
        <div className="mt-12 space-y-24">
          {props.data.sections.map((section, index) => (
            <_SectionItem key={index} section={section} />
          ))}
        </div>
      </div>
    </article>
  )
}

const _SectionItem = (props: { section: News['sections'][0] }) => {
  const refContainer = useRef<HTMLElement>(null)

  useEffect(() => {
    const c = refContainer.current
    if (c) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
              const h3 = c.children[0]
              const p = c.children[1]
              motion.to(h3, 1.3, 'out', { opacity: 1, translateY: '0px' })
              await motion.delay(0.3)
              motion.to(p, 1.3, 'out', { opacity: 1, translateY: '0px' })
            }
          })
        },
        {
          threshold: 0.5,
        },
      )

      observer.observe(c)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section
      ref={refContainer}
      className="translate-y-8 transition-all duration-700 ease-out"
    >
      <h2
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-2xl font-bold mb-4"
      >
        {props.section.title}
      </h2>
      <p
        style={{ opacity: 0, transform: 'translateY(100px)' }}
        className="text-gray-800 whitespace-pre-line leading-loose"
      >
        {parseText(props.section.description)}
      </p>
    </section>
  )
}
