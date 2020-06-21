<template>
<div>
	<Container />
</div>
</template>

<script>
import Container from './components/Container';

export default {
  name: 'App',
  components: {
    Container,
  },
};
</script>
<style>

html,body{
  width: 100%;
  margin: 0;
  font-family: Victor Mono, "Courier New", Courier, monospace;
  background-color: whitesmoke;
  text-align: center;

}
div{
  box-sizing: border-box;
}
a{
  text-decoration: none;
}


</style>
