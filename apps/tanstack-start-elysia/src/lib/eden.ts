import { treaty } from '@elysia/eden'

import { app } from '@/server'

const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173'

export const api = treaty<typeof app>(origin).api
