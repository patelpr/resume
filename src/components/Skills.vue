
<template>
  <div class="panel">
    <fieldset>
      <legend>Skills</legend>
      <div v-for="(svg) in about.slugs.stacks" :key="svg" class="svg-holder">
        <p>{{svg.charAt(0).toUpperCase() + svg.slice(1)}} /> </p>
        
        <!-- <img v-bind:src="'../assets/svg-icons/' + svg + '.svg'" :key="svg+','+ svg" /> -->
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
