<template>
  <div class="exp-panel">

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Experience",
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style scoped>
</style>