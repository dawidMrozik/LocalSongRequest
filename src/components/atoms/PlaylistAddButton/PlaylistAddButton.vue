<template>
  <button>playlist</button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  font-weight: 700;
  width: 100px;
  height: 40px;
  border: 1px solid #3386df;
  background-color: white;
  padding-left: 18px;
  color: #35495e;
  border-radius: 25px;
  background-image: url(../../../assets/plus.svg);
  background-position: 13% 50%;
  background-repeat: no-repeat;
  transition: transform 0.2s ease-in;
}

button:hover {
  color: #41b883;
  transform: scaleX(1.02);
}
</style>
