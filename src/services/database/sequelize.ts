import { Sequelize } from 'sequelize-typescript'
import { accessEnv } from 'utils'
// import models from './models'

const DATABASE_URL = accessEnv('DB_URL')

export const sequelize = new Sequelize(DATABASE_URL, {
    dialectOptions: {
        charset: 'utf8',
        multipleStatements: true,
    },
    logging: false,
    // models,
})
