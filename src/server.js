//importar dependencias
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//inicia o express
const server = express()

server
  .use(express.static('public'))
  //config template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //criar rotas
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)

//ligar o servidor
server.listen(5501)