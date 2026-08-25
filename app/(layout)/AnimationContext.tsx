'use client'

import { createContext, ReactNode, useContext, useRef } from 'react'

type AnimationContextType = {
  refOpeningAnimation: React.RefObject<boolean>
  refSkipHeroAnimation: React.RefObject<string | null>
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined,
)

export const AnimationProvider = (props: { children: ReactNode }) => {
  const refOpeningAnimation = useRef(false)
  const refSkipHeroAnimation = useRef<string | null>(null)

  return (
    <AnimationContext.Provider
      value={{ refOpeningAnimation, refSkipHeroAnimation }}
    >
      {props.children}
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}
