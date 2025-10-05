'use client'

import { Icon } from '@/components/ui/icon'
import { useEffect, useRef } from 'react'
import { motion } from './motion'
import { useAnimation } from './AnimationContext'

export default function _OpeningAnimation({
  children,
}: {
  children: React.ReactNode
}) {
  const { refOpeningAnimation } = useAnimation()
  const refContainer = useRef<HTMLDivElement>(null)
  const refDrop = useRef<SVGSVGElement>(null)
  const refLeaf = useRef<SVGSVGElement>(null)
  const refLogo = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      const d = refDrop.current
      const l = refLeaf.current
      const logo = refLogo.current
      const c = refContainer.current

      if (d && l && logo && c) {
        await motion.delay(1.5)
        motion.set(d, { animation: 'none' })
        motion.set(l, { animation: 'shake 0.4s ease-in-out' })
        await motion.delay(1)
        motion.to(logo, 1.5, 'out', {
          translateX: `${112 - window.innerWidth / 2}px`,
          translateY: `${49 - window.innerHeight / 2}px`,
          scale: 0.55,
          transformOrigin: 'center center',
        })
        await motion.delay(1.3)
        motion.to(c, 1.3, 'out', { opacity: 0 })
        motion.set(c, { pointerEvents: 'none' })
        await motion.delay(1.3)
        motion.set(c, { display: 'none' })
        motion.set(l, { display: 'none' })
        refOpeningAnimation.current = true
      }
    })()
  }, [])
  return (
    <>
      <div
        ref={refContainer}
        className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500"
      >
        <div ref={refLogo} className="relative w-[200px]">
          <div>
            <img src="/logo-text.svg" alt="Ivy Home" className="w-full" />
          </div>
          <Icon
            ref={refLeaf}
            stroke="#166534"
            fill="#86EFAC"
            name="leaf"
            size={42.4}
            className="absolute -top-[21.61px] -left-[18px]"
            style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' }}
          />

          <Icon
            ref={refDrop}
            fill="skyblue"
            stroke="#0ea5e9"
            name="droplet"
            className="w-[15px] h-[30px] absolute top-[5px] -left-[23px] rounded-full"
            style={{
              animation: 'drop 2s ease-in infinite',
              animationDelay: `0s`,
              opacity: 0,
            }}
          />
        </div>
      </div>
      {children}
      <style jsx global>{`
        @keyframes shake {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(-15deg);
          }
          75% {
            transform: rotate(15deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes zoomOut {
          0% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          60% {
            transform: scale(2.5) translateY(-10%);
            opacity: 1;
          }
          100% {
            transform: scale(4) translateY(-50%);
            opacity: 0;
          }
        }

        @keyframes drop {
          0% {
            transform: translateY(0px) scaleX(0.5) scaleY(0.5);
          }
          35% {
            transform: translateY(0.5px) scaleX(1.2) scaleY(1.1);
            opacity: 1;
          }
          40% {
            transform: translateY(-5px) scaleX(1) scaleY(1);
            opacity: 1;
          }
          50% {
            transform: translateY(50px) scaleX(0.5) scaleY(0.5);
            opacity: 0;
          }
          100% {
            transform: translateY(50px) scaleX(0.5) scaleY(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
