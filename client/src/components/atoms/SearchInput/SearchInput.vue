<template>
  <input
    class="input search"
    type="text"
    v-model="input"
    @input="onSearch"
    placeholder="szukaj..."
  />
</template>

<script>
import debounce from 'lodash.debounce'
import yt from '../../../axios/yt'
import { YT_API_KEY } from '../../../secret'

export default {
  props: {
    search: Boolean,
    searchResults: Array
  },
  data: function() {
    return {
      input: ''
    }
  },
  methods: {
    onSearch: debounce(function() {
      this.searchResults.length = 0
      if (this.input !== '') {
        yt.get('/', {
          params: {
            part: 'snippet',
            type: 'video',
            key: YT_API_KEY,
            maxResults: 10,
            q: this.input
          }
        }).then(response => {
          response.data.items.forEach(video => {
            this.searchResults.push({
              videoId: video.id.videoId,
              title: video.snippet.title,
              desc: video.snippet.description,
              thumbnail: video.snippet.thumbnails.medium.url
            })
          })
        })
      }
    }, 500)
  }
}
</script>

<style scoped>
.input {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1em;
  border: none;
  height: 45px;
  width: 265px;
  border-radius: 25px;
  padding: 15px 25px;
  color: #41b883;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
}

.input:focus {
  outline: none;
  border: 1px solid #41b883;
}

.search {
  background-image: url(../../../assets/search.svg);
  background-repeat: no-repeat;
  background-position: 90% 50%;
}
</style>
