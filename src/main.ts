import 'reflect-metadata'
import './database/connect'

import express from 'express'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './docs/swagger'

import routesUsers from './routes/users.routes'
import routesAuths from './routes/auth.routes'
import routesRents from './routes/rents.routes'
import routesFilms from './routes/films.routes'

const app = express()

app.use(express.json())

app.use(routesUsers)
app.use(routesAuths)
app.use(routesRents)
app.use(routesFilms)

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3333, () => {
  console.log('🚀 Server started at http://localhost:3333')
})
