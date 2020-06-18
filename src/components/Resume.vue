
<template>

    <div class="res-elements">
      <Projects />
      <Experience />
      <Education />
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
  padding:10px;
  margin:20px;
}
.card > h3,.card> h4{
  line-height: 5px;
}

a{
  text-decoration: none;
}
.card:hover{
  background-color: #1f2541;
  color:whitesmoke;
}
.dropnotes{
  display: none;
  background-color: whitesmoke;
  border: 1px solid #1f2541;
  color: #1f2541;
  text-align: left;
  padding: 15px;
}
.card:hover > .dropnotes {
  display: block;
}

.res-elements {
  background-color: whitesmoke;
  text-align: center;
}
.res-elements > div {
  display: inline-block;
  border: 2px solid olive;
  padding: 15px;
  width: calc(100% / 4);
  vertical-align: top;
  margin: calc(((100% / 4)/ 3)/3);
  min-width: 300px;
}

a > div{
	border-left: 5px solid #1f2541;
	border-right: 5px solid #1f2541;
}

</style>
