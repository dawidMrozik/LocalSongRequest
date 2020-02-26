<template>
  <div class="container">
    <template v-if="currentlyPlaying">
      <h1>Currently playing</h1>
      <h3>{{ currentlyPlaying.title }}</h3>
      <player-bar :duration="currentlyPlaying.duration" />
    </template>
    <h3 v-else>No song currently playing</h3>
  </div>
</template>

<script>
import PlayerBar from '../../atoms/PlayerBar/PlayerBar'
import store from '../../../store'

export default {
  components: {
    PlayerBar
  },
  computed: {
    currentlyPlaying() {
      return store.state.currentlyPlaying
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  font-family: 'Roboto' sans-serif;
  font-weight: 700;
  color: #35495e;
  margin-bottom: 50px;

  h1 {
    margin-bottom: 25px;
  }
}
</style>
