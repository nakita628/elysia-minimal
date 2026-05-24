import { Elysia, t } from 'elysia'

export const app = new Elysia({ prefix: '/api' }).get('/', () => ({ message: 'Hello from Elysia' }))
