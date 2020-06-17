
<template>
  <div class="skills-panel">
    <fieldset>
      <legend>Skills</legend>
      <div v-for="(svg) in about.slugs.stacks" :key="svg" class="svg-holder">
        <!-- <img v-bind:src="'../assets/svg-icons/' + svg + '.svg'" /> -->
      </div>
    </fieldset>
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
