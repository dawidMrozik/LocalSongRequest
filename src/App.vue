<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  /* font-family: 'Lato', sans-serif; */
  background-color: #35495e;
  color: white;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
