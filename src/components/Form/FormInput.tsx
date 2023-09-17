import { InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export default function FormInput({ name, ...rest }: InputProps) {
  const [data, setData] = useState()

  return (
    <label htmlFor='' className='flex flex-col mt-2 text-base font-semibold'>
      {name}:
      <input
        {...rest}
        type='text'
        className='bg-zinc-700 p-2 text-zinc-200 outline-none font-medium mt-2 rounded w-full'
      />
    </label>
  )
}
