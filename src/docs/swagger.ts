
import { authUser } from './schemas/auth'
import { getFilm } from './schemas/films'
import { devolutionRent, postRent } from './schemas/rents'
import { createUsers, deletUser, findById, listUsers } from './schemas/users'

export default {
  openapi: '3.0.3',
  info: {
    title: 'Locadora API',
    version: 'v1'
  },
  paths: {
    '/users': {
      post: createUsers,
      get: listUsers
    },
    '/users/{id}': {
      get: findById,
      delete: deletUser
    },
    '/films?name=': {
      get: getFilm
    },
    '/auth': {
      post: authUser
    },
    '/rents': {
      post: postRent,
      security: [
        {
          bearerAuth: []
        }
      ]
    },
    '/rents/devolutions': {
      put: devolutionRent,
      security: [
        {
          bearerAuth: []
        }
      ]
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }

  }
}
