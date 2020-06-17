<template>
  <router-link :to="type === 'add' ? '/search' : '/player'" class="floating-container">
    <button class="f-btn" :class="type">
      <slot></slot>
    </button>
  </router-link>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "add"
    }
  }
};
</script>

<style lang="scss" scoped>
.floating-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.f-btn {
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: none;
  background-color: $c-secondary;
  color: white;

  &:hover {
    background-color: $c-secondary-dark;
  }

  &:focus {
    outline: none;
  }
}

.add {
  background-image: url(../../../assets/plus.svg);
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.player {
  width: 120px;
  background-image: url(../../../assets/player.svg);
  background-position: 25% 50%;
  background-repeat: no-repeat;
  padding-left: 30px;
}
</style>
