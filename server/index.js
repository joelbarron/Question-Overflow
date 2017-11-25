import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl, port } from './config'

const PORT = port
const debug = new Debug('question-overflow:root')

// asignar el sistema de promesas
mongoose.Promise = global.Promise

async function start () {
  await mongoose.connect(mongoUrl, { useMongoClient: true, })

  app.listen(PORT, () => {
    debug(`Server runing at port ${PORT}`)
  })
}

start()
