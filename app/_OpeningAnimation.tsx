'use client'

import { Icon } from '@/components/ui/icon'
import { useState, useEffect, useRef } from 'react'

export default function _OpeningAnimation({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkLoad = () => setLoading(false)
    console.log({ readyState: document.readyState })

    if (document.readyState === 'complete') {
      console.log('即時終了')
      // checkLoad()
    } else {
      console.log('読み込み完了を待つ')
      // window.addEventListener('load', checkLoad)
      return () => window.removeEventListener('load', checkLoad)
    }
  }, [])

  useEffect(() => {
    console.log('loading', loading)
  }, [loading])

  if (loading) {
    return (
      <>
        <div
          ref={containerRef}
          className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="relative">
            <img src="/ivyHomeText.svg" alt="Ivy Home" className="w-[200px]" />
            <img
              src="/Leaf.svg"
              alt="Ivy Home"
              className="absolute -top-[22.61px] -left-[20px] w-[42.4px]"
            />
            <Icon
              fill="skyblue"
              stroke="#0ea5e9"
              name="droplet"
              className="w-[15px] h-[20px] absolute top-[10px] -left-[24px] rounded-full animate-drop"
              style={{
                animationDelay: `0s`,
              }}
            />
          </div>
        </div>
        <style jsx global>{`
          @keyframes scale {
            0% {
              transform: scaleX(0.5) scaleY(0.5);
            }
            100% {
              transform: scaleX(1) scaleY(1);
            }
          }

          @keyframes drop {
            0% {
              transform: translateY(0px) scaleX(0.5) scaleY(0.5);
              opacity: 1;
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
          .animate-drop {
            animation: drop 2.5s ease-in infinite;
          }
        `}</style>
      </>
    )
  }

  return <>{children}</>
}
