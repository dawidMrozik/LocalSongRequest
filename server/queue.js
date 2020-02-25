const queue = []

const addToQueue = ({ room, song }) => {
  queue.push({ room, song })
}

const nextSong = () => {
  queue.shift()
}

const getSong = id => queue.find(song => song.id === id)

const getQueueInRomm = room =>
  queue.filter(song => song.room === room).map(song => song.song)

const setTime = ({ room, time }) => {
  queue[room] = time
}

const getTime = room => {
  return queue[room]
}

module.exports = {
  addToQueue,
  nextSong,
  getSong,
  getQueueInRomm,
  setTime,
  getTime
}
