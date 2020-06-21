<template>
      <div class="panel">
      <h2 class="blue">Summary</h2>

      <div>
        
    <p class="sums" v-for="(sum,index) in about.summary" :key="index">{{sum}}</p>
    </div>
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