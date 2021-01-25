/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../models/User'

class UserController {
  async create (req: Request, res: Response) {
    const repository = getRepository(User)
    const { name, email, password } = req.body

    const userExists = await repository.findOne({ where: { email } })

    if (userExists) {
      return res.sendStatus(409)
    }

    const userCreate = repository.create({ name, email, password })
    await repository.save(userCreate)

    return res.json(userCreate)
  }
}
export default UserController
