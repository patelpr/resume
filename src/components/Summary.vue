<template>
      <div class="panel">
      <fieldset>
      <legend>Summary</legend>
    <p class="sums" v-for="(sum,index) in about.summary" :key="index">{{sum}}</p>
    </fieldset>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
	name:'Summary',
	computed:{
		...mapState(['about'])
	}
}
</script>

<style>

</style>