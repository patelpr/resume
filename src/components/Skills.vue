
<template>
  <div class="panel">
    <h2 class="blue">Skills</h2>
    <div class="stack svg-holder" v-for="(svg) in about.slugs.stacks" :key="svg">
      <p>{{svg.charAt(0).toUpperCase() + svg.slice(1)}}</p>

      <!-- <img v-bind:src="'../assets/svg-icons/' + svg + '.svg'" :key="svg+','+ svg" /> -->
    </div>
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
.svg-holder {
  display: inline-block;
}
</style>
