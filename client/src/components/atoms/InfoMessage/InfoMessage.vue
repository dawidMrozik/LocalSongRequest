<template>
  <h2 class="info-message">
    <slot />
  </h2>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info-message {
  margin: 50px;
  color: white;
  font-family: $f-lato;
  font-weight: 300;
}
</style>