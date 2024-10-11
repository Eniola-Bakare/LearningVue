// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";

Vue.use(VueResource);
import Ninjas from "./components/FirstComponent.vue";
import Header from "./components/composition/Header.vue";
import Footer from "./components/composition/Footer.vue";
import MainContent from "./components/composition/MainContent.vue";

Vue.directive("rainbow", {
  bind(el) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  },
});

Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "400px";
    }

    if (binding.arg == "column") {
      el.style.background == "#ddd";
      el.style.padding == "2000px";
    }
  },
});

Vue.filter("upperCase", function (value) {
  return value.toUpperCase();
});

Vue.filter("snippet", function (value) {
  return value.slice(0, 100) + "...";
});

Vue.component("ninja", Ninjas);
Vue.component("app-header", Header);
Vue.component("app-footer", Footer);
Vue.component("mainContent", MainContent);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
