// import products from '../../../common/mock-data/products.json' assert {type: "json"}
import productService from '../services/product.service.js'

const productController = {
    getProduct: async (req, res) => {
        const products = await productService.getAll()
        res.status(200).json ({
            success: true,
            data: products
        })
    },
    getProductByID: async (req, res) => {
        const { id } = req.params
        const product = await productService.getOne(id)
        res.status(200).json({
            success: true,
            dtat: product
        })
    },
    createProduct: async (req, res) => {
        const { name, price} = req.body
        // const results = [...products, {id, name, price}]
        const created = await productService.create({ name, price})
        
        res.status(201).json({
            success: true,
            // data: results
            data: created
        })
    },
    updateProduct: async (req, res) => {
        const { id } = req.params
        const { name, price } = req.body
        const updated = await productService.updateOne(id, { name, price })
        // const productIndex = products.findIndex((product) => product.id === id)
        // const results = products
    
        // results[productIndex] = { ...results[productIndex], name, price}
    
        res.status(200).json ({
            success: true,
            // data: results
            data: updated
        })
    }
}

export default productController