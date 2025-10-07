'use client'

import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export const Button = forwardRef<
  HTMLButtonElement,
  {
    children: React.ReactNode
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    icon?: React.ElementType
    iconPosition?: 'left' | 'right'
    variant?: 'primary' | 'secondary' | 'ghost'
  }
>(
  (
    {
      children,
      className,
      onClick,
      type = 'button',
      disabled,
      icon,
      iconPosition = 'left',
      variant = 'primary',
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        variant === 'primary' &&
          'bg-ivy6 text-white border border-ivy7 hover:bg-ivy7',
        variant === 'secondary' &&
          'bg-white text-ivy6 border border-ivy7 hover:bg-ivy6 hover:text-white',
        variant === 'ghost' && 'bg-transparent text-gray-700 hover:bg-gray-100',
        'group shadow-lg text-sm rounded-full px-5 py-3 font-bold inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
        className,
      )}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2 inline-flex items-center group-hover:translate-x-1 transition-all duration-200">
          {(() => {
            const Icon = icon
            return <Icon className="h-4 w-4" aria-hidden="true" />
          })()}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2 inline-flex items-center group-hover:translate-x-1 transition-all duration-200">
          {(() => {
            const Icon = icon
            return <Icon className="h-4 w-4" aria-hidden="true" />
          })()}
        </span>
      )}
    </button>
  ),
)

Button.displayName = 'Button'
