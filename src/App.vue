<template>
	<div id="app">
		<div class="header" ref="header">
			<div class="inner">
				<router-link to="/">Home</router-link>
				<router-link to="/whiskies">Whiskies</router-link>
			</div>
		</div>

		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		methods: {
			stickyHeader() {
				/* eslint-disable no-console */
				// this.$refs.header
				
			}
		},
		created() {
			window.addEventListener('scroll', this.stickyHeader);
		}
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
		color: #100c08;
		text-align: center;
	}
	.header {
		background-color: #fdfdfd;
		text-align: left;
		
	}
	.header .inner {
		padding: 0 15px;
	}
	.header a {
		display: inline-block;
		font-family: "Arial Black";
		font-size: 16px;
		color: #100c08;
		line-height: 20px;
		text-decoration: none;
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
