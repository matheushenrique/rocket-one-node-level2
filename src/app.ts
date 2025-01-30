import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

app.register(fastifyCookie)

app.addHook('preHandler', async (req) => {
  console.log(`[${req.method}]: ${req.url}`)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
