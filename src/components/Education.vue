<template>
  <div class="edu-panel">
    <h2>Education</h2>
    <div v-for="edu in about.education" :key="edu.name"><h1>{{edu.name}}</h1>
    </div>

    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Education",
  computed: {
    ...mapState(['about']),
  }
};
</script>

<style>
</style>