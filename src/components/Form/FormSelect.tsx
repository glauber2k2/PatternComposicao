import { ReactNode, SelectHTMLAttributes } from 'react'

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  children: ReactNode
}

export default function FormSelect({ name, children, ...rest }: InputProps) {
  return (
    <label
      htmlFor={name}
      className='flex flex-col mt-2 text-base font-semibold'
    >
      {name}:
      <select
        {...rest}
        className='bg-zinc-700 p-2 text-zinc-200 outline-none font-medium mt-2 rounded w-full'
      >
        {children}
      </select>
    </label>
  )
}
