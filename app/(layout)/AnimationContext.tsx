'use client'

import { createContext, ReactNode, useContext, useRef } from 'react'

type AnimationContextType = {
  refOpeningAnimation: React.RefObject<boolean>
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined,
)

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const refOpeningAnimation = useRef(false)

  return (
    <AnimationContext.Provider value={{ refOpeningAnimation }}>
      {children}
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
