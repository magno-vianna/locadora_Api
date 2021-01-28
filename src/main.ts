import 'reflect-metadata'

import express from 'express'

import './database/connect'

import routesUsers from './routes/users.routes'
import routesAuths from './routes/auth.routes'
import routesFilms from './routes/films.routes'

const app = express()

app.use(express.json())

app.use(routesUsers)
app.use(routesAuths)
app.use(routesFilms)

app.listen(3333, () => {
  console.log('🚀 Server started at http://localhost:3333')
})
