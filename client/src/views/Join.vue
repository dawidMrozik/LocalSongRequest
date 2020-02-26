<template>
  <div class="join-container">
    <div class="join-inner">
      <h2>Welcome,</h2>
      <p>enter a room name you want to join</p>
      <form class="join-form">
        <input
          type="text"
          class="join-input"
          placeholder="room name"
          v-model="room"
        />
        <button @click="joinRoom">join {{ room }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data: function() {
    return {
      room: ''
    }
  },
  methods: {
    joinRoom(e) {
      e.preventDefault()
      this.$socket.client.emit('join', this.room)
      store.commit('joinRoom', this.room)
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
.join-container {
  display: flex;
  font-family: $f-lato;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.join-inner {
  width: 320px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 5px solid $c-secondary;
  padding: 20px;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
}

.join-form {
  margin-top: 50px;

  input {
    font-family: $f-roboto;
    font-size: 1.1em;
    border: none;
    height: 45px;
    width: 265px;
    border-radius: 25px;
    padding: 15px 25px;
    color: $c-secondary;
    -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
    -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  }

  input:focus {
    outline: none;
    border: 1px solid $c-secondary;
  }

  button {
    margin-top: 10px;
    border: none;
    height: 45px;
    width: 265px;
    border-radius: 25px;
    padding: 15px 25px;
    background-color: $c-secondary;
    color: white;
    outline: none;
  }

  button:hover {
    background-color: $c-secondary-dark;
  }

  button:focus {
    border: 1px solid $c-primary-dark;
  }
}
</style>
