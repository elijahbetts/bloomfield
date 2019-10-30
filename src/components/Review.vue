<template>
	<div id="review">
		<h1>Review.vue</h1>
		<h2>{{ $route.params.whisky }}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Review'
	}
</script>

<style scoped>
	h1, h2 {
		color: #fdfdfd;
	}
</style>
