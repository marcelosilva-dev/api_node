const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// Iniciando o App
const app = express()
app.use(cors())
app.use(express.json())

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false })

// Models
requireDir('./src/models')

// Rotas
app.use('/api', require("./src/routes"))


app.listen(3001)