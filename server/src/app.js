import express from 'express'
import cors from 'cors'
import { __dirname } from './utils.js'
import config from './config.js'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import './persistencia/DAO/dbConfig.js'


const app = express()
const PORT = config.port

// Setup inicial de aplicacion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cors())


// Mongo - session
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: config.uri_mongo
    }),
    resave: false,
    saveUninitialized: false,
    secret: 'sessionKey',
    cookie: { max: 60000 }
  })
)

app.get('/', (req, res) => {
  res.send('----WELCOME TO BLUE BANK-----')
})


app.listen(PORT, () => {
  console.log(`Servidor Iniciado en puerto 8080 => http://localhost:${PORT}`)

})


