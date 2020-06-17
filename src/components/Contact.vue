<template>
      <div class="panel">
      <fieldset>
      <legend>About</legend>
	  <p>My name is {{about.name}}, I am a {{about.profession}}.</p>
	  <p>{{about.email}}</p>
	  <p>{{about.goals}}</p>
	  <p>{{about.lang}}</p>
    </fieldset>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
	name:'Contact',
	computed:{
		...mapState(['about'])
	}

}
</script>

<style>

</style>