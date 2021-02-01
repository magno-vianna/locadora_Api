export const authUser = {
  tags: ['Authenticate'],
  summary: 'User Authenticate',
  description: 'User authentication route',

  consumes: 'application/json',
  parameters: [
    {
      in: 'body',
      name: 'User',
      description: 'User Authenticate',
      schema: {
        type: 'object',
        required: 'auth',
        properties: {
          email: {
            type: 'string',
            example: 'magno.vianna@gmail.com'

          },
          password: {
            type: 'string',
            example: '123456'
          }
        }
      }
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              user: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                    example: 1
                  },
                  name: {
                    type: 'string',
                    example: 'Magno Vianna'
                  },
                  email: {
                    type: 'string',
                    example: 'magno.vianna@gmail.com'
                  },
                  blocked: {
                    type: 'boolean',
                    example: 'false'
                  }
                }
              },
              token: {
                type: 'string',
                example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEyMjE3NjM0LCJleHAiOjE2MTIzMDQwMzR9.qXm1MZOm4YDbIbJfnORxPjiDdY27Razgs-7aS0rcA1I'
              }
            }
          }
        }
      }
    },
    401: {
      description: 'Unauthorized'
    }
  }
}
