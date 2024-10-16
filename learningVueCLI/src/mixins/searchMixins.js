export default {
  computed: {
    filteredBlogs: function () {
      console.log(this.blogs.body);
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
