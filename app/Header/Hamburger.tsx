'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { motion } from '../motion'

export const Hamburger = (props: {
  items: {
    href: string
    label: string
    subs?: { href: string; label: string; icon?: string }[]
  }[]
  refBackground: React.RefObject<HTMLDivElement | null>
}) => {
  const [stateMounted, setMounted] = useState(false)
  const [stateAnimating, setAnimating] = useState(false)
  const refMenu = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const refOpen = useRef(false)
  const refTextContainer = useRef<HTMLDivElement>(null)
  const refHamburger = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const closeMenu = async () => {
    if (stateAnimating || !refOpen.current) return
    setAnimating(true)

    const m = refMenu.current
    const el0 = refHamburger.current?.children[0]
    const el1 = refHamburger.current?.children[1]
    const el2 = refHamburger.current?.children[2]
    const tc = refTextContainer.current
    const bg = props.refBackground.current
    if (m && el0 && el1 && el2 && tc && bg) {
      motion.to(el0, 0.3, 'out', {
        rotate: '0deg',
        translateY: '-6px',
      })
      motion.to(el1, 0.3, 'out', {
        opacity: '1',
      })
      motion.to(el2, 0.3, 'out', {
        rotate: '0deg',
        translateY: '6px',
      })
      motion.to(m, 1.8, 'out', {
        opacity: '0',
        filter: 'blur(10px)',
      })
      motion.to(bg, 1.8, 'out', {
        opacity: '1',
      })
      await motion.delay(0.5)

      motion.set(m, { pointerEvents: 'none' })
      await motion.delay(1.3)
      motion.set(m, {
        filter: 'blur(0px)',
        height: '0px',
        transformOrigin: 'bottom',
      })
      await motion.delay(0.5)
      motion.set(m, { pointerEvents: 'auto' })
      motion.set(tc, {
        opacity: '0',
      })
      refOpen.current = false
      setAnimating(false)
    }
  }

  return (
    <>
      <button
        ref={refHamburger}
        className="relative z-[60] mr-3 size-5 md:hidden"
        disabled={stateAnimating}
        onClick={async () => {
          if (stateAnimating) return
          setAnimating(true)
          const m = refMenu.current
          const el0 = refHamburger.current?.children[0]
          const el1 = refHamburger.current?.children[1]
          const el2 = refHamburger.current?.children[2]
          const tc = refTextContainer.current
          const bg = props.refBackground.current
          if (m && el0 && el1 && el2 && tc && bg) {
            if (refOpen.current === false) {
              motion.to(el0, 0.3, 'out', {
                rotate: '45deg',
                translateY: '0px',
              })
              motion.to(el1, 0.3, 'out', {
                opacity: '0',
              })
              motion.to(el2, 0.3, 'out', {
                rotate: '-45deg',
                translateY: '0px',
              })
              motion.set(m, {
                opacity: '1',
              })
              motion.to(m, 0.8, 'out', {
                height: '100vh',
                transformOrigin: 'bottom',
              })
              motion.to(bg, 0.5, 'inout', {
                opacity: '0',
              })
              await motion.delay(0.7)
              motion.to(tc, 1.5, 'out', {
                opacity: '1',
              })
              refOpen.current = true
              setAnimating(false)
            } else if (refOpen.current === true) {
              await closeMenu()
            }
          }
        }}
      >
        <div
          className="absolute inset-y-0 right-0 my-auto h-px w-full origin-center bg-black"
          style={{
            transform: 'translateY(-6px)',
          }}
        />
        <div className="absolute inset-y-0 right-0 my-auto h-px w-full bg-black" />
        <div
          className="absolute inset-y-0 right-0 my-auto h-px w-full origin-center bg-black duration-300"
          style={{
            transform: 'translateY(6px)',
          }}
        />
      </button>
      {stateMounted &&
        createPortal(
          <div
            ref={refMenu}
            className="fixed inset-x-0 bottom-0 z-40 flex w-full items-center gap-16 bg-white/70 backdrop-blur-md backdrop-saturate-150 md:hidden"
            style={{
              height: '0px',
              opacity: '0',
              pointerEvents: 'auto',
            }}
          >
            <div className="h-full w-[150px]">
              <img
                className="size-full object-cover"
                src={`/images/hero-${pathname === '/' ? 'home' : pathname.split('/')[1]}.jpg`}
              />
            </div>
            <div
              ref={refTextContainer}
              className="relative flex h-3/5 flex-1 flex-col gap-6"
              style={{
                opacity: '0',
              }}
            >
              {props.items.map((item) => (
                <Link
                  key={item.href}
                  className="flex flex-col"
                  href={item.href}
                  onClick={closeMenu}
                >
                  <div className="text-xs text-ivy5">
                    {item.href === '/' ? 'Home' : item.href.split('/')[1]}
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
