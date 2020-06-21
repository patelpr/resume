
<template>

    <div class="res">
      <Projects class="item"/>
      <Experience class="item"/>
      <Education class="item"/>
    </div>

</template>

<script>
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";

import { mapState } from "vuex";
export default {
  name: "Container",
  components: {
    Projects,
    Experience,
    Education,
  },
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style >

.card{
  background-color: #eee;
  color: #1f2541;
  border: 3px solid #1f2541;
  margin:15px;

}

.card:hover{
  background-color: #1f2541;
  color:whitesmoke;
}
.dropnotes{
  display: none;
  background-color: whitesmoke;
  border: 10px solid #1f2541;
  color: #1f2541;
  text-align: center;
  position: relative;
  bottom: 0;
  
}
.card:hover > .dropnotes {
  display: block;
}


.res > .panel {
  border: 2px solid olive;
}


</style>
