'use client'

import { useState } from 'react'

import { api } from '@/lib/eden'

export default function Page() {
  const [message, setMessage] = useState<string | undefined>(undefined)

  const onSubmit = async () => {
    const { data, error } = await api.get()
    if (error) {
      setMessage('Error: Failed to fetch')
    }
    setMessage(data?.message)
  }
  return (
    <>
      <h1>Next Elysia</h1>
      <button type="button" onClick={onSubmit}>
        Get Message
      </button>
      <h1>{message}</h1>
    </>
  )
}
