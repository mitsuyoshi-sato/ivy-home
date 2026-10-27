'use client'

import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

import { motion } from '@/app/motion'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from '@/components/ui/drawer'

import { data } from '../works'

export const _WorkModalShell = (props: { children: ReactNode }) => {
  const router = useRouter()
  const params = useParams<{ slug: string }>()
  const refDialog = useRef<HTMLDialogElement>(null)
  const refClosing = useRef(false)
  const refPanel = useRef<HTMLDivElement>(null)
  const refScrollMobile = useRef<HTMLDivElement>(null)
  const [stateClosing, setClosing] = useState(false)
  const [stateMobile, setMobile] = useState<boolean | null>(null)
  const [stateDrawerOpen, setDrawerOpen] = useState(true)
  const indexItem = data.findIndex((w) => w.slug === params.slug)

  const onClose = async () => {
    if (!refClosing.current) {
      refClosing.current = true
      setClosing(true)

      const p = refPanel.current
      if (p && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        motion.to(p, 0.5, 'out', { opacity: '0' })
        await motion.delay(0.5)
      }

      router.back()
    }
  }

  useEffect(() => {
    const m = window.matchMedia('(max-width: 639px)')
    const onChange = (e: MediaQueryListEvent) => setMobile(e.matches)

    setMobile(m.matches)
    m.addEventListener('change', onChange)

    return () => m.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const d = refDialog.current
    const p = refPanel.current

    if (stateMobile === false && d && p) {
      if (!d.open) {
        d.showModal()
      }

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        motion.set(p, { opacity: '0', translateY: '50px', scale: '1' })
        motion.to(p, 1, 'out', {
          opacity: '1',
          translateY: '0px',
          scale: '1',
        })
      }
    }

    return () => {
      if (stateMobile === false) {
        if (d?.open) {
          d.close()
        }
      }
    }
  }, [stateMobile])

  useEffect(() => {
    const overflowBody = document.body.style.overflow
    const overscrollBody = document.body.style.overscrollBehavior
    const overflowRoot = document.documentElement.style.overflow
    const overscrollRoot = document.documentElement.style.overscrollBehavior

    if (stateMobile === false || (stateMobile === true && stateDrawerOpen)) {
      document.body.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.overscrollBehavior = 'none'
    }

    return () => {
      document.body.style.overflow = overflowBody
      document.body.style.overscrollBehavior = overscrollBody
      document.documentElement.style.overflow = overflowRoot
      document.documentElement.style.overscrollBehavior = overscrollRoot
    }
  }, [stateDrawerOpen, stateMobile])

  useEffect(() => {
    const p = refPanel.current
    const s = refScrollMobile.current

    if (p) {
      p.scrollTop = 0
    }
    if (s) {
      s.scrollTop = 0
    }
  }, [params.slug])

  return (
    <>
      {stateMobile === true && (
        <Drawer
          open={stateDrawerOpen}
          direction="bottom"
          onOpenChange={(o) => {
            setDrawerOpen(o)
            if (!o) {
              router.back()
            }
          }}
        >
          <DrawerContent className="h-[92dvh] bg-[#f8f9f5]">
            <DrawerTitle className="sr-only">施工事例の詳細</DrawerTitle>
            <DrawerDescription className="sr-only">
              施工事例の内容を表示しています
            </DrawerDescription>
            <div
              ref={refScrollMobile}
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
            >
              <__Content
                itemNext={data[indexItem + 1] ?? null}
                itemPrevious={data[indexItem - 1] ?? null}
                onClose={onClose}
              >
                {props.children}
              </__Content>
            </div>
          </DrawerContent>
        </Drawer>
      )}
      {stateMobile === false && (
        <dialog
          ref={refDialog}
          aria-label="施工事例の詳細"
          className="work-modal m-auto max-h-[calc(100dvh-40px)] w-[calc(100%-40px)] max-w-4xl rounded-2xl border-0 bg-transparent p-0 text-left shadow-none backdrop:bg-black/70"
          data-closing={stateClosing}
          onCancel={(e) => {
            e.preventDefault()
            void onClose()
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              void onClose()
            }
          }}
        >
          <div
            ref={refPanel}
            className="max-h-[calc(100dvh-40px)] overflow-y-auto overscroll-contain rounded-2xl bg-[#f8f9f5] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
          >
            <__Content
              itemNext={data[indexItem + 1] ?? null}
              itemPrevious={data[indexItem - 1] ?? null}
              onClose={onClose}
            >
              {props.children}
            </__Content>
          </div>
        </dialog>
      )}
    </>
  )
}

const __Content = (props: {
  children: ReactNode
  itemNext: { slug: string; title: string } | null
  itemPrevious: { slug: string; title: string } | null
  onClose: () => void
}) => (
  <div className="relative">
    <div className="sticky top-4 z-10 ml-auto mr-4 h-0 w-11 sm:top-6 sm:mr-6">
      <button
        autoFocus
        aria-label="施工事例の詳細を閉じる"
        className="flex size-11 items-center justify-center rounded-full border border-ivy8/15 bg-white/30 text-ivy8 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivy8"
        onClick={props.onClose}
        type="button"
      >
        <X aria-hidden="true" className="size-5" />
      </button>
    </div>
    {props.children}
    <div className="border-t border-[#e4e9df] bg-white px-5 py-6 sm:px-10">
      {(props.itemPrevious || props.itemNext) && (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
          {props.itemPrevious && (
            <Link
              aria-label={`前の施工事例：${props.itemPrevious.title}`}
              className="group inline-flex min-h-11 max-w-sm items-center gap-3 text-ivy8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy8"
              href={`/solar-battery/works/${props.itemPrevious.slug}`}
              replace
              scroll={false}
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform group-hover:-translate-x-1"
              />
              <span>
                <span className="block text-[10px] font-semibold tracking-[0.16em] text-ivy7">
                  PREV WORKS
                </span>
                <span className="mt-1 block text-sm font-semibold leading-6 underline-offset-4 group-hover:underline">
                  {props.itemPrevious.title}
                </span>
              </span>
            </Link>
          )}
          {props.itemNext && (
            <Link
              aria-label={`次の施工事例：${props.itemNext.title}`}
              className="group ml-auto inline-flex min-h-11 max-w-sm items-center gap-3 text-right text-ivy8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy8 sm:col-start-2"
              href={`/solar-battery/works/${props.itemNext.slug}`}
              replace
              scroll={false}
            >
              <span>
                <span className="block text-[10px] font-semibold tracking-[0.16em] text-ivy7">
                  NEXT WORKS
                </span>
                <span className="mt-1 block text-sm font-semibold leading-6 underline-offset-4 group-hover:underline">
                  {props.itemNext.title}
                </span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>
      )}
    </div>
  </div>
)
