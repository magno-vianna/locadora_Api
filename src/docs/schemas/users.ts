
export const createUsers = {
  tags: ['Users'],
  summary: 'User creation',
  description: 'Creating users on the system',

  consumes: 'application/json',
  parameters: [
    {
      in: 'body',
      name: 'User',
      description: 'The user to create',
      schema: {
        type: 'object',
        required: 'userName',
        properties: {
          name: {
            type: 'string',
            example: 'Magno Vianna'
          },
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
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: {
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
              password: {
                type: 'string',
                example: '$2a$08$NYL9XsN.jop7GhB0x0E5quI.q2yhjxnaSOvcHJdAaunVniTXwfbGW'
              },
              blocked: {
                type: 'boolean',
                example: 'false'
              }

            }
          }
        }
      }
    },
    409: {
      description: 'Conflict'
    }
  }
}
export const listUsers = {
  tags: ['Users'],
  summary: 'List Users',
  description: 'List all users saved in the database',

  responses: {
    200: {
      description: 'Ok',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                  example: 0
                },
                name: {
                  type: 'string',
                  example: 'Magno Vianna'
                },
                email: {
                  type: 'string',
                  example: 'magno.vianna@gmail.com'
                },
                password: {
                  type: 'string',
                  example: '$2a$08$NYL9XsN.jop7GhB0x0E5quI.q2yhjxnaSOvcHJdAaunVniTXwfbGW'
                },
                blocked: {
                  type: 'boolean',
                  example: 'false'
                }
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Not Found'
    }
  }
}

export const findById = {
  tags: ['Users'],
  summary: 'Find user by ID',
  description: 'Returns a single user',

  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of user to return',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    200: {
      description: 'Ok',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                example: 0
              },
              name: {
                type: 'string',
                example: 'Magno Vianna'
              },
              email: {
                type: 'string',
                example: 'magno.vianna@gmail.com'
              },
              password: {
                type: 'string',
                example: '$2a$08$NYL9XsN.jop7GhB0x0E5quI.q2yhjxnaSOvcHJdAaunVniTXwfbGW'
              },
              blocked: {
                type: 'boolean',
                example: 'false'
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Not Found'
    }
  }
}
export const deletUser = {
  tags: ['Users'],
  summary: 'Delete user by ID',
  description: 'Delete',

  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of user to return',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    204: {
      description: 'No Contet',
      content: {
        'application/json': {

        }
      }
    },
    404: {
      description: 'Not Found'
    }
  }
}
