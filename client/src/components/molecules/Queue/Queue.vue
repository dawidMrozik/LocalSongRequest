<template>
  <div class="container">
    <queue-song
      v-for="song in queue"
      :key="song.id"
      :title="song.title"
      :timeLeft="song.timeLeft"
      class="song"
    />
  </div>
</template>

<script>
import QueueSong from '../../atoms/QueueSong/QueueSong'

export default {
  components: {
    QueueSong
  },
  props: {
    queue: {
      type: Array,
      default: new Array()
    }
  }
}
</script>

<style scoped>
.song {
  margin-bottom: 10px;
}
</style>
