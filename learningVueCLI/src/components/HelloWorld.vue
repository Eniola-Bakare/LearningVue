<template>
  <div>
    <h1>
      You did it, <span v-show="userShow">{{ user }}!</span>
    </h1>
    <button v-on:click="changeUser">Chnage username</button>
  </div>
</template>

<script>
export default {
  name: "Eniola",
  data() {
    return {
      user: "Eniola !",
      userShow: false,
    };
  },
  methods: {
    changeUser: function () {
      this.userShow = !this.userShow;
      this.user = "baksbaks !";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
