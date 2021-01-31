import { Router } from 'express'

import UserController from '../controllers/UserController'
import authMiddleware from '../middlewares/authMiddleware'

const router = Router()
const userController = new UserController()

router.post('/users', userController.create)
router.get('/users', authMiddleware, userController.index)
router.get('/users/:id', authMiddleware, userController.findById)
router.delete('/users/:id', authMiddleware, userController.delete)

export default router
