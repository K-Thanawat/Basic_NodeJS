import express from 'express'
import userController from './controllers/user.controller.js'

const userRouter = express.Router()

userRouter.post('/', userController.addUser)
userRouter.get('/', userController.getUserall)

export default userRouter