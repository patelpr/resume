<template>
  <div id="container">

    <div class="pro">
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
@media (max-width: 1000px) {
*{
  font-size: 3vw;
  
}
.pro-panel,.res-panel{
  display: flex;
  flex-direction: column;

}
.pro-panel>div,.res-panel>div{
  width: auto;
}

  line-height:1em;
}
.panel h2{
  position: static;
}


.pro{
  background-color: #1f2541;
  color: whitesmoke;
  text-align: center;
}
html,body{
  width: 100%;
  margin: 0;
  font-family: Victor Mono, "Courier New", Courier, monospace;
  background-color: whitesmoke;
  overflow-x: hidden;

}
body{
  font-size: 1vw;
}
#container {
  width: 100%;
  text-align: center;
}
.pro-panel,.res-panel{
  display: flex;
}
#container>div{
flex-wrap: nowrap;
justify-content:space-evenly;  
}
#logo {
  text-align: center;
  margin:0;
  padding: 5px;
}

h2{
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
  margin:5px;
  color: white;
  transition: background-color 1.7s;
}
.stack:hover{
  background-color: whitesmoke;
  color: #1f2541;
  font-weight: 500;
  font-style: italic;
  
}

</style>
