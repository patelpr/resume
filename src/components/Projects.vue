<template>
  <div class="res-panel">
    <h2>Projects</h2>
    <div v-for="(proj,i) in about.project" :key="proj + i">
      <a v-bind:href="proj.url">
        <div class="card">
          <h3>{{proj.name}}</h3>
          <p
            class="stack"
            v-for="svg in proj.stack"
            :key="svg"
          >{{svg.charAt(0).toUpperCase()+ svg.slice(1)}},</p>
          <div class="dropnotes">
            <p>{{proj.desc}}</p>
          </div>
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
.stack {
  font-size: 1vw;
  display: inline-block;
}
</style>