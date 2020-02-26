<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "@/store";

export default {
  sockets: {
    getQueue(queue) {
      store.commit("getQueue", queue);
    },
    newSong(song) {
      store.commit("newSong", song);
    },
    nextSong() {
      store.commit("nextSong");
    },
    syncTimer(timer) {
      store.commit("updateTimer", timer);
    }
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

body {
  margin: 0;
  font-family: $f-roboto;
  background-color: $c-primary;
  color: white;
}

a.router-link-exact-active {
  color: $c-secondary;
}
</style>
