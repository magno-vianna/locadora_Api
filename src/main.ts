import 'reflect-metadata'

import express from 'express'

import './database/connect'

import routesUser from './routes/users.routes'
import routesAuth from './routes/auth.routes'

const app = express()

app.use(express.json())
app.use(routesUser)
app.use(routesAuth)

app.listen(3333, () => {
  console.log('🚀 Server started at http://localhost:3333')
})
