import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { sequelize } from 'services/database'

class App {
    express: express.Application

    constructor() {
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        console.log(
            sequelize
                ? `Sequelize up at ${sequelize.getDialect()} -> ${
                      sequelize.config.host
                  }`
                : 'Database not found'
        )
    }

    private routes(): void {
        this.express.get('/', (_, res) => res.json({ message: 'hello world' }))
    }
}

export default new App().express
