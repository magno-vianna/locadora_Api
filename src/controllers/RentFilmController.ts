/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import FilmStatus from '../enums/FilmStatus'
import Film from '../models/Film'
import RentRegisterUserFilm from '../models/RentRegisterUserFilm'
import jwt from 'jsonwebtoken'

class RentFilmController {
  async rent (req: Request, res: Response) {
    const repositoryFilm = getRepository(Film)
    const repository = getRepository(RentRegisterUserFilm)

    const { title } = req.body

    const availabilityFilm = await repositoryFilm.findByIds(title)

    if (availabilityFilm[0].availability === FilmStatus.unavailable) {
      return res.sendStatus(409)
    }

    interface TokenPayload{
      id: number
      iat: number
      exp: number

    }

    const { authorization } = req.headers
    const token = authorization.replace('Bearer', '').trim()
    const user = jwt.decode(token)

    const { id } = user as TokenPayload

    const rentDate = new Date()
    const rentEndDate = rentDate.setHours(rentDate.getHours() + 24)

    const leaseFilm = repository.create({ idNameUser: id, idTitle: title, leaseStartAt: Date(), leaseEndAt: new Date(rentEndDate) })
    await repository.save(leaseFilm)

    await repositoryFilm.update(title, { availability: FilmStatus.unavailable })

    return res.status(201).json(leaseFilm)
  }
}

export default RentFilmController
