<template>
	<div id="app">
		<div class="header" ref="header">
			<div class="inner">
				<router-link to="/">Home</router-link>
				<router-link to="/whiskies">Whiskies</router-link>
			</div>
		</div>
		<router-view v-if="whiskies.length" :whiskies="whiskies" />
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				whiskies: []
			}
		},
		methods: {
			async getWhiskies() {
				const { data: { whiskies } } = await this.$http.get('/whiskies.json');
				this.whiskies = whiskies;
			}
		},
		created() {
			this.getWhiskies();
		}
	}
</script>

<style>
	html {
		background-color: #262d38;
	}
	body {
		width: 100%;
		margin: 0 auto 0;
	}
	#app {
		font-family: Arial;
		color: #100c08;
		text-align: center;
	}
	.header {
		background-color: #fdfdfd;
		text-align: left;
	}
	.header .inner {
		max-width: 1280px;
		padding: 0 15px;
		margin: 0 auto;
	}
	.header a {
		display: inline-block;
		font-family: 'Arial Black';
		font-size: 12px;
		color: #100c08;
		line-height: 20px;
		letter-spacing: 4px;
		text-decoration: none;
		text-transform: uppercase;
		margin: 0 20px;
		padding: 20px 0;
		-webkit-transition: all 0.25s ease-in-out;
		-moz-transition: all 0.25s ease-in-out;
		transition: all 0.25s ease-in-out;
	}
	.header a:hover {
		color: #cd2a1e;
	}
</style>
