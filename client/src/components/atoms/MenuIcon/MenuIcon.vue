<template>
  <div class="menu-btn" :class="{ open: isOpen }" @click="onOpen">
    <div class="bar1" :class="{ secondary: secondary }"></div>
    <div class="bar2" :class="{ secondary: secondary }"></div>
    <div class="bar3" :class="{ secondary: secondary }"></div>
  </div>
</template>

<script>
import store from '../../../store'

export default {
  props: {
    secondary: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onOpen: function() {
      store.commit('toggleSideMenu')
    }
  },
  computed: {
    isOpen() {
      return store.state.isSideMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-btn {
  display: inline-block;
  cursor: pointer;
  margin: 0;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: transform 0.4s;
}

.bar2 {
  width: 25px;
  margin-left: 10px;
}

.secondary {
  background-color: $c-secondary;
}

.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.open .bar2 {
  opacity: 0;
}

.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

@media screen and(min-width: 1024px) {
  .menu-btn {
    display: none;
  }
}
</style>
