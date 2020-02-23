const queue = []

const addToQueue = song => {
  queue.push(song)
  return song
}

const removeFromQueue = index => {
  return queue.splice(index, 1)[0]
}

const getSong = id => queue.find(song => song.id === id)

const getQueueInRomm = room => queue.filter(song => song.room === room)

module.exports = { addToQueue, removeFromQueue, getSong, getQueueInRomm }
