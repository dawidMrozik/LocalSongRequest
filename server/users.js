const users = []

const addUser = ({ id, room }) => {
  users.push({ id, room })
}

const getUser = id => users.find(user => user.id === id)

module.exports = {
  addUser,
  getUser
}
