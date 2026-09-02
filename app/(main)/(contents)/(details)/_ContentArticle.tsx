'use client'

import {
  type RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import type { ContentDetailData } from '@/app/data/content'
import { motion } from '@/app/motion'
import { SectionHeader } from '@/components/SectionHeader'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

type ContentSection = ContentDetailData['sections'][number]

export const _ContentArticle = (props: {
  data: ContentDetailData & { formattedDate: string }
}) => {
  const isFallbackAuthorImage = props.data.authorImage === '/images/favicon.png'
  const refCreatedBy = useRef<HTMLDivElement>(null)
  const refImage = useRef<HTMLDivElement>(null)
  const refSectionMap = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    ;(async () => {
      const cb = refCreatedBy.current
      const i = refImage.current
      await motion.delay(0.5)
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
    <article className="isolate">
      <div className="wrapper grid items-start gap-x-16 py-0 lg:grid-cols-[minmax(0,1fr)_388px] lg:px-6">
        <div
          aria-hidden="true"
          className="relative -z-10 hidden self-stretch before:absolute before:inset-y-0 before:left-1/2 before:w-screen before:-translate-x-1/2 before:bg-cleam lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:block"
        />
        <header className="relative py-16 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-cleam lg:col-start-1 lg:row-start-1 lg:py-24 lg:before:hidden">
          <SectionHeader
            description={props.data.subtitle}
            subtitle={props.data.category}
            title={props.data.title}
          />
          <div
            ref={refCreatedBy}
            className="mt-4 flex items-center gap-2 lg:justify-end"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            <time className="text-sm" dateTime={props.data.publishedAt}>
              {props.data.formattedDate}
            </time>
            <span className="text-sm text-gray-500">created by</span>
            <div
              className={cn(
                'flex size-7 items-center justify-center overflow-hidden rounded-full',
                isFallbackAuthorImage && 'border border-green-700/30 bg-white',
              )}
            >
              <img
                alt={props.data.author}
                className={cn(
                  'object-cover',
                  isFallbackAuthorImage && 'size-4',
                  !isFallbackAuthorImage && 'size-full',
                )}
                src={props.data.authorImage}
              />
            </div>
            <p className="text-sm font-bold">{props.data.author}</p>
          </div>
          <figure
            ref={refImage}
            className="mt-10 aspect-video w-full overflow-hidden rounded-lg"
            style={{ opacity: 0, transform: 'translateY(100px)' }}
          >
            <img
              alt={props.data.title}
              className="size-full object-cover"
              src={props.data.image}
            />
          </figure>
        </header>
        {props.data.sections.length > 0 && (
          <__Index
            refSectionMap={refSectionMap}
            sections={props.data.sections}
          />
        )}
        <div className="space-y-24 py-20 lg:col-start-1 lg:row-start-2 lg:py-24">
          {props.data.sections.map((s, i) => (
            <__SectionItem
              id={__getSectionId(i)}
              key={__getSectionId(i)}
              onSectionRef={(e) => {
                refSectionMap.current[__getSectionId(i)] = e
              }}
              section={s}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

const __Index = (props: {
  sections: ContentSection[]
  refSectionMap: RefObject<Record<string, HTMLElement | null>>
}) => {
  const [stateActive, setActive] = useState(__getSectionId(0))
  const refBar = useRef<HTMLDivElement>(null)
  const refItemMap = useRef<Record<string, HTMLAnchorElement | null>>({})
  const refIsFirst = useRef(true)

  useEffect(() => {
    const listSection = props.sections
      .map((_, i) => props.refSectionMap.current[__getSectionId(i)])
      .filter((e): e is HTMLElement => Boolean(e))

    const onScroll = () => {
      const h = listSection.reduce(
        (active, e) => (e.getBoundingClientRect().top <= 160 ? e : active),
        listSection[0],
      )

      if (h) {
        setActive((p) => (p === h.id ? p : h.id))
      }
    }

    onScroll()
    document.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('resize', onScroll)
    }
  }, [props.refSectionMap, props.sections])

  useLayoutEffect(() => {
    const b = refBar.current
    const i = refItemMap.current[stateActive]

    if (b && i) {
      const style = {
        height: `${i.offsetHeight}px`,
        translateY: `${i.offsetTop}px`,
      }

      if (refIsFirst.current) {
        motion.set(b, style)
        refIsFirst.current = false
      } else {
        motion.to(b, 0.28, 'out', style)
      }
    }
  }, [stateActive])

  return (
    <aside
      aria-label="記事の目次"
      className="my-10 h-fit rounded-2xl border border-gray-300 bg-white/80 p-5 shadow-lg backdrop-blur-md lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:my-24"
    >
      <p className="font-bold">目次</p>
      <div className="relative mt-4">
        <div className="absolute inset-y-0 left-2 w-[2px] bg-gray-200" />
        <div
          ref={refBar}
          className="absolute left-2 top-0 w-[2px] bg-ivy5 shadow-[0_0_14px_2px_rgba(37,183,121,0.6)]"
          style={{ height: '0px' }}
        />
        <ol className="flex flex-col gap-2 pl-6">
          {props.sections.map((s, i) => (
            <li key={__getSectionId(i)}>
              <a
                aria-current={
                  stateActive === __getSectionId(i) ? 'location' : undefined
                }
                className={cn(
                  'flex items-start gap-2 rounded-md px-2 py-1.5 text-sm leading-relaxed transition-colors',
                  stateActive === __getSectionId(i) && 'font-bold text-ivy6',
                  stateActive !== __getSectionId(i) &&
                    'text-gray-500 hover:text-gray-950',
                )}
                href={`#${__getSectionId(i)}`}
                onClick={(e) => {
                  const id = __getSectionId(i)
                  const s = props.refSectionMap.current[id]

                  if (s) {
                    e.preventDefault()
                    window.history.replaceState(null, '', `#${id}`)
                    s.scrollIntoView({
                      behavior: window.matchMedia(
                        '(prefers-reduced-motion: reduce)',
                      ).matches
                        ? 'auto'
                        : 'smooth',
                      block: 'start',
                    })
                  }
                }}
                ref={(e) => {
                  refItemMap.current[__getSectionId(i)] = e
                }}
              >
                <Icon
                  className="mt-0.5 shrink-0"
                  name={__indexIconNames[i % __indexIconNames.length]}
                  size={16}
                />
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  )
}

const __SectionItem = (props: {
  id: string
  onSectionRef: (e: HTMLElement | null) => void
  section: ContentSection
}) => {
  const refContainer = useRef<HTMLElement>(null)

  useEffect(() => {
    const c = refContainer.current
    if (c) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (e) => {
            if (e.isIntersecting) {
              motion.to(c.children[0], 1.3, 'out', {
                opacity: 1,
                translateY: '0px',
              })
              await motion.delay(0.3)
              motion.to(c.children[1], 1.3, 'out', {
                opacity: 1,
                translateY: '0px',
              })
            }
          })
        },
        { threshold: 0.3 },
      )

      observer.observe(c)

      return () => observer.disconnect()
    }
  }, [])

  return (
    <section
      id={props.id}
      ref={(e) => {
        refContainer.current = e
        props.onSectionRef(e)
      }}
      className="translate-y-8 scroll-mt-24 transition-all duration-700 ease-out"
    >
      <h2
        className="mb-4 text-2xl font-bold"
        style={{ opacity: 0, transform: 'translateY(100px)' }}
      >
        {props.section.title}
      </h2>
      <div
        className="space-y-6 leading-loose text-gray-800 [&_a]:text-ivy6 [&_a]:underline [&_figure]:space-y-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-relaxed [&_img]:h-auto [&_img]:w-full [&_img]:rounded-lg [&_li]:ml-6 [&_ol]:list-decimal [&_p]:whitespace-pre-line [&_ul]:list-disc"
        dangerouslySetInnerHTML={{ __html: props.section.description }}
        style={{ opacity: 0, transform: 'translateY(100px)' }}
      />
    </section>
  )
}

const __getSectionId = (i: number) => `content-section-${i + 1}`

const __indexIconNames = [
  'sprout',
  'housePlug',
  'sun',
  'bookOpenText',
  'lightbulb',
] as const
