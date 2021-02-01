export const postRent = {
  tags: ['Rent'],
  summary: '',
  description: 'Returns the creation of a film rental',
  operationId: 'createRent',

  parameters: [
    {
      name: 'titleId',
      in: 'body',
      description: 'ID of tile',
      required: true,
      type: 'string',
      example: 'title: 3'

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
              idNameUser: {
                type: 'integer',
                example: 2
              },
              idTitle: {
                type: 'string',
                example: 1
              },
              leaseStartAt: {
                type: 'string',
                example: '2021-02-01T14:12:49.519Z'
              },
              leaseEndAt: {
                type: 'string',
                example: '2021-02-02T14:12:49.519Z'
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

export const devolutionRent = {
  tags: ['Rent'],
  summary: '',
  description: 'When returning the film, update the availability field to make it available in the Films table and insert the delivery time in the RentRegisterUserFilm table',
  operationId: 'Update',

  parameters: [
    {
      name: 'titleId',
      in: 'body',
      description: 'ID of tile to return',
      required: true,
      type: 'string',
      example: 'title: 3'

    }
  ],
  responses: {
    201: {
      description: 'Created'

    },
    409: {
      description: 'Conflict'
    }
  }
}
