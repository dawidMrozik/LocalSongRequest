<template>
  <div class="search-container">
    <SearchInput :searchResults="searchResults" />
    <MenuIcon />
  </div>
</template>

<script>
import SearchInput from "../../atoms/SearchInput/SearchInput.vue";
import MenuIcon from "../../atoms/MenuIcon/MenuIcon.vue";

export default {
  components: {
    SearchInput,
    MenuIcon
  },
  props: {
    searchResults: Array
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  justify-content: space-around;
}
</style>
