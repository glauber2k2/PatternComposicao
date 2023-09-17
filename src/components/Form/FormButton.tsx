import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: 'submit' | 'button'
  icon?: ElementType
  size?: 'small' | 'base' | 'large'
  color?: 'neutral' | 'accept' | 'reject'
}

export default function FormButton({
  children,
  type = 'submit',
  icon: Icon,
  size = 'base',
  color = 'neutral',
  ...rest
}: FormButtonProps) {
  const sizeClasses = {
    small: 'p-1 text-sm',
    base: 'p-2 text-base',
    large: 'p-4 text-lg',
  }

  const colorClasses = {
    neutral: 'bg-zinc-500',
    accept: 'bg-green-500',
    reject: 'bg-red-500',
  }

  const buttonClasses = `font-bold rounded mt-4  flex items-center justify-center gap-2 ${sizeClasses[size]} ${colorClasses[color]}`

  return (
    <button {...rest} type={type} className={buttonClasses}>
      {Icon && <Icon className='w-6 h-6' />}
      {children}
    </button>
  )
}
