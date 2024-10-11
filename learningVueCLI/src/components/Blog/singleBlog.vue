<template>
  <div class="single-blog">
    <h2>{{ blog.title }}</h2>
    <article>{{ blog.body }}</article>
    <router-link to="/"><button>Go Home</button></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function (data) {
        console.log(this.id);
        this.blog = data.body;
      });
  },
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
