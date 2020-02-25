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

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: $f-roboto;
  font-weight: 700;
  color: $c-primary;
  height: 30px;
  font-size: 0.8em;

  h3 {
    width: 80%;
  }
}
</style>
