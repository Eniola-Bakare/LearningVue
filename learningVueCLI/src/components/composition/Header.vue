<template>
  <header v-on:click="title = 'Updated in line!'">
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Learning Vue !",
    };
  },
  methods: {},
};
</script>
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
