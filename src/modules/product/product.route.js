import express from 'express'
//import products from '../../common/mock-data/products.json' assert {type: "json"}
import productController from './controller/product.controller.js'
import { createValidator } from 'express-joi-validation'
import { createProductDbo } from './dbo/create-product.dbo.js'
import { updateProductDbo } from './dbo/update-product.dbo.js'
// import { productParamsDbo } from './dbo/update-product.dbo.js'

const productRouter = express.Router()
const validator = createValidator({})

// productRouter.get('/', (req, res) => {
//     res.status(200).json({
//         success: true,
//         data: products
//     })
// })
productRouter.get('/', productController.getProduct)

productRouter.get('/:id', productController.getProductByID)

// productRouter.post('/', (req, res) => {
//     const { id, name, price} = req.body
//     const results = [...products, {id, name, price}]

//     res.status(201).json({
//         success: true,
//         data: results
//     })
// })
productRouter.post('/',validator.body(createProductDbo), productController.createProduct)
// productRouter.patch('/:id', (req, res) => {
//     const { id } = req.params
//     const { name } = req.body
//     const productIndex = products.findIndex((product) => product.id === id)
//     const results = products

//     results[productIndex] = { ...results[productIndex], name}

//     res.status(201).json ({
//         success: true,
//         data: results
//     })
// })
productRouter.patch('/:id', validator.body(updateProductDbo), productController.updateProduct)

export default productRouter