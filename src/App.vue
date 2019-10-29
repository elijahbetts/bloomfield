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
		background-color: #efefef;
	}
	body {
		width: 100%;
		margin: 0 auto 0;
	}
	#app {
		text-align: center;
	}
</style>
