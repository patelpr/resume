<template>
  <div class="edu-panel">
    <h2>Education</h2>
    <div v-for="(edu,i) in about.education" :key='edu + i' class="edu-card">
      <h3>{{edu.name}}</h3>
      <h4>{{edu.program}}</h4>
      <ul>
        <li v-for="(desc,i) in edu.description" :key='i + edu + i' class='edu-desc'> {{desc}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Education",
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style>
</style>