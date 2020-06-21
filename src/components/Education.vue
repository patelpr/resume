<template>
  <div class="panel">
    <h2>Education</h2>
    <div v-for="edu in about.education" :key="edu.name">
      <a :href="edu.url">
        <div class="card">
          <h3>{{edu.name}}</h3>
          <h4>{{edu.program}}</h4>
          <div class="dropnotes">
            <div v-for="(desc) in edu.description" :key="desc">
              <p>{{desc}}</p>
            </div>
          </div>
        </div>
      </a>
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