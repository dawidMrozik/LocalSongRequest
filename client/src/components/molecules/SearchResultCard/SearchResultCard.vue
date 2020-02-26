<template>
  <div class="card">
    <thumbnail :src="thumbnail" :alt="title" />
    <div class="info">
      <h3>{{ title }}</h3>
    </div>
    <PlaylistAddButton class="add" :videoId="videoId" />
  </div>
</template>

<script>
import Thumbnail from '../../atoms/Thumbnail/Thumbnail.vue'
import PlaylistAddButton from '../../atoms/PlaylistAddButton/PlaylistAddButton.vue'

export default {
  components: {
    Thumbnail,
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
        ? this.desc.substring(0, 250) + '...'
        : this.desc
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background-color: $c-secondary;
  color: white;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
}

.info {
  margin-left: 15px;
  align-self: flex-start;
  max-width: 80%;
  margin-bottom: 50px;
}

.info p {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}

.info h3 {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1rem;
}

.add {
  position: absolute;
  right: 40px;
  bottom: 15px;
}

@media screen and(min-width: 1024px) {
  .card {
    width: 500px;
    height: 150px;
    margin: 10px;
  }
}
</style>
