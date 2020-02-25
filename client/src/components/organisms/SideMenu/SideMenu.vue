<template>
  <div class="side-menu" :class="{ open: isOpen }">
    <div class="side-menu-header">
      <h1>Currently playing</h1>
      <menu-icon secondary />
    </div>
    <current-playing-song />
    <queue />
    <router-link to="/player">player</router-link>
  </div>
</template>

<script>
import CurrentPlayingSong from '../../molecules/CurrentPlayingSong/CurrentPlayingSong'
import Queue from '../../molecules/Queue/Queue'
import MenuIcon from '../../atoms/MenuIcon/MenuIcon'

export default {
  components: {
    CurrentPlayingSong,
    Queue,
    MenuIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.side-menu {
  font-family: $f-roboto;
  font-weight: 700;
  color: $c-primary;
  height: 100vh;
  width: 100vw;
  padding: 30px 30px;
  -webkit-box-shadow: inset 5px 0px 0px 0px rgba(65, 184, 131, 1);
  -moz-box-shadow: inset 5px 0px 0px 0px rgba(65, 184, 131, 1);
  box-shadow: inset 5px 0px 0px 0px rgba(65, 184, 131, 1);
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  transform: translateX(100%);
  transition: transform 0.5s;
}

.side-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.open {
  transform: translateX(0);
}
</style>
