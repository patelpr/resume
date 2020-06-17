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
  background-color: #eee;
  color: #1f2541;
  padding:15px;
  margin:10px;
}
.proj-card a>*{
  text-decoration: none;
}
.proj-card:hover{
  background-color: #1f2541;
  color:whitesmoke;
}

</style>