import express from 'express'
import appRouter from './src/app.route.js'
import appMiddleware from './src/app.middleware.js'
import appConfig from './src/app.config.js'
//import products from './products.json' assert {type: "json"}

const app = express()

app.use(appConfig)
app.use(appMiddleware)
app.use(appRouter)

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            timestamp: new Date()
        }
    })
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
    console.log(`SEVER IS RUNNGIN ON PORT ${PORT}`)
})