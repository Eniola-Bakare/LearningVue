<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <app-header></app-header>
    <mainContent v-bind:ninjas="ninjas"></mainContent>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import Ninjas from './components/FirstComponent.vue'
export default {
  components: {
    // ninja: Ninjas,
  },
  name: "App",
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
    };
  },

  // lifecycle hooks
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
img {
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
