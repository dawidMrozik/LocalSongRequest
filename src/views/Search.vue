<template>
  <div class="container">
    <SearchHeader :searchResults="searchResults" />
    <SearchResultCard
      v-for="result in searchResults"
      :key="result.videoId"
      :thumbnail="result.thumbnail"
      :title="result.title"
      :videoId="result.videoId"
      :desc="result.desc"
    />
  </div>
</template>

<script>
import SearchHeader from "../components/molecules/SearchHeader/SearchHeader.vue";
import SearchResultCard from "../components/molecules/SearchResultCard/SearchResultCard.vue";

export default {
  components: {
    SearchHeader,
    SearchResultCard
  },
  data: function() {
    return {
      searchResults: []
    };
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
</style>
