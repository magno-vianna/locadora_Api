import { Router } from 'express'
import RentFilmController from '../controllers/RentFilmController'

import authMiddleware from '../middlewares/authMiddleware'

const router = Router()
const rentFilmController = new RentFilmController()

router.post('/rents', authMiddleware, rentFilmController.rent)
router.post('/rents/devolutions', authMiddleware, rentFilmController.devolution)

export default router
