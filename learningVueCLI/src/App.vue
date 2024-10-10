<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <ninja></ninja>
  </div>
</template>

<script>
// import Ninjas from './components/FirstComponent.vue'
export default {
  components: {
    // ninja: Ninjas,
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
