<template>
  <div class="pro-panel grid-item" style="margin: 0px; padding: 0px; width: 100%">
    <h1>Devjutzu</h1>
     <Typewriter />
    <p class="sums" v-for="(sum,index) in about.summary" :key="index">{{sum}}</p>
	<Skills />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Typewriter from "./Typewriter";
import Skills from "./Skills";


export default {
  name: "Profile",
  components: {
	Typewriter,
	Skills,
  },
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style scoped>
.pro-panel {
  font-family: "Victor Mono", "Courier New", Courier, monospace;
  background-color: #1f2541;
  color: white;
  width: 100%;
  height: 400px;
  padding: 15px;
}
h1,
h2 {
  display: inline-block;
}
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  opacity: 30%;
}

.txt-rotate {
  font-style: italic;
  font-weight: 200;
}
</style>