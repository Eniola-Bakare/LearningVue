import Vue from "vue";
import Router from "vue-router";
import addBlog from "../components/Blog/addBlog.vue";
import showBlog from "../components/Blog/showBlog.vue";
import listBlogs from "../components/Blog/listBlogs.vue";
import singleBlog from "../components/Blog/singleBlog.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: showBlog,
    },
    {
      path: "/add",
      component: addBlog,
    },
    {
      path: "/list",
      component: listBlogs,
    },
    { path: "/blog/:id", component: singleBlog },
  ],
  mode: "history",
});
