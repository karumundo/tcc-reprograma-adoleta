const express = require ('express')
const routes = require ('./src/routes/index')
//const db = require ('../src/infrastructure/database')

const app = express()

app.use(express.json())

//db.hasConnection()

//app.use(routes)

app.listen(4000, () => console.log ('Servidor funcionando na porta 4000'));
