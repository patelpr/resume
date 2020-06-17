<template>
  <div class="res-panel">
    <h2>Experience</h2>
    <div v-for="(exp) in about.experience" :key="exp.company" class="card">
      <h3>{{exp.company }}</h3>
      <h4>{{exp.position}}</h4>
      <p>{{exp.location.city}}, {{exp.location.state}}</p>
      <div class="dropnotes">
        <p>{{exp.years.start}} - {{exp.years.end}}</p>
      <div v-for="(desc) in exp.desc" :key="desc" class="edu-desc">
        <p>{{desc}}</p>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Experience",
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style scoped>
</style>