<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: String,
    alt: String
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 110px;
  border: 2px solid #35495e;
}
</style>
