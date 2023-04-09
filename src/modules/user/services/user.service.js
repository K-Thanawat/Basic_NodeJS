import { doQuery } from '../../../common/database/mysql.db.js'
import { Model, tableName } from '../models/user.model.js'

const userService = {
    create: (payload) => {
        return doQuery(`INSERT INTO ${tableName} SET ?`, payload)
    },
    getAll: (columns = Model) => {
        const options = [columns, tableName]

        return doQuery(`SELECT ?? FROM ??`, options)
    }
}

export default userService