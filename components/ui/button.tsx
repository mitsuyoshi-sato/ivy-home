import { cn } from '../../lib/utils'

export const Button = ({
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  icon,
  iconPosition = 'left',
}: {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: React.ElementType
  iconPosition?: 'left' | 'right'
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={cn(
      'shadow-lg text-white group hover:bg-ivy6 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center rounded-full bg-ivy5 border border-ivy6 px-6 py-3 font-semibold text-sm lg:text-sm disabled:opacity-50 disabled:pointer-events-none',
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
)
