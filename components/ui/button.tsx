import { cn } from '../../lib/utils'

export const Button = ({
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  icon,
  iconPosition = 'left',
  variant = 'primary',
}: {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: React.ElementType
  iconPosition?: 'left' | 'right'
  variant?: 'primary' | 'secondary'
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={cn(
      variant === 'primary' &&
        'bg-[#2f855a] text-white border border-[#2f855a] hover:bg-[#276749] hover:border-[#276749]',
      variant === 'secondary' &&
        'bg-white text-[#2f855a] border border-[#2f855a] hover:bg-ivy6 hover:text-white',
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
)
