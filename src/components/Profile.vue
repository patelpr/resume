<template>
  <div class="pro-panel">
    <Contact />
    <Summary />
    <Skills />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Typewriter from "./Typewriter";
import Skills from "./Skills";
import Summary from "./Summary";
import Contact from "./Contact";

export default {
  name: "Profile",
  components: {
    Typewriter,
    Skills,
    Summary,
    Contact
  },
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style >
.pro-panel {
  font-family: "Victor Mono", "Courier New", Courier, monospace;
  color: whitesmoke;
  padding: 15px;
  width:auto;
  text-align: center;
}
.pro-panel > div {
  margin: 0;
  display: inline-block;
  padding: 10px;
  width: calc(((100% / 3)/3)/3);
  min-width: 300px;
  margin: calc(((25% / 3) / 3) /3);
}

fieldset:hover {
  background-color: whitesmoke;
  color: #1f2541;
}
fieldset:hover>legend{
  position:relative;
  top:10px;
}

</style>