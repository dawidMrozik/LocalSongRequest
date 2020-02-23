<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <span>{{ timeLeft }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    timeLeft: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto' sans-serif;
  font-weight: 700;
  color: #35495e;
  height: 30px;
  font-size: 0.8em;
}
</style>
