<template>
  <div class="panel">
    <h2>Projects</h2>
    <div v-for="(proj) in about.project" :key="proj.name">
      <a v-bind:href="proj.url" target="_blank" >
        <div class="card">
          <h3>{{proj.name||'Project Name'}}</h3>
          <span class="stack blue" v-for="svg in proj.stack"
            :key="svg">
            <p>{{svg.charAt(0).toUpperCase()+ svg.slice(1)||'Project Stack'}}</p>
            </span>
            <p>{{proj.desc||'Project Description'}}</p>
        </div>
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

</style>