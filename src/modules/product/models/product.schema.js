import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const productModel = model('products', productSchema)

export default productModel