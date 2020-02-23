<template>
  <div class="side-menu" :class="{ open: isOpen }">
    <div class="side-menu-header">
      <h1>Currently playing</h1>
      <menu-icon secondary />
    </div>
    <current-playing-song />
    <queue :queue="queue" />
  </div>
</template>

<script>
import CurrentPlayingSong from "../../molecules/CurrentPlayingSong/CurrentPlayingSong";
import Queue from "../../molecules/Queue/Queue";
import MenuIcon from "../../atoms/MenuIcon/MenuIcon";

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
  },
  data: function() {
    // mockup
    return {
      queue: [
        { id: 1, title: "twenty one pilots - chlorine", timeLeft: "2:47" },
        { id: 2, title: "twenty one pilots - stressed out", timeLeft: "5:23" },
        { id: 3, title: "Bones UK - Pretty Face", timeLeft: "8:51" }
      ]
    };
  }
};
</script>

<style scoped>
.side-menu {
  font-family: "Roboto" sans-serif;
  font-weight: 700;
  color: #35495e;
  height: 100vh;
  width: 100vw;
  padding: 10px 20px 0px 30px;
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
}

.open {
  transform: translateX(0);
}
</style>
