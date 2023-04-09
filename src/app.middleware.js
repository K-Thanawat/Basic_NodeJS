import express from 'express'
import cors from 'cors'
import requestInfo from './middleware/request-info.middleware.js'
import humpsMiddleware from './middleware/humps.middleware.js'

const appMiddleware = express()

appMiddleware.use(express.urlencoded({ extended: true}))
appMiddleware.use(express.json())
appMiddleware.use(cors())
appMiddleware.use(requestInfo())
appMiddleware.use(humpsMiddleware())

export default appMiddleware