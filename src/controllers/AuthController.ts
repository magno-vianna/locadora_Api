/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'

class AuthController {
  async authenticate (req: Request, res: Response) {
    const repository = getRepository(User)
    const { email, password } = req.body

    const user = await repository.findOne({ where: { email } })

    if (!user) {
      return res.sendStatus(401)
    }

    const isValidatePassword = await bcrypt.compare(password, user.password)

    if (!isValidatePassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    return res.json({
      user,
      token
    })
  }
}

export default AuthController
