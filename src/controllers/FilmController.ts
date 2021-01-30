/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Film from '../models/Film'

class FilmController {
  async index (req: Request, res: Response) {
    const repository = getRepository(Film)

    if (req.query.name) {
      const filmName = req.query.name
      const findFilmName = await repository.find({ where: { title: filmName } })
      return res.json(findFilmName)
    } else {
      const filmsAvailable = await repository.find({ where: { availability: 'available' } })

      return res.json(filmsAvailable)
    }
  }
}

export default FilmController
