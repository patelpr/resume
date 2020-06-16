<template>
  <div class="edu-panel">
    <h3>{{about.education.name}}</h3>
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