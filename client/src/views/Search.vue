<template>
  <div class="container">
    <SearchHeader />
    <div class="cards">
      <SearchResultCard
        v-for="result in searchResults"
        :key="result.videoId"
        :thumbnail="result.thumbnail"
        :title="result.title"
        :videoId="result.videoId"
        :desc="result.desc"
      />
    </div>
    <InfoMessage v-if="wasntSearched"
      >Type something above and add videos to room's playlist!🤗</InfoMessage
    >
    <slide-menu :isOpen="isOpen" />
  </div>
</template>

<script>
import SearchHeader from '../components/molecules/SearchHeader/SearchHeader.vue'
import SearchResultCard from '../components/molecules/SearchResultCard/SearchResultCard.vue'
import InfoMessage from '../components/atoms/InfoMessage/InfoMessage'
import SlideMenu from '../components/organisms/SideMenu/SideMenu'
import store from '../store'

export default {
  components: {
    SearchHeader,
    SearchResultCard,
    SlideMenu,
    InfoMessage
  },
  computed: {
    isOpen() {
      return store.state.isSideMenuOpen
    },
    searchResults() {
      return store.state.searchResults
    },
    wasntSearched() {
      return store.state.searchResults.length === 0 ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and(min-width: 1024px) {
  .container {
    width: 60vw;
    margin-left: 50px;
  }

  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
