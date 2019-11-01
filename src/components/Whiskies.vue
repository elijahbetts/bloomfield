<template>
	<div id="whiskies">
		<div class="whiskies">
			<router-link class="whisky" v-for="whisky in whiskies" :key="whisky.id" :to="{ path: '/review/' + whisky.id }">
				<div class="wrapper">
					<div class="inner">
						<div class="cell name">{{ whisky.name }}</div>
						<div class="cell location">{{ whisky.style }}, {{ whisky.country }}</div>
						<div class="cell rating"><span class="number">{{ whisky.rating }}</span><img src="../assets/rating-star.svg" /></div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Whiskies',
		data() {
			return {
				whiskies: {}
			}
		},
		async created() {
			let response = await this.$http.get('/whiskies.json');
			this.whiskies = response.data.whiskies;
		}
	}
</script>

<style scoped>
	.whiskies {
		position: relative;
		max-width: 1300px;
		min-width: 500px;
		margin: 0 auto;
		padding: 100px 0;
	}
	.whisky {
		display: block;
		width: 100%;
		height: 80px;
		color: #100c08;
		text-decoration: none;
		text-align: left;
		background-color: #fdfdfd;
		margin-bottom: 15px;
		cursor: pointer;
	}
	.whisky .wrapper {
		height: 100%;
		padding: 0 15px;
	}
	.whisky .inner {
		position: relative;
		display: table;
		width: 100%;
		height: 100%;
	}
	.whisky .cell {
		display: table-cell;
	}
	.whisky .name {
		width: 30%;
		font-family: "Arial Black";
		font-size: 16px;
		line-height: 20px;
		text-transform: uppercase;
		vertical-align: middle;
	}
	.whisky .location {
		width: 30%;
		font-size: 14px;
		color: #cd2a1e;
		line-height: 16px;
		vertical-align: middle;
	}
	.whisky .rating {
		width: 15%;
		font-family: "Arial Black";
		font-size: 32px;
		text-align: right;
		vertical-align: middle;
	}
	.whisky .rating .number {
		vertical-align: middle;
	}
	.whisky .rating img {
		width: 20px;
		height: 20px;
		vertical-align: middle;
		padding-left: 5px;
	}
</style>