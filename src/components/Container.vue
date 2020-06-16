<template>
  <div id="container">
    <div class="pro-elements" >
      <Profile />
    </div>
      <div class="res-elements">
        <Projects />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
</template>

<script>
import Profile from "./Profile";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";


export default {
  name: "Container",
  components: {
    Profile,
    Projects,
    Experience,
    Education,
    Skills,
  }
};
</script>

<style>
body {
  margin: 0;
  position: absolute;
  height: 300px;
  width: 100%;
  font-family: Victor Mono,'Courier New', Courier, monospace;
  background-color: #1f2541;

}
.pro-elements, .res-elements{
  margin: 0px;
  padding: 15px;
  left:0;
  right: 0;
  height: 50%;
  position: fixed;
  }
  .pro-elements{
    top:0;
  }
  .res-elements{

    background-color: whitesmoke;
    bottom:0;
  
  }
  .res-elements>*{
    display: inline-block;
    margin:10px;
    border: 2px dashed olive ;
    padding: 15px;
    min-width: 400px;
    top:0;
  }
  .res-elements h2{
    text-align: center;
  }
</style>
