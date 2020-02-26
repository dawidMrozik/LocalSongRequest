<template>
  <button @click="onAddToPlaylist">playlist</button>
</template>

<script>
import store from "../../../store";

export default {
  props: {
    videoId: {
      type: String,
      default: null
    }
  },
  methods: {
    onAddToPlaylist() {
      store.dispatch("fetchSong", this.videoId);
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  font-weight: 700;
  width: 100px;
  height: 40px;
  border: 1px solid #3386df;
  background-color: white;
  padding-left: 18px;
  color: $c-primary;
  border-radius: 25px;
  background-image: url(../../../assets/plus.svg);
  background-position: 13% 50%;
  background-repeat: no-repeat;
  transition: transform 0.2s ease-in;
}

button:hover {
  color: $c-secondary;
  transform: scale(1.1);
}
</style>
