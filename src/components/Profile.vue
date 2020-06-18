<template>
  <div class="pro-panel">
    <Contact />
    <Summary />
    <Skills />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Skills from "./Skills";
import Summary from "./Summary";
import Contact from "./Contact";

export default {
  name: "Profile",
  components: {
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
.pro-elements{
  background-color: #1f2541;
  color: whitesmoke;
  text-align: center;
}
.pro-panel > div {
  display: inline-block;
  border: 2px solid whitesmoke;
  padding: 15px;
  width: calc(100% / 4);
  vertical-align: bottom;
  margin: calc(((100% / 4)/ 3)/3);
  min-width: 300px;
}
.panel > h2{
  position: relative;
  top:-50px
}


</style>