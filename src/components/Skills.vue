
<template>
  <div class="panel">
    <h2 class="blue">Skills</h2>
    <span class="stack" v-for="(svg) in about.slugs.stacks" :key="svg">
      <p>{{svg.charAt(0).toUpperCase() + svg.slice(1)}}</p>
    </span>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "Skills",
  computed: {
    ...mapState(["about"])
  }
};
</script>
<style scoped>

</style>
