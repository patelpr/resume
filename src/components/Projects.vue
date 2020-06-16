<template>
  <div class="projects-panel">
  
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "Projects",
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style scoped>
</style>