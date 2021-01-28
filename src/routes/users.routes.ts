import { Router } from 'express'

import UserController from '../controllers/UserController'
import authMiddleware from '../middlewares/authMiddleware'

const router = Router()
const userController = new UserController()

router.post('/users', userController.create)
router.get('/users', userController.index)
router.get('/users/:id', userController.findById)
router.delete('/users/:id', userController.delete)

export default router
