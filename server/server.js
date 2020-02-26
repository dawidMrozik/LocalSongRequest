const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./routes')
const {
  addToQueue,
  nextSong,
  getSong,
  getQueueInRomm,
  setTime,
  getTime
} = require('./queue')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

let { wannaJoin } = require('./users')

const PORT = process.env.PORT || 1337
const app = express()
const server = http.createServer(app)

app.use(router)

const io = socketio(server)

io.on('connection', socket => {
  socket.on('join', room => {
    addUser({ id: socket.id, room })
    socket.join(room)
    socket.emit('getQueue', getQueueInRomm(room))
  })

  socket.on('addToQueue', song => {
    const user = getUser(socket.id)
    addToQueue({ room: user.room, song })
    io.to(user.room).emit('newSong', song)
  })

  socket.on('joinPlayer', () => {
    const user = getUser(socket.id)
    wannaJoin = socket.id
    socket.broadcast.to(user.room).emit('userWantsToJoin')
  })

  socket.on('updateTimer', timer => {
    const user = getUser(socket.id)

    setTime({ room: user.room, time: timer })
    socket.broadcast.to(user.room).emit('syncTimer', timer)
  })

  socket.on('sendTime', ({ time, state }) => {
    io.to(wannaJoin).emit('syncTime', { time, state })
  })

  socket.on('nextSong', () => {
    const user = getUser(socket.id)
    nextSong()

    io.to(user.room).emit('nextSong')
  })

  socket.on('pause', time => {
    const user = getUser(socket.id)
    io.to(user.room).emit('pause', time)
  })

  socket.on('playing', time => {
    const user = getUser(socket.id)
    io.to(user.room).emit('playing', time)
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
