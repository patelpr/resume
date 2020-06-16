<template>
  <div class="projects-panel">
    <h2>Projects</h2>
    <div v-for="(proj,i) in about.project" :key='proj + i' class="proj-card">
      <a v-bind:href="proj.url"> 
      <h3>{{proj.name}}</h3>
      <div class="proj-stack"></div>
      <p>{{proj.desc}}</p>
      </a>
      </div>
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
.proj-card{
  height:100%;
}
.proj-card>*{
  text-decoration: none;
  color: #1f2541
}
.proj-card:hover{
  background-color: #1f2541;
  color:white;
}

</style>