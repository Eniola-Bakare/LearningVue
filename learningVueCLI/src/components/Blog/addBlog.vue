<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>

    <form v-show="!submitted">
      <label>Blog Title:</label>
      <input v-model.lazy="blog.title" type="text" required />
      <label>Big Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>

      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="Ninjas" v-model="blog.categories" />
        <label>Yoshi</label>
        <input type="checkbox" value="Yoshi" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="Mario" v-model="blog.categories" />
        <label>Ninmasj</label>
        <input type="checkbox" value="Ninmasj" v-model="blog.categories" />
        <div class="">
          <label>Author: </label>
          <select v-model="blog.author">
            <option v-for="(author, index) in authors" :key="index">
              {{ author }}
            </option>
          </select>
        </div>
      </div>
      <button v-on:click.prevent="post">Add blog post</button>
    </form>

    <div v-show="submitted">Thanks for submitting a blog post !</div>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="(category, i) in blog.categories" v-bind:key="i">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: { title: "", content: "", categories: [], author: "" },
      authors: ["Net Ninja", "Angular Advengers", "Vue Vidictors"],
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", this.blog)
        .then(function (data) {
          console.log(data);
          this.submitted = true;
          alert(data.body.title);
        });
    },
  },
};
</script>
<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
