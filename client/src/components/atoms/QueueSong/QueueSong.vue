<template>
  <div class="container" @dblclick="onRemove">
    <h3>{{ title }}</h3>
    <span>{{ duration }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    duration: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    }
  },
  methods: {
    onRemove: function() {
      this.$socket.client.emit("removeFromQueue", this.id);
    }
  }
};
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
  cursor: pointer;
  user-select: none;

  .container:hover {
    color: $c-secondary-dark;
  }

  h3 {
    width: 80%;
  }
}
</style>
