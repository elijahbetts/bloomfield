<template>
	<div id="whiskies">
		<div class="whiskies">
			<div class="subhead">
				<span>Sort by:</span>
				<select v-model="sorting" @change="sortBy">
					<option value="name">Name</option>
					<option value="style">Style</option>
					<option value="rating" selected="selected">Rating</option>
				</select>
				<span>Direction:</span>
				<select v-model="order" @change="sortBy">
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
			</div>
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
				whiskies: {},
				sorting: 'rating',
				order: 'desc'
			}
		},
		methods: {
			sortBy() {
				this.sorting == 'name' && (this.order == 'asc' ? this.sortByNameAsc() : this.sortByNameDesc());
				this.sorting == 'style' && (this.order == 'asc' ? this.sortByStyleAsc() : this.sortByStyleDesc());
				this.sorting == 'rating' && (this.order == 'asc' ? this.sortByRatingAsc() : this.sortByRatingDesc());
			},
			sortByNameAsc() {
				return this.whiskies.sort((a, b) => a.name.localeCompare(b.name));
			},
			sortByStyleAsc() {
				return this.whiskies.sort((a, b) => a.style.localeCompare(b.style));
			},
			sortByRatingAsc() {
				return this.whiskies.sort((a, b) => a.rating - b.rating);
			},
			sortByNameDesc() {
				return this.whiskies.sort((a, b) => b.name.localeCompare(a.name));
			},
			sortByStyleDesc() {
				return this.whiskies.sort((a, b) => b.style.localeCompare(a.style));
			},
			sortByRatingDesc() {
				return this.whiskies.sort((a, b) => b.rating - a.rating);
			}
		},
		async created() {
			let response = await this.$http.get('/whiskies.json');
			this.whiskies = response.data.whiskies;
			this.sortByRatingDesc();
		}
	}
</script>

<style scoped>
	.subhead {
		text-align: right;
		font-size: 14px;
		color: #fdfdfd;
		line-height: 16px;
		margin-bottom: 10px;
	}
	.subhead select {
		font-family: "Arial Black";
		color: #fdfdfd;
		background-color: #2d2f31;
		border: 0;
		border-bottom: 2px solid #fdfdfd;
		cursor: pointer;
		margin: 0 10px;
		-webkit-transition: all 0.25s ease-in-out;
		-moz-transition: all 0.25s ease-in-out;
		transition: all 0.25s ease-in-out;
	}
	.subhead select:active,
	.subhead select:focus,
	.subhead select:hover {
		outline: 0;
		border-bottom-color: #cd2a1e;
	}
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