import { ReactNode } from 'react'

interface FormRootProps {
  children: ReactNode
}

export default function FormRoot({ children }: FormRootProps) {
  return (
    <form
      action=''
      className='bg-zinc-800 w-full p-8 flex flex-col gap-2 text-zinc-200 '
    >
      <h1 className='text-lg font-bold'>Estudo de Pattern de Composicao</h1>
      {children}
    </form>
  )
}
