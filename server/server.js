const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./routes')

const PORT = process.env.PORT || 1337
const app = express()
const server = http.createServer(app)

app.use(router)

const io = socketio(server)

io.on('connection', socket => {
  socket.on('join', (payload, callback) => {
    callback()
  })
})
