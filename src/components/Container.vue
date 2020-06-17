<template>
  <div id="container">
    <div class="pro-elements">
		<Typewriter />
      <Profile />
    </div>
    <div class="res-elements">
      <Projects />
      <Experience />
      <Education />
    </div>
  </div>
</template>

<script>
import Profile from "./Profile";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Typewriter from "./Typewriter";

import { mapState } from "vuex";
export default {
  name: "Container",
  components: {
    Profile,
    Projects,
    Experience,
    Education,
	Typewriter,
  },
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style>
html{
  width: 100%;
}
 body {
  margin: 0;
  width: 100%;
  font-family: Victor Mono, "Courier New", Courier, monospace;
  background-color: whitesmoke;
  font-size: 1vw;
}
#container {
  width: 100%;
  text: center;
}
#container h1 {
  text-align: center;
  color: whitesmoke;
}

.pro-elements,
.res-elements {
  margin: 0px;
  padding: 15px;
}
.pro-elements {
  top: 0;
  height: auto;
  background-color: #1f2541;
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
  display: inline-block;
  vertical-align: top;
  margin: calc(((100% / 4)/ 3)/3);
  min-width: 300px;
}

.res-elements h2,legend {
  text-align: center;
  font-style: italic;
}
/* Use a media query to add a breakpoint at 800px: */
@media (max-width: 400px) {

}
</style>
