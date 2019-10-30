<template>
	<div id="app">
		<Whiskies />
	</div>
</template>

<script>
	import Whiskies from './components/Whiskies.vue';

	export default {
		name: 'app',
		components: {
			Whiskies
		},
	}
</script>

<style>
	html {
		background-color: #2d2f31;
	}
	body {
		width: 100%;
		margin: 0 auto 0;
	}
	#app {
		font-family: Arial;
		color: #000000;
		text-align: center;
	}
</style>
