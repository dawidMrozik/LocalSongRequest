<template>
  <div class="container">
    <queue-song
      v-for="song in queue"
      :key="song.id"
      :id="song.id"
      :title="song.title"
      :duration="song.duration"
      class="song"
      :class="{ whiteText: white }"
    />
  </div>
</template>

<script>
import QueueSong from "../../atoms/QueueSong/QueueSong";
import store from "../../../store";

export default {
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  components: {
    QueueSong
  },
  computed: {
    queue() {
      return store.state.queue.slice(1, store.state.queue.length);
    }
  }
};
</script>

<style scoped>
.song {
  margin-bottom: 10px;
}

.whiteText {
  color: white;
}
</style>
