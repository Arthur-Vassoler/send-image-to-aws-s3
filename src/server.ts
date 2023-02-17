import dotenv from 'dotenv'
import express from 'express'
import routes from './routes/routes'

const server = express()

dotenv.config()

server.use(routes)

server.listen(process.env.PORT, () => console.log(`server is running at ${process.env.PORT}`))