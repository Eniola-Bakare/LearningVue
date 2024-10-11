<template>
  <div>
    <slot name="form-title"></slot>
    FORM HELPER !
    <slot name="form-description"></slot>
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
