<template>
  <div class="search-container">
    <SearchInput />
    <MenuIcon />
  </div>
</template>

<script>
import SearchInput from '../../atoms/SearchInput/SearchInput.vue'
import MenuIcon from '../../atoms/MenuIcon/MenuIcon.vue'

export default {
  components: {
    SearchInput,
    MenuIcon
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  justify-content: space-around;
}

@media screen and (min-width: 1024px) {
  .search-container {
    justify-content: space-between;
    width: 90%;
  }
}
</style>
