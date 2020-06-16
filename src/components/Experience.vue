<template>
  <div class="exp-panel">
    <h2>Experience</h2>
    <div v-for="(exp,i) in about.experience" :key="exp.company + i" class="exp-card">
      <h3>{{exp.company }}</h3>
      <p>{{exp.location.city}}, {{exp.location.state}}</p>
      <div v-for="(desc,i) in exp.description" :key="exp + i" class="edu-desc">
        <p>{{desc}}</p>
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