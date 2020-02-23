<template>
  <div class="container">
    <h3>twenty one pilots - chlorine</h3>
    <player-bar />
  </div>
</template>

<script>
import PlayerBar from '../../atoms/PlayerBar/PlayerBar'

export default {
  components: {
    PlayerBar
  },
  props: {
    currentSong: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.container {
  font-family: 'Roboto' sans-serif;
  font-weight: 700;
  color: #35495e;
  margin-bottom: 50px;
}
</style>
