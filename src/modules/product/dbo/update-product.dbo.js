import joi from 'joi'

export const updateProductDbo = joi.object({
    name: joi.string().optional(),
    price: joi.number().optional()
})

// export const productParamsDbo = joi.object({
//     id: joi.string().required()
// })