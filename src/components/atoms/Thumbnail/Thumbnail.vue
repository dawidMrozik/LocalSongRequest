<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: String,
    alt: String
  }
};
</script>

<style scoped>
img {
  width: 150px;
  height: 85px;
}
</style>
