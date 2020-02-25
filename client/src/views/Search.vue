<template>
  <div class="container">
    <SearchHeader />
    <SearchResultCard
      v-for="result in searchResults"
      :key="result.videoId"
      :thumbnail="result.thumbnail"
      :title="result.title"
      :videoId="result.videoId"
      :desc="result.desc"
    />
    <slide-menu :isOpen="isOpen" />
  </div>
</template>

<script>
import SearchHeader from "../components/molecules/SearchHeader/SearchHeader.vue";
import SearchResultCard from "../components/molecules/SearchResultCard/SearchResultCard.vue";
import SlideMenu from "../components/organisms/SideMenu/SideMenu";
import store from "../store";

export default {
  components: {
    SearchHeader,
    SearchResultCard,
    SlideMenu
  },
  computed: {
    isOpen() {
      return store.state.isSideMenuOpen;
    },
    searchResults() {
      return store.state.searchResults;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
