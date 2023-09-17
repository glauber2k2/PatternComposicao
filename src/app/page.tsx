'use client'

import { Form } from '@/components/Form'
import { useState } from 'react'
import { HiCursorClick } from 'react-icons/Hi'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  console.log(email, password, user)

  return (
    <div className='w-screen h-screen bg-black p-4'>
      <Form.Root>
        <Form.Input name='Email' onChange={(e) => setEmail(e.target.value)} />
        <Form.Input
          name='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Input name='User' onChange={(e) => setUser(e.target.value)} />
        <Form.Select
          onChange={(e) => setPassword(e.target.value)}
          name='Primeiro Select'
        >
          <option>a</option>
          <option>b</option>
        </Form.Select>
        <Form.Button color='accept' icon={HiCursorClick}>
          Enviar
        </Form.Button>
      </Form.Root>
    </div>
  )
}
