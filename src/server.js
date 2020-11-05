//importar dependencias
const express = require('express')
const path = require('path')

//inicia o express
const server = express()

server
.use(express.static('public'))
//criar rota
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
.get('/', (request, response) => {
  return response.render('index')
})

//ligar o servidor
server.listen(5501)