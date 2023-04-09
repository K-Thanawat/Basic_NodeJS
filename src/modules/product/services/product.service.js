import productModel from "../models/product.schema.js"

const productService = {
    create: (payload) => {
        return new productModel(payload).save()
    },
    getAll: (query = {}) => {
        return productModel.find(query)
    },
    getOne: (id) => {
        return productModel.findOne({ _id: id})
    },
    updateOne: ( id, payload) => {
        return productModel.findOneAndUpdate({ _id: id}, { $set: payload })
    }
}

export default productService