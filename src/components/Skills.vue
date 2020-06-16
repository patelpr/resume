<template>
  <div class="skills-panel">
    <div>

		<img v-for="(svg,index) in about.slugs.stacks" :key="index" :src="'./../assets/svg-icons/stack/' + svg + '.svg'" />
    </div>
  </div>
</template>

<script>

export default {
  name: "Skills",
  data(){
  }
};
</script>
<style scoped>
img{
	fill:000;
}
</style>
