/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import FilmStatus from '../enums/FilmStatus'
import Film from '../models/Film'

class FilmController {
  async index (req: Request, res: Response) {
    const repository = getRepository(Film)

    if (req.query.name) {
      const filmName = req.query.name
      const findFilmName = await repository.findOne({ where: { title: filmName } })

      if (!findFilmName) {
        return res.sendStatus(409)
      }

      return res.json(findFilmName)
    } else {
      const filmsAvailable = await repository.find({ where: { availability: FilmStatus.available } })

      return res.json(filmsAvailable)
    }
  }
}

export default FilmController
