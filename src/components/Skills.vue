
<template>
  <div class="skills-panel">
    <h2>Skills</h2>
    <div v-for="(svg,index) in about.slugs.stacks" :key="index" class="svg-holder">
		  <img v-bind="'./../assets/svg-icons/' + svg + '.svg'" />
    </div>
  </div>
</template>


<script>
import {mapState} from 'vuex'
export default {
  name: "Skills",
  computed:{
    ...mapState(['about'])
  }
};
</script>
<style scoped>
.svg-holder{
  display: inline-block;
}
</style>
