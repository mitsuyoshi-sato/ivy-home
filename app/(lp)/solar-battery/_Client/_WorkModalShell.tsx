'use client'

import { ArrowLeft, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

import { motion } from '@/app/motion'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from '@/components/ui/drawer'

export const _WorkModalShell = (props: { children: ReactNode }) => {
  const router = useRouter()
  const refDialog = useRef<HTMLDialogElement>(null)
  const refPanel = useRef<HTMLDivElement>(null)
  const [stateMobile, setMobile] = useState<boolean | null>(null)
  const [stateDrawerOpen, setDrawerOpen] = useState(true)

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
    const overflow = document.body.style.overflow

    if (stateMobile === false && d && p) {
      if (!d.open) {
        d.showModal()
      }
      document.body.style.overflow = 'hidden'

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        motion.set(p, { opacity: '0', translateY: '16px', scale: '0.98' })
        motion.to(p, 0.35, 'out', {
          opacity: '1',
          translateY: '0px',
          scale: '1',
        })
      }
    }

    return () => {
      if (stateMobile === false) {
        document.body.style.overflow = overflow
        if (d?.open) {
          d.close()
        }
      }
    }
  }, [stateMobile])

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
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <__Content onClose={() => router.back()}>
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
          className="m-auto max-h-[calc(100dvh-40px)] w-[calc(100%-40px)] max-w-4xl rounded-2xl border-0 bg-transparent p-0 text-left shadow-none backdrop:bg-black/70"
          onCancel={(e) => {
            e.preventDefault()
            router.back()
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              router.back()
            }
          }}
        >
          <div
            ref={refPanel}
            className="max-h-[calc(100dvh-40px)] overflow-y-auto rounded-2xl bg-[#f8f9f5] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
          >
            <__Content onClose={() => router.back()}>
              {props.children}
            </__Content>
          </div>
        </dialog>
      )}
    </>
  )
}

const __Content = (props: { children: ReactNode; onClose: () => void }) => (
  <>
    <div className="sticky top-0 z-10 flex justify-end border-b border-[#e4e9df] bg-white/95 px-5 py-3 backdrop-blur-sm sm:px-8">
      <button
        autoFocus
        aria-label="施工事例の詳細を閉じる"
        className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-xs font-semibold text-ivy8 transition-colors hover:bg-[#eef2ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivy8"
        onClick={props.onClose}
        type="button"
      >
        閉じる
        <X aria-hidden="true" className="size-4" />
      </button>
    </div>
    {props.children}
    <div className="border-t border-[#e4e9df] bg-white px-5 py-6 sm:px-10">
      <button
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ivy8 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy8"
        onClick={props.onClose}
        type="button"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        施工事例一覧に戻る
      </button>
    </div>
  </>
)
