<template>
  <div class="pro">
    <Contact class="item"/>
    <Summary class="item"/>
    <Skills class="item"/>
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

.panel {
  border: 2px solid whitesmoke;
  padding: 10px;
}



</style>