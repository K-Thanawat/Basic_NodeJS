import express from "express";
import productRouter from "./modules/product/product.route.js";
import userRouter from "./modules/user/user.route.js";

const AppRouter = express()

// AppRouter.use('/product',(req, res, next) => {
//     console.log(`Timestamp: ${new Date()}`)
//     next()
// }, productRouter)
AppRouter.use('/product', productRouter)
AppRouter.use('/user', userRouter)

export default AppRouter

