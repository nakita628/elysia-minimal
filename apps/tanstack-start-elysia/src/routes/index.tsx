import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { api } from '@/lib/eden'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [message, setMessage] = useState<string | undefined>(undefined)

  const onClick = async () => {
    const { data, error } = await api.get()
    if (error || !data.message) {
      setMessage('Error: Failed to fetch')
    }
    setMessage(data?.message)
  }

  return (
    <main>
      <h1>Tanstack Start Elysia</h1>
      <button onClick={onClick}>GET /api</button>
      <p>{message}</p>
    </main>
  )
}
