import 'dotenv/config'

module.exports = {
    development: {
        dialect: 'mysql',
        seederStorage: 'sequelize',
        url: process.env.DB_URL,
    },
}
