import express from 'express'

import connectDatabase from './database/db.js'
import routes from './routes.js'

const app = express()

app.use(express.json())
app.use(routes)

connectDatabase()
  .then(() => {
    app.listen(3000, () => console.log("Servidor rodando e banco de dados conectado"))
  })
  .catch((error) => console.log(error))


