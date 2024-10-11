<template>
  <div v-theme:column="'wide'" id="show-blog" s>
    <h1>List Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search for a blog" />

    <div
      class="single-blog"
      v-for="(blog, index) in filteredBlogs"
      :key="index"
    >
      <h2 v-rainbow>{{ blog.title | upperCase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixins from "../../mixins/searchMixins";
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {},
  mixins: [searchMixins],
};
</script>
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
