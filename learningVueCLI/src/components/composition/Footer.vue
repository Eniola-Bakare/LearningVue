<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      copyright: "copyright (c) - Eniola - 2024 !",
    };
  },
  methods: {},
};
</script>
<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
