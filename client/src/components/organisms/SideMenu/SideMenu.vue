<template>
  <div class="side-menu" :class="{ open: isSideMenuOpen }">
    <menu-icon secondary class="side-menu-btn" />
    <current-playing-song />
    <queue />
    <FloatingButton type="player">player</FloatingButton>
  </div>
</template>

<script>
import CurrentPlayingSong from '../../molecules/CurrentPlayingSong/CurrentPlayingSong'
import FloatingButton from '../../atoms/FloatingButton/FloatingButton'
import Queue from '../../molecules/Queue/Queue'
import MenuIcon from '../../atoms/MenuIcon/MenuIcon'
import store from '../../../store'

export default {
  components: {
    CurrentPlayingSong,
    Queue,
    MenuIcon,
    FloatingButton
  },
  computed: {
    isSideMenuOpen() {
      return store.state.isSideMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.side-menu {
  display: flex;
  flex-direction: column;
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

@media screen and (min-width: 1024px) {
  .side-menu {
    transform: translateX(0);
    width: 35vw;
  }

  .side-menu-btn {
    display: none;
  }
}

.side-menu-btn {
  align-self: flex-end;
}

.open {
  transform: translateX(0);
}
</style>
