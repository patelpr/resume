<template>
  <div class="container">
    <div class="blue">
		<div class="logo" style="text-align:center;margin:0;padding: 5px;"><Typewriter /></div>
    <div><Profile /></div>
    </div>
    <div><Resume /></div>
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

.pro,.res{
  display: flex;
  flex-flow: row wrap;
}
}

@media (max-width: 600px) {

.item{
min-width:300px;
}
}



.res{
  display: flex;
  justify-content: space-evenly;
  padding :10px;

}
.pro{
  display: flex;
  justify-content: space-between;

}

.blue{
  background-color: #1f2541;
  color:  whitesmoke;
  padding:5px;
}
.white{
  background-color: whitesmoke;
  color:  #1f2541;
}
.stack {
  display: inline-block;
  margin:5px;
  padding:0 15px;
  color: white;
  transition: background-color 1.7s;
}
.stack:hover{
  background-color: whitesmoke;
  color: #1f2541;
  font-weight: 500;
  font-style: italic;
}
a > div{
	border-left: 5px solid #1f2541;
	border-right: 5px solid #1f2541;
}
.item{
  flex: 4 4 auto;
  margin:15px;
  width: calc(100%/3)
}

</style>
