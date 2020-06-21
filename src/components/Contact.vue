<template>
  <div class="panel">
	  <h2 class="blue">About</h2>
    <div>
      <p>My name is {{about.name}}, I am a {{about.profession}}.</p>
      <p>{{about.goals}}</p>
      <p>{{about.lang}}</p>
      <p>{{about.email}}</p>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Contact",
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style>
</style>