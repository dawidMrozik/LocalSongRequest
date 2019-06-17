<template>
  <div class="search-header-container">
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

<style>
.search-header-container {
  margin-bottom: 20px;
}
</style>
