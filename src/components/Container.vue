<template>
  <div id="container">
    <div class="pro-elements">
		<div id="logo"><Typewriter /></div>
      <Profile />
    </div>
    <div class="res">
      <Resume />
    </div>
  </div>
</template>

<script>
import Profile from "./Profile";
import Resume from "./Resume";
import Typewriter from "./Typewriter";

import { mapState } from "vuex";
export default {
  name: "Container",
  components: {
    Profile,
    Resume,
	Typewriter,
  },
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style>
@media (max-width: 800px) {
body>*{
  font-size: 3vw;
}
.card > h3,.card> h4{
  line-height:1em;
}

}
@media (max-width: 400px) {
body{
  font-size: 5vw;
}

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
  transition-property: display;
  transition-duration: 2s;
  transition-delay: .5s;
}
#container {
  width: 100%;
  text-align: center;
}
#logo {
  text-align: center;
  margin:0;
  padding: 5px;
  width: 100%;
}

h2{
  text-align: center;
  font-style: italic;
}
.blue{
  background-color: #1f2541;
  color:  whitesmoke;
}
.white{
  background-color: whitesmoke;
  color:  #1f2541;
}
.stack {
  display: inline-block;
  padding:0px 7px 0px 7px;
  margin:3px;
  color: white;
}
.stack:hover{
  background-color: whitesmoke;
  color: #1f2541;
  font-weight: 500;
  font-style: italic;
}

</style>
