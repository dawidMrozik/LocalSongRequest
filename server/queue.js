const queue = []

const addToQueue = ({ room, song }) => {
  queue.push({ room, song })
}

const nextSong = () => {
  queue.shift()
}

const getQueueInRoom = (room) =>
  queue.filter((song) => song.room === room).map((song) => song.song)

const removeFromQueue = (room, id) => {
  return getQueueInRoom(room).filter((song) => song.id !== id)
}

const setTime = ({ room, time }) => {
  queue[room] = time
}

module.exports = {
  addToQueue,
  nextSong,
  getQueueInRoom,
  setTime,
  removeFromQueue,
}
