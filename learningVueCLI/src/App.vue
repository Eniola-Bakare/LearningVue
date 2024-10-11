<template>
  <div id="app">
    <navHeader></navHeader>
    <div class="img-div">
      <img src="./assets/logo.png" />
    </div>
    <!-- <app-header></app-header> -->
    <!-- <mainContent v-bind:ninjas="ninjas"></mainContent> -->
    <!-- <form-helper>
      <h1 slot="form-title">{{ title }}</h1>
      <h3 slot="form-description">Hey, form description !!!</h3>
    </form-helper> -->
    <!-- <addBlog></addBlog> -->
    <!-- <showBlog></showBlog>
    <listBlogs></listBlogs> -->
    <RouterView></RouterView>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import Ninjas from './components/FirstComponent.vue'
import FormHelper from "./components/FormHelper.vue";
import addBlog from "./components/Blog/addBlog.vue";
import showBlog from "./components/Blog/showBlog.vue";
import listBlogs from "./components/Blog/listBlogs.vue";
import navHeader from "./components/Blog/nav.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    // ninja: Ninjas,
    "form-helper": FormHelper,
    addBlog: addBlog,
    showBlog: showBlog,
    listBlogs: listBlogs,
    navHeader: navHeader,
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
      title: "Hollas! Form Title",
    };
  },

  // // lifecycle hooks
  // beforeCreate() {
  //   alert("beforeCreate");
  // },
  // created() {
  //   alert("created");
  // },
  // beforeMount() {
  //   alert("beforeMount");
  // },
  // mounted() {
  //   alert("mounted");
  // },
  // beforeUpdate() {
  //   alert("beforeUpdate");
  // },
  // updated() {
  //   alert("updated");
  // },
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

body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
.img-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
