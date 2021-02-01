export const getFilm = {
  tags: ['Films'],
  summary: 'Search film by query string',
  description: 'Search for a movie by query string if the parameter exists and if it does not, return all available films',

  parameters: [
    {
      in: 'query',
      name: 'name',
      description: 'Returns the movie passed in the query string',
      required: true,
      type: 'string',
      example: 'Soul'
    }
  ],
  responses: {
    201: {
      description: 'Created',
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
                id_director: {
                  type: 'integer',
                  example: 1
                },
                title: {
                  type: 'string',
                  example: 'Velocidade Máxima'
                },
                leaseCost: {
                  type: 'string',
                  example: '5.40'
                },
                id_genre: {
                  type: 'integer',
                  example: 3
                },
                availability: {
                  type: 'string',
                  example: 'available'
                }
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
