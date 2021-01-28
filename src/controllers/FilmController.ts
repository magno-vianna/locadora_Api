/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'

class FilmController {
  create (req: Request, res: Response) {
    return res.send('ok')
  }
}

export default FilmController
