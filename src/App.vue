<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				prices: {}
			}
		},
		mounted() {
			this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
				response => { this.prices = response.data.bpi }
			);
		}
	}
</script>

<style>
	#app {
		text-align: center;
	}
</style>
