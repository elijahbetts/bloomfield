<template>
	<div id="whiskies">

		<div class="whiskies">
			<div class="whisky" v-for="scotch in whiskies.scotch" :key="scotch.name">
				<div class="wrapper">
					<div class="inner">
						<div class="name">{{ scotch.name }}</div>
						<div class="location">{{ scotch.style }}, {{ scotch.country }}</div>
						<div class="rating"><span class="number">{{ scotch.rating }}</span><img src="../assets/rating-star.svg" /></div>
					</div>
				</div>
			</div>
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
		async mounted() {
			let response = await this.$http.get('/whiskies.json');
			this.whiskies = response.data.whiskies;
		}
	}
</script>

<style scoped>
	#whiskies {
		position: relative;
		max-width: 1280px;
		min-width: 500px;
		margin: 0 auto;
		padding: 100px 0;
	}
	.whiskies {
		padding: 0 15px;
	}
	.whisky {
		display: inline-block;
		width: 50%;
		height: 80px;
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
	.whisky .name {
		display: table-cell;
		width: 30%;
		font-family: "Arial Black";
		font-size: 16px;
		line-height: 20px;
		text-transform: uppercase;
		vertical-align: middle;
		padding-right: 30px;
	}
	.whisky .location {
		display: table-cell;
		width: 30%;
		font-size: 14px;
		color: #cd2a1e;
		line-height: 16px;
		vertical-align: middle;
	}
	.whisky .rating {
		display: table-cell;
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

	.notes {
		text-align: center;
	}

	.notes .title {
		margin-bottom: 10px;
	}

	.notes .note {
		text-align: left;
	}
</style>