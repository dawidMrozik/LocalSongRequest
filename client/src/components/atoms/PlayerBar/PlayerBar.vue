<template>
  <div class="player-container">
    <div class="bar">
      <div class="pointer" :style="{ marginLeft: progress }"></div>
    </div>
    <div class="timer">{{ currentTime }} / {{ fullTime }}</div>
  </div>
</template>

<script>
export default {
  props: {
    currentTime: {
      type: String,
      default: "0:00"
    },
    fullTime: {
      type: String,
      default: "0:00"
    }
  },
  computed: {
    progress: function() {
      return (this.fullTime / this.currentTime) * 200 + "px";
    }
  }
};
</script>

<style scoped>
.player-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto" sans-serif;
  font-weight: 700;
  color: #35495e;
}

.bar {
  height: 5px;
  width: 75%;
  background-color: #41b883;
}

.pointer {
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: #35495e;
  border: 3px solid #41b883;
  position: relative;
  bottom: 5px;
}

.timer {
  font-size: 0.9em;
}
</style>
