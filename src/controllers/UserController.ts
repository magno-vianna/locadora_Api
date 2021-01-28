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

    const userCreate = repository.create({ name, email, password, blocked: false })
    await repository.save(userCreate)

    return res.status(201).json(userCreate)
  }

  async index (req: Request, res: Response) {
    const repository = getRepository(User)

    const userListAll = await repository.find()

    res.json(userListAll)
  }

  async findById (req: Request, res: Response) {
    const repository = getRepository(User)

    const userId = req.params.id

    const userFindId = await repository.findByIds(userId)

    if (userFindId.length === 0) {
      return res.sendStatus(409)
    }

    return res.status(200).json(userFindId)
  }

  async delete (req: Request, res: Response) {
    const repository = getRepository(User)

    const userId = req.params.id

    const deleteUser = await repository.delete(userId)

    return res.status(204).json(deleteUser)
  }
}
export default UserController
