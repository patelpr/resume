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
  font-size: calc(1em + 1vw)
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
  margin:0;
  padding: 15px;
}
.pro-elements{
  background-color: #1f2541;

}
.pro-elements > fieldset {
  display: inline-block;
  width: calc(100% / 4);
  display: inline-block;
  margin: calc(((100% / 4)/ 3)/3);
  min-width: 300px;
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
  border: .5px solid #1f2541;
  color: #1f2541;
  font-size: .7vw;
  text-align: left;
  padding: 15px;
}
.card:hover > .dropnotes {
  display: block;
}
@media (max-width: 800px) {
body>*{
  font-size: 3vw;
}
}
</style>
