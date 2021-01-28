import { Router } from 'express'

import FilmController from '../controllers/FilmController'

const router = Router()
const filmController = new FilmController()

router.post('/films', filmController.create)

export default router
