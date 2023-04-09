import joi from "joi"

export const createProductDbo = joi.object({
    // id: joi.string().optional(),
    name: joi.string().required(),
    price: joi.number().optional().default(0)
})