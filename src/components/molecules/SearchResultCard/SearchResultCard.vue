<template>
  <div
    class="card"
    :style="{
      background:
        'linear-gradient( rgba(65, 184, 131, 0.75), rgba(65, 184, 131, 0.75) ), url(' +
        thumbnail +
        ') 50% 50% / 100% 100% no-repeat'
    }"
  >
    <div class="info">
      <h3>{{ title }}</h3>
      <p>{{ shortDesc }}</p>
    </div>
    <PlaylistAddButton class="add" />
  </div>
</template>

<script>
// import Thumbnail from "../../atoms/Thumbnail/Thumbnail.vue";
import PlaylistAddButton from "../../atoms/PlaylistAddButton/PlaylistAddButton.vue";

export default {
  components: {
    // Thumbnail,
    PlaylistAddButton
  },
  props: {
    videoId: String,
    thumbnail: String,
    title: String,
    desc: String
  },
  computed: {
    shortDesc: function() {
      return this.desc.length > 250
        ? this.desc.substring(0, 250) + "..."
        : this.desc;
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 230px;
  padding: 5px 15px;
  margin-bottom: 25px;
  color: white;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
}

.info {
  margin-left: 15px;
  align-self: flex-start;
  max-width: 80%;
}

.info p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
}

.info h3 {
  font-family: "Robot", sans-serif;
  font-weight: 700;
}

.add {
  position: absolute;
  right: 40px;
  bottom: 15px;
}
</style>
