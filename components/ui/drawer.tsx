'use client'

import { cx } from 'class-variance-authority'
import type { ReactNode } from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

export const Drawer = DrawerPrimitive.Root
export const DrawerTitle = DrawerPrimitive.Title
export const DrawerDescription = DrawerPrimitive.Description

export const DrawerContent = (props: {
  children: ReactNode
  className?: string
}) => (
  <DrawerPrimitive.Portal>
    <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70" />
    <DrawerPrimitive.Content
      className={cx(
        'fixed inset-x-0 bottom-0 z-50 flex max-h-[calc(100dvh-2rem)] flex-col rounded-t-2xl bg-white outline-none',
        props.className,
      )}
    >
      <div
        aria-hidden="true"
        className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-gray-300"
      />
      {props.children}
    </DrawerPrimitive.Content>
  </DrawerPrimitive.Portal>
)
