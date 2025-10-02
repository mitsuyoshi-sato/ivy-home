'use client'

import { Icon } from '@/components/ui/icon'
import { useState, useEffect, useRef } from 'react'
import { motion } from './motion'

export default function _OpeningAnimation({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const refDrop = useRef<SVGSVGElement>(null)
  const refLeaf = useRef<SVGSVGElement>(null)
  useEffect(() => {
    ;(async () => {
      const d = refDrop.current
      const l = refLeaf.current
      const checkLoad = () => setLoading(false)
      if (d && l) {
        if (document.readyState === 'complete') {
          await motion.delay(1.5)
          console.log('3秒経過')
          motion.set(d, { animation: 'none' })
          motion.set(l, { animation: 'shake 0.4s ease-in-out' })
          await motion.delay(1.5)
          checkLoad()
        } else {
          console.log('読み込み完了を待つ')
          window.addEventListener('load', checkLoad)
          return () => window.removeEventListener('load', checkLoad)
        }
      }
    })()
  }, [])

  useEffect(() => {
    console.log('loading', loading)
  }, [loading])

  if (loading) {
    return (
      <>
        <div
          ref={containerRef}
          className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500"
        >
          <div className="relative">
            <img src="/ivyHomeText.svg" alt="Ivy Home" className="w-[200px]" />
            <Icon
              ref={refLeaf}
              stroke="#166534"
              fill="#86EFAC"
              name="leaf"
              size={42.4}
              className="absolute -top-[22.61px] -left-[18px]"
              style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' }}
            />
            <Icon
              ref={refDrop}
              fill="skyblue"
              stroke="#0ea5e9"
              name="droplet"
              className="w-[15px] h-[20px] absolute top-[10px] -left-[23px] rounded-full"
              style={{
                animation: 'drop 2s ease-in infinite',
                animationDelay: `0s`,
                opacity: 0,
              }}
            />
          </div>
        </div>
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

  return <>{children}</>
}
