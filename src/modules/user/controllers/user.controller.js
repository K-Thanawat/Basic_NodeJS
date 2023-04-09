import userService from '../services/user.service.js'

const userController = {
    addUser: async (req, res) => {
        const { name, birthdate } = req.body
        console.log({ name, birthdate })
        const create = await userService.create({ name, birthdate: new Date(birthdate) })

        res.status(201).json({
            success: true,
            data: create
        })
    },
    getUserall: async (req, res) => {
        const users = await userService.getAll()

        res.status(200).json({
            success: true,
            data: users
        })
    }
}

export default userController