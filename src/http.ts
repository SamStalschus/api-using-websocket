import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import path from 'path'

import "./database"
import { routes } from './routes'

const app = express()

// Para os arquivos serem acessados pelo nosso browser
app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/pages/client', (request, response) => {
  return response.render('html/client.html')
})

// Criando protocolo http
const http = createServer(app)

// Criando o protocolo de WebSocket
const io = new Server(http)

io.on('connection', (socket: Socket) => {
  console.log('se conectou', socket.id)
})

app.use(express.json())

app.use(routes)

export { http, io }