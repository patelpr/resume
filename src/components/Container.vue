<template>
  <div id="container" style="margin: 0px; padding: 0px; width: 100%">
      <Profile />
    <div>
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
    <div>
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
  height: 700px;
  width: 100%;
  font-family: Victor Mono,'Courier New', Courier, monospace;
}



</style>
