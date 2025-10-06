'use client'

import { cn } from '@/lib/utils'
import { motion } from '../motion'
import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Hamburger = (props: {
  items: {
    href: string
    label: string
    subs?: { href: string; label: string; icon?: string }[]
  }[]
}) => {
  const [stateMounted, setMounted] = useState(false)
  const [stateAnimating, setAnimating] = useState(false)
  const refMenu = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const refOpen = useRef(false)
  const refTextContainer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div
        className={cn(
          'relative z-[60] mr-3 h-5 w-5 md:hidden',
          stateAnimating && 'pointer-events-none',
        )}
        onClick={async (e) => {
          if (stateAnimating) return

          setAnimating(true)
          const m = refMenu.current
          const el0 = e.currentTarget.children[0]
          const el1 = e.currentTarget.children[1]
          const el2 = e.currentTarget.children[2]
          const tc = refTextContainer.current
          if (m && el0 && el1 && el2 && tc) {
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
              motion.to(m, 0.5, 'inout', {
                height: '100vh',
                transformOrigin: 'bottom',
              })
              await motion.delay(0.7)
              motion.to(tc, 1.5, 'out', {
                opacity: '1',
              })
              refOpen.current = true
              setAnimating(false)
            } else if (refOpen.current === true) {
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
              await motion.to(m, 1.8, 'out', {
                opacity: '0',
                filter: 'blur(10px)',
              })
              motion.set(m, {
                filter: 'blur(0px)',
                height: '0px',
                transformOrigin: 'bottom',
              })
              motion.set(tc, {
                opacity: '0',
              })
              refOpen.current = false
              setAnimating(false)
            }
          }
        }}
      >
        <div
          style={{
            transform: 'translateY(-6px)',
          }}
          className="absolute inset-y-0 right-0 my-auto h-[1px] origin-center bg-black w-full"
        />
        <div className="absolute inset-y-0 right-0 my-auto h-[1px] w-full bg-black" />
        <div
          style={{
            transform: 'translateY(6px)',
          }}
          className="absolute inset-y-0 right-0 my-auto h-[1px] origin-center bg-black duration-300 w-full"
        />
      </div>
      {stateMounted &&
        createPortal(
          <div
            ref={refMenu}
            style={{
              height: '0px',
              opacity: '0',
            }}
            className="fixed bottom-0 left-0 right-0 z-40 w-full bg-white/70 flex items-center gap-16 backdrop-blur-md backdrop-saturate-150"
          >
            <div className="w-[150px] h-full">
              <img
                src={`/hero-${pathname === '/' ? 'home' : pathname.split('/')[1]}.jpg`}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              ref={refTextContainer}
              style={{
                opacity: '0',
              }}
              className="flex-1 relative h-[60%] flex flex-col gap-6"
            >
              {props.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col"
                >
                  <div className="text-gray-500 text-xs">
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
