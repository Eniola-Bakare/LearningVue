<template>
  <div>
    <li v-for="ninja in ninjas" v-bind:key="ninja">{{ ninja }}</li>
  </div>
</template>

<script>
export default {
  name: "FirstComponent",
  data() {
    return {
      ninjas: ["Eniola", "Jane", "Stormmer !"],
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
