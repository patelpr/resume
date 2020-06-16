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
      <Typewriter />
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
  font-family: ubuntu;
}

#background {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://cdnsite2.assist.ro/sites/all/themes/assist/img/backgrounds/testimonials_bg.png) repeat;
  background-color: #095396;
}


</style>
