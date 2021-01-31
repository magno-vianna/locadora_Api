
import { Router } from 'express'
import FilmController from '../controllers/FilmController'
import authMiddleware from '../middlewares/authMiddleware'

const router = Router()
const filmController = new FilmController()

router.get('/films', authMiddleware, filmController.index)

export default router
