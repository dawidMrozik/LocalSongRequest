const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./routes')
const {
  addToQueue,
  nextSong,
  getSong,
  getQueueInRoom,
  setTime,
  getTime,
  removeFromQueue
} = require('./queue')
const { addUser, getUser } = require('./users')

const PORT = process.env.PORT || 1337
const app = express()
const server = http.createServer(app)

app.use(router)

const io = socketio(server)

io.on('connection', socket => {
  socket.on('join', room => {
    addUser({ id: socket.id, room })
    socket.join(room)
    socket.emit('getQueue', getQueueInRoom(room))
  })

  socket.on('addToQueue', song => {
    const user = getUser(socket.id)
    addToQueue({ room: user.room, song })
    io.to(user.room).emit('newSong', song)
  })

  socket.on('updateTimer', timer => {
    const user = getUser(socket.id)

    setTime({ room: user.room, time: timer })
    socket.broadcast.to(user.room).emit('syncTimer', timer)
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

  socket.on('removeFromQueue', id => {
    const user = getUser(socket.id)

    io.to(user.room).emit('skipSong', removeFromQueue(user.room, id))
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
